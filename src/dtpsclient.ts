// import { Api, HttpClient } from "./dtpsApi";
import CryptoJS from "crypto-js";
import { Api, HttpClient } from "./dtpsApi.js";

interface DTPSInitConfig {
  url: string;
  apiKey: string;
  apiSecret: string;
}

const generateSignature = (secret: string, path: string, data: any) => {
  let message = path;
  if (data) {
    message += data;
  }

  const signature = CryptoJS.HmacSHA256(message, secret);
  return CryptoJS.enc.Hex.stringify(signature);
};

export class DTPSClient {
  init(config: DTPSInitConfig) {
    const httpClient = this.generateHTTPClient(config);
    const api = new Api(httpClient);
    return api;
  }

  private generateHTTPClient({ url, apiKey, apiSecret }: DTPSInitConfig) {
    const httpClient = new HttpClient({
      baseURL: url,
    });
    httpClient.instance.interceptors.request.use((config: any) => {
      const fullUrl = httpClient.instance.getUri(config);
      const urlObj = new URL(fullUrl);

      // const urlObj = new URL(config.url!, config.baseURL);

      // Merge params from config.params if they exist
      if (config.params) {
        Object.entries(config.params).forEach(([key, value]) => {
          if (value !== undefined && value !== null) {
            urlObj.searchParams.set(key, String(value));
          }
        });
      }

      const pathWithQuery = `${urlObj.pathname}${urlObj.search}`;

      const body = config.data
        ? typeof config.data === "string"
          ? config.data
          : JSON.stringify(config.data)
        : "";

      config.data = body;

      const signature = generateSignature(apiSecret, pathWithQuery, body);

      config.headers["X-Api-Key"] = apiKey;
      config.headers["X-Api-Signature"] = signature;

      return config;
    });

    httpClient.instance.interceptors.response.use(
      (response: any) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error?.response?.data || "");
      },
    );

    return httpClient;
  }
}
