/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
export var ModelCardTopupStatus;
(function (ModelCardTopupStatus) {
    ModelCardTopupStatus["CTS_NOT_INITIALIZED"] = "NOT_INITIALIZED";
    ModelCardTopupStatus["CTS_PENDING"] = "PENDING";
    ModelCardTopupStatus["CTS_SUCCESS"] = "SUCCESS";
    ModelCardTopupStatus["CTS_FAILED"] = "FAILED";
})(ModelCardTopupStatus || (ModelCardTopupStatus = {}));
export var ModelCardPurchaseApplicationStatus;
(function (ModelCardPurchaseApplicationStatus) {
    ModelCardPurchaseApplicationStatus["CPAS_NOT_INITIALIZED"] = "NOT_INITIALIZED";
    ModelCardPurchaseApplicationStatus["CPAS_PENDING"] = "PENDING";
    ModelCardPurchaseApplicationStatus["CPAS_SUCCESS"] = "SUCCESS";
    ModelCardPurchaseApplicationStatus["CPAS_FAILED"] = "FAILED";
    ModelCardPurchaseApplicationStatus["CPAS_SHIPPED"] = "SHIPPED";
})(ModelCardPurchaseApplicationStatus || (ModelCardPurchaseApplicationStatus = {}));
import axios from "axios";
export var ContentType;
(function (ContentType) {
    ContentType["Json"] = "application/json";
    ContentType["JsonApi"] = "application/vnd.api+json";
    ContentType["FormData"] = "multipart/form-data";
    ContentType["UrlEncoded"] = "application/x-www-form-urlencoded";
    ContentType["Text"] = "text/plain";
})(ContentType || (ContentType = {}));
export class HttpClient {
    instance;
    securityData = null;
    securityWorker;
    secure;
    format;
    constructor({ securityWorker, secure, format, ...axiosConfig } = {}) {
        this.instance = axios.create({
            ...axiosConfig,
            baseURL: axiosConfig.baseURL || "/api/v2",
        });
        this.secure = secure;
        this.format = format;
        this.securityWorker = securityWorker;
    }
    setSecurityData = (data) => {
        this.securityData = data;
    };
    mergeRequestParams(params1, params2) {
        const method = params1.method || (params2 && params2.method);
        return {
            ...this.instance.defaults,
            ...params1,
            ...(params2 || {}),
            headers: {
                ...((method &&
                    this.instance.defaults.headers[method.toLowerCase()]) ||
                    {}),
                ...(params1.headers || {}),
                ...((params2 && params2.headers) || {}),
            },
        };
    }
    stringifyFormItem(formItem) {
        if (typeof formItem === "object" && formItem !== null) {
            return JSON.stringify(formItem);
        }
        else {
            return `${formItem}`;
        }
    }
    createFormData(input) {
        if (input instanceof FormData) {
            return input;
        }
        return Object.keys(input || {}).reduce((formData, key) => {
            const property = input[key];
            const propertyContent = property instanceof Array ? property : [property];
            for (const formItem of propertyContent) {
                const isFileType = formItem instanceof Blob || formItem instanceof File;
                formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
            }
            return formData;
        }, new FormData());
    }
    request = async ({ secure, path, type, query, format, body, ...params }) => {
        const secureParams = ((typeof secure === "boolean" ? secure : this.secure) &&
            this.securityWorker &&
            (await this.securityWorker(this.securityData))) ||
            {};
        const requestParams = this.mergeRequestParams(params, secureParams);
        const responseFormat = format || this.format || undefined;
        if (type === ContentType.FormData &&
            body &&
            body !== null &&
            typeof body === "object") {
            body = this.createFormData(body);
        }
        if (type === ContentType.Text &&
            body &&
            body !== null &&
            typeof body !== "string") {
            body = JSON.stringify(body);
        }
        return this.instance.request({
            ...requestParams,
            headers: {
                ...(requestParams.headers || {}),
                ...(type ? { "Content-Type": type } : {}),
            },
            params: query,
            responseType: responseFormat,
            data: body,
            url: path,
        });
    };
}
/**
 * @title DTPS External Partner API
 * @version 2.0
 * @baseUrl /api/v2
 * @contact
 *
 * DTPS monolith API documentation. Each HTTP engine exposes its own filtered Swagger document.
 */
