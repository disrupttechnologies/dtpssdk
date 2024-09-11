import { describe, it, beforeEach, expect } from "bun:test";
import { DTPSClient } from "../src/dtpsclient";
import { Api, UsercontrollerCreateUserInputDTO, UsercontrollerDocumentInputDto, UsercontrollerUploadUserDocsInputDTO } from "../src/dtpsApi";
import {  faker } from '@faker-js/faker';
import moment from "moment";




const mockImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAADMElEQVR4nOzVwQnAIBQFQYXff81RUkQCOyDj1YOPnbXWPmeTRef+/3O/OyBjzh3CD95BfqICMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMK0CMO0TAAD//2Anhf4QtqobAAAAAElFTkSuQmCC"

describe('UserTesting (e2e)', () => {
    let client: Api<unknown>
  
    beforeEach(async () => {
        const url = process.env.API_URL?process.env.API_URL:""
        const apiKey =process.env.API_KEY?process.env.API_KEY:""
        const apiSecret = process.env.API_SECRET? process.env.API_SECRET:""
        const dtpsClient = new DTPSClient().init({
            url,
            apiKey,
            apiSecret,
        })
        client = dtpsClient;
    });
  
    it('getUsers', async() => {
        const resp = await client.user.listList()

        expect(resp.status).toBe(200)
        expect(true).toBe(Array.isArray(resp.data));
    });

    it('createUser', async () => {
        const genders = ["Male","Female","Other","None"]
        const payload: UsercontrollerCreateUserInputDTO = {
            birth_country: faker.location.countryCode(),
            district: faker.location.city(),
            dob: moment(faker.date.birthdate()).format("DD/MM/YYYY"),
            first_name: faker.person.firstName(),
            gender: genders[Math.floor(Math.random() * genders.length)],
            isd_code: 1,
            last_name: faker.person.lastName(),
            mail: faker.internet.email(),
            occupation: faker.person.jobTitle(),
            passportnumber: faker.vehicle.vin(),
            place_of_birth: faker.location.country(),
            province: faker.location.county(),
            telephone: faker.phone.number(),
            title: faker.person.jobTitle(),
            village: faker.location.county(),
        }
        try {
            const resp = await client.user.createCreate(payload);
            expect(resp.status).toBe(200)
        } catch (err: any) {
            console.error(err)
            throw  err 
            
        }
    });


    it('uploaddocuments', async () => {
        const userListResp = await client.user.listList()
        //@ts-ignore
        const oneUser = userListResp.data[0]
        const userId = oneUser.id


        const documents: UsercontrollerDocumentInputDto[] = []
        for (const docName of ["PASSPORT", "SIGNATURE", "SELFIE","SELFIE_WITH_PASSPORT"]) {
            documents.push({
                docName,
                base64data:mockImg
            })
        }
        const payload: UsercontrollerUploadUserDocsInputDTO = {
            userId,
            documents
        }

        const resp = await client.user.documentUploadCreate(payload);

        expect(resp.status).toBe(200)

    });
  });