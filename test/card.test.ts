import { describe, it, beforeEach, expect } from "bun:test";
import { DTPSClient } from "../src/dtpsclient";
import { Api, CardcontrollerApplyCardTopupInputDTO, CardcontrollerIssueCardInputDTO, } from "../src/dtpsApi";
import {  faker } from '@faker-js/faker';




const userId = "3564baae-9be7-4d7b-b866-06c4ce93e4f7"
const cardTopupId ="9c675013-53ab-4a12-80e2-fc51fba924f4"
describe('CardTesting', () => {
    let client: Api<any>
  
    beforeEach(async () => {
        const url = process.env.API_URL?process.env.API_URL:""
        const apiKey =process.env.API_KEY?process.env.API_KEY:""
        const apiSecret = process.env.API_SECRET ? process.env.API_SECRET : ""
        const dtpsClient = new DTPSClient().init({
            url,
            apiKey,
            apiSecret,
        })
        client = dtpsClient;
    });
  

    it('getApplication', async() => {
        const resp = await client.card.getAllCardApplications()
        expect(resp.status).toBe(200)
        expect(true).toBe(Array.isArray(resp.data));
    });

    it('applyCard', async() => {
        const cardListResponse = await client.card.getAvailableCards()
        expect(cardListResponse.status).toBe(200)
        expect(true).toBe(Array.isArray(cardListResponse.data));
        expect(true).toBe(cardListResponse.data.length>0);

        // apply card 

        const cardId = cardListResponse.data[0].id!
        
        const cardApplyPayload: CardcontrollerIssueCardInputDTO = {
            cardId,
            carddeliveryaddress: faker.location.streetAddress(),
            embossname: faker.person.firstName()+faker.person.lastName(),
            userId
        }

        try {
            const cardApplyResp = await client.card.applyCard(cardApplyPayload)

        } catch (Err) {
            console.error("applyCard",Err)
        }

    });





    it('handleTopup', async() => {
        const cardListResponse = await client.card.getAvailableCards()
        expect(cardListResponse.status).toBe(200)
        expect(true).toBe(Array.isArray(cardListResponse.data));
        expect(true).toBe(cardListResponse.data.length>0);
        
        const cardApplyPayload: CardcontrollerApplyCardTopupInputDTO = {
            amount: 100,
            userCardId:cardTopupId,
        }

        try {
            const cardTopupResp = await client.card.applyCardTopup(cardApplyPayload)
            expect(cardTopupResp.status).toBe(200)

        } catch (Err) {
            console.error("handleTopup",Err)
        }

    });

    
  });