export class Api {
    http;
    constructor(http) {
        this.http = http;
    }
    card = {
        /**
         * @description Activate Card
         *
         * @tags engine-partner-api
         * @name ActivateCard
         * @summary Activate Card
         * @request POST:/card/activate
         */
        activateCard: (card, params = {}) => this.http.request({
            path: `/card/activate`,
            method: "POST",
            body: card,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Activate Replacement Card
         *
         * @tags engine-partner-api
         * @name ActivateReplacementCard
         * @summary Activate Replacement Card
         * @request POST:/card/activate/replacement
         */
        activateReplacementCard: (card, params = {}) => this.http.request({
            path: `/card/activate/replacement`,
            method: "POST",
            body: card,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Apply Card
         *
         * @tags engine-partner-api
         * @name ApplyCard
         * @summary Apply Card
         * @request POST:/card/application/apply
         */
        applyCard: (application, params = {}) => this.http.request({
            path: `/card/application/apply`,
            method: "POST",
            body: application,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All Partner Applications
         *
         * @tags engine-partner-api
         * @name GetAllPartnerApplications
         * @summary Get All Partner Applications
         * @request GET:/card/application/details
         */
        getAllPartnerApplications: (query, params = {}) => this.http.request({
            path: `/card/application/details`,
            method: "GET",
            query: query,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All Partner Applications
         *
         * @tags engine-partner-api
         * @name GetAllPartnerApplications2
         * @summary Get All Partner Applications
         * @request GET:/card/application/list
         * @originalName getAllPartnerApplications
         * @duplicate
         */
        getAllPartnerApplications2: (query, params = {}) => this.http.request({
            path: `/card/application/list`,
            method: "GET",
            query: query,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Apply Card
         *
         * @tags engine-partner-api
         * @name ApplyCard2
         * @summary Apply Card
         * @request POST:/card/application/noverify/apply
         * @originalName applyCard
         * @duplicate
         */
        applyCard2: (application, params = {}) => this.http.request({
            path: `/card/application/noverify/apply`,
            method: "POST",
            body: application,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Card Application By Id
         *
         * @tags engine-partner-api
         * @name GetCardApplicationById
         * @summary Get Card Application By Id
         * @request GET:/card/application/{cardapplicationId}
         */
        getCardApplicationById: (cardapplicationId, params = {}) => this.http.request({
            path: `/card/application/${cardapplicationId}`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Card Balance By Card Id
         *
         * @tags engine-partner-api
         * @name GetCardBalanceByCardId
         * @summary Get Card Balance By Card Id
         * @request GET:/card/balance/id/{cardId}
         */
        getCardBalanceByCardId: (cardId, params = {}) => this.http.request({
            path: `/card/balance/id/${cardId}`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Block a virtual card
         *
         * @tags engine-partner-api
         * @name BlockVirtualCard
         * @summary Block Virtual Card
         * @request POST:/card/block
         */
        blockVirtualCard: (card, params = {}) => this.http.request({
            path: `/card/block`,
            method: "POST",
            body: card,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Enable/Disable Online Transactions
         *
         * @tags engine-partner-api
         * @name EnableDisableOnlineTransactions
         * @summary Enable/Disable Online Transactions
         * @request POST:/card/enable_online_txn
         */
        enableDisableOnlineTransactions: (card, params = {}) => this.http.request({
            path: `/card/enable_online_txn`,
            method: "POST",
            body: card,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Cards
         *
         * @tags engine-partner-api
         * @name GetCards
         * @summary Get Cards
         * @request GET:/card/list
         */
        getCards: (params = {}) => this.http.request({
            path: `/card/list`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Apply Card Topup
         *
         * @tags engine-partner-api
         * @name ApplyCardTopup
         * @summary Apply Card Topup
         * @request POST:/card/topup/apply
         */
        applyCardTopup: (topup, params = {}) => this.http.request({
            path: `/card/topup/apply`,
            method: "POST",
            body: topup,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get All Partner Card Topup Applications
         *
         * @tags engine-partner-api
         * @name GetAllPartnerCardTopupApplications
         * @summary Get All Partner Card Topup Applications
         * @request GET:/card/topup/list
         */
        getAllPartnerCardTopupApplications: (params = {}) => this.http.request({
            path: `/card/topup/list`,
            method: "GET",
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Get Card Txn History By Card Id
         *
         * @tags engine-partner-api
         * @name GetCardTxnHistoryByCardId
         * @summary Get Card Txn History By Card Id
         * @request GET:/card/txnhistory/id/{cardId}
         */
        getCardTxnHistoryByCardId: (cardId, query, params = {}) => this.http.request({
            path: `/card/txnhistory/id/${cardId}`,
            method: "GET",
            query: query,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * @description Unblock a virtual card
         *
         * @tags engine-partner-api
         * @name UnblockVirtualCard
         * @summary Unblock Virtual Card
         * @request POST:/card/unblock
         */
        unblockVirtualCard: (card, params = {}) => this.http.request({
            path: `/card/unblock`,
            method: "POST",
            body: card,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
    };
    user = {
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name CreateAPartnerUser
         * @summary Create a partner user
         * @request POST:/user/create
         * @secure
         */
        createAPartnerUser: (user, params = {}) => this.http.request({
            path: `/user/create`,
            method: "POST",
            body: user,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name UploadUserDocuments
         * @summary Upload user documents
         * @request POST:/user/document/upload
         * @secure
         */
        uploadUserDocuments: (documents, params = {}) => this.http.request({
            path: `/user/document/upload`,
            method: "POST",
            body: documents,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name ListPartnerUsers
         * @summary List partner users
         * @request GET:/user/list
         * @secure
         */
        listPartnerUsers: (params = {}) => this.http.request({
            path: `/user/list`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name UpdateAPartnerUser
         * @summary Update a partner user
         * @request POST:/user/update/{userId}
         * @secure
         */
        updateAPartnerUser: (userId, user, params = {}) => this.http.request({
            path: `/user/update/${userId}`,
            method: "POST",
            body: user,
            secure: true,
            type: ContentType.Json,
            format: "json",
            ...params,
        }),
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name GetAPartnerUserById
         * @summary Get a partner user by ID
         * @request GET:/user/{userId}
         * @secure
         */
        getAPartnerUserById: (userId, params = {}) => this.http.request({
            path: `/user/${userId}`,
            method: "GET",
            secure: true,
            format: "json",
            ...params,
        }),
    };
}
