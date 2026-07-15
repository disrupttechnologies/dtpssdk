import { Api } from "./dtpsApi.js";
interface DTPSInitConfig {
    url: string;
    apiKey: string;
    apiSecret: string;
}
export declare class DTPSClient {
    init(config: DTPSInitConfig): Api<unknown>;
    private generateHTTPClient;
}
export {};
//# sourceMappingURL=dtpsclient.d.ts.map