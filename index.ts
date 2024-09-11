import { AxiosError } from "axios";
import { Api, HttpClient } from "./src/dtpsApi";
import { DTPSClient } from "./src/dtpsclient";
require("dotenv").config()

const main = async () => {
 
    const url = "https://dtpspartnerapi-development.fly.dev/api/v1"
    const apiKey =process.env.API_KEY?process.env.API_KEY:""
    const apiSecret = process.env.API_SECRET? process.env.API_SECRET:""
    const dtpsClient = new DTPSClient().init({
        url,
        apiKey,
        apiSecret,
    })
  const resp = await    dtpsClient.card.getAvailableCards()

    console.log("resp", resp);
};

main();
