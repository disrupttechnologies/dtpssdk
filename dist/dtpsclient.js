import { Api, HttpClient } from "./dtpsApi";
import crypto from "crypto";
const generateSignature = (secret, path, data) => {
    const signature = crypto.createHmac("sha256", secret);
    let message = path;
    if (data) {
        message += data;
    }
    signature.update(message);
    return signature.digest("hex");
};
export class DTPSClient {
    init(config) {
        const httpClient = this.generateHTTPClient(config);
        const api = new Api(httpClient);
        return api;
    }
    generateHTTPClient({ url, apiKey, apiSecret }) {
        const httpClient = new HttpClient({
            baseURL: url,
        });
        httpClient.instance.interceptors.request.use((config) => {
            //@ts-ignore
            const fullURL = config.baseURL + config.url;
            if (config.data) {
                config.data = JSON.stringify(config.data);
            }
            const urlObj = new URL(fullURL);
            const signature = generateSignature(apiSecret, urlObj.pathname, config.data);
            config.headers["X-Api-Key"] = apiKey;
            config.headers["X-Api-Signature"] = signature;
            return config;
        }, (error) => {
            // Handle the error
            return Promise.reject(error);
        });
        httpClient.instance.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            return Promise.reject(error.response.data);
        });
        return httpClient;
    }
}
