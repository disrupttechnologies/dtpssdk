export declare enum ModelCardTopupStatus {
    CTS_NOT_INITIALIZED = "NOT_INITIALIZED",
    CTS_PENDING = "PENDING",
    CTS_SUCCESS = "SUCCESS",
    CTS_FAILED = "FAILED"
}
export declare enum ModelCardPurchaseApplicationStatus {
    CPAS_NOT_INITIALIZED = "NOT_INITIALIZED",
    CPAS_PENDING = "PENDING",
    CPAS_SUCCESS = "SUCCESS",
    CPAS_FAILED = "FAILED",
    CPAS_SHIPPED = "SHIPPED"
}
export interface DtoBlockUnblockCardInput {
    cardId: string;
}
export interface DtoOkResponse {
    message?: string;
}
export interface DtoPartnerApiActivateCardRequest {
    name: string;
    selfieImg: string;
    userCardId: string;
}
export interface DtoPartnerApiApplyCardTopupRequest {
    amount: number;
    userCardId: string;
}
export interface DtoPartnerApiBalanceResponse {
    balance?: string;
}
export interface DtoPartnerApiCreateUserRequest {
    birth_country: string;
    district: string;
    dob: string;
    documents?: DtoPartnerApiDocumentInputDTO[];
    first_name: string;
    gender: string;
    isd_code: number;
    last_name: string;
    mail: string;
    occupation: string;
    passport_expiry_date: string;
    passport_issue_date: string;
    passportnumber: string;
    /** @maxLength 50 */
    place_of_birth: string;
    province: string;
    /**
     * @minLength 7
     * @maxLength 15
     */
    telephone: string;
    /** @maxLength 5 */
    title: string;
    village: string;
}
export interface DtoPartnerApiDocumentInputDTO {
    base64data: string;
    docName: string;
}
export interface DtoPartnerApiIssueCardRequest {
    accountNumber?: string;
    cardId: string;
    cardNumber?: string;
    /** @maxLength 21 */
    embossname: string;
    userAddress?: string;
    userId: string;
    zipcode?: string;
}
export interface DtoPartnerApiReplacementCardActivateRequest {
    name: string;
    newCardNumber: string;
    selfieImg: string;
    userCardId: string;
}
export interface DtoPartnerApiUpdateUserRequest {
    birth_country?: string;
    district?: string;
    dob?: string;
    first_name?: string;
    gender?: string;
    isd_code?: number;
    last_name?: string;
    mail?: string;
    occupation?: string;
    passport_expiry_date?: string;
    passport_issue_date?: string;
    passportnumber?: string;
    /** @maxLength 50 */
    place_of_birth?: string;
    province?: string;
    telephone?: string;
    /** @maxLength 5 */
    title?: string;
    village?: string;
}
export interface DtoPartnerApiUploadUserDocsRequest {
    documents: DtoPartnerApiDocumentInputDTO[];
    userId: string;
}
export interface DtoVCSetOnlineTxnInput {
    cardId: string;
    enable: boolean;
}
export interface JdbTransactionHistoryItem {
    acc_number?: string;
    auth_stat?: string;
    card_number?: string;
    cr_amount?: number;
    description?: string;
    dr_amount?: number;
    end_bal?: number;
    executed_at?: string;
    srNo?: number;
    trn_code?: string;
    trn_ref_number?: string;
    user_id?: string;
}
export interface ModelCardPurchaseApplication {
    cardDeliveryAddress?: string;
    createdAt?: string;
    embossName?: string;
    handledById?: string;
    id?: string;
    memberCardId?: string;
    pcid?: string;
    remarks?: string;
    shippingId?: string;
    status?: ModelCardPurchaseApplicationStatus;
    ucid?: string;
    updatedAt?: string;
    userId?: string;
    zipCode?: string;
}
export interface ModelCardTopupApplication {
    createdAt?: string;
    failedRemarks?: string;
    fee?: string;
    finalAmount?: string;
    id?: string;
    processedById?: string;
    requestedAmount?: string;
    status?: ModelCardTopupStatus;
    updatedAt?: string;
    userCardId?: string;
}
export interface ModelPartnerCard {
    createdAt?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    partnerId?: string;
    price?: string;
    topupFeePercent?: string;
    updatedAt?: string;
}
export interface ModelUser {
    createdAt?: string;
    email?: string;
    fullName?: string;
    id?: string;
    isEnabled?: boolean;
    partnerId?: string;
    passportNumber?: string;
    updatedAt?: string;
}
export interface RepositoryCPADetailsPayload {
    failed?: string[];
    pending?: string[];
    success?: RepositoryCPASuccess[];
}
export interface RepositoryCPASuccess {
    accountNumber?: string;
    applicationId?: string;
    cardNumber?: string;
    ucid?: string;
}
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";
export type QueryParamsType = Record<string | number, any>;
export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: ResponseType;
    /** request body */
    body?: unknown;
}
export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
    securityWorker?: (securityData: SecurityDataType | null) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
    secure?: boolean;
    format?: ResponseType;
}
export declare enum ContentType {
    Json = "application/json",
    JsonApi = "application/vnd.api+json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded",
    Text = "text/plain"
}
export declare class HttpClient<SecurityDataType = unknown> {
    instance: AxiosInstance;
    private securityData;
    private securityWorker?;
    private secure?;
    private format?;
    constructor({ securityWorker, secure, format, ...axiosConfig }?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType | null) => void;
    protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig;
    protected stringifyFormItem(formItem: unknown): string;
    protected createFormData(input: Record<string, unknown>): FormData;
    request: <T = any, _E = any>({ secure, path, type, query, format, body, ...params }: FullRequestParams) => Promise<AxiosResponse<T>>;
}
/**
 * @title DTPS External Partner API
 * @version 2.0
 * @baseUrl /api/v2
 * @contact
 *
 * DTPS monolith API documentation. Each HTTP engine exposes its own filtered Swagger document.
 */
export declare class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    card: {
        /**
         * @description Activate Card
         *
         * @tags engine-partner-api
         * @name ActivateCard
         * @summary Activate Card
         * @request POST:/card/activate
         */
        activateCard: (card: DtoPartnerApiActivateCardRequest, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
        /**
         * @description Activate Replacement Card
         *
         * @tags engine-partner-api
         * @name ActivateReplacementCard
         * @summary Activate Replacement Card
         * @request POST:/card/activate/replacement
         */
        activateReplacementCard: (card: DtoPartnerApiReplacementCardActivateRequest, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
        /**
         * @description Apply Card
         *
         * @tags engine-partner-api
         * @name ApplyCard
         * @summary Apply Card
         * @request POST:/card/application/apply
         */
        applyCard: (application: DtoPartnerApiIssueCardRequest, params?: RequestParams) => Promise<AxiosResponse<ModelCardPurchaseApplication, any>>;
        /**
         * @description GetCardApplicationDetails
         *
         * @tags engine-partner-api
         * @name GetCardApplicationDetails
         * @summary GetCardApplicationDetails
         * @request GET:/card/application/details
         */
        getCardApplicationDetails: (query?: {
            /** Comma-separated card application ids */
            ids?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<RepositoryCPADetailsPayload, any>>;
        /**
         * @description Get All Partner Applications
         *
         * @tags engine-partner-api
         * @name GetAllPartnerApplications
         * @summary Get All Partner Applications
         * @request GET:/card/application/list
         */
        getAllPartnerApplications: (query?: {
            /** Status */
            status?: string;
            /** Comma-separated card application ids */
            ids?: string;
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelCardPurchaseApplication[], any>>;
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
        applyCard2: (application: DtoPartnerApiIssueCardRequest, params?: RequestParams) => Promise<AxiosResponse<ModelCardPurchaseApplication, any>>;
        /**
         * @description Get Card Application By Id
         *
         * @tags engine-partner-api
         * @name GetCardApplicationById
         * @summary Get Card Application By Id
         * @request GET:/card/application/{cardapplicationId}
         */
        getCardApplicationById: (cardapplicationId: string, params?: RequestParams) => Promise<AxiosResponse<ModelCardPurchaseApplication, any>>;
        /**
         * @description Get Card Balance By Card Id
         *
         * @tags engine-partner-api
         * @name GetCardBalanceByCardId
         * @summary Get Card Balance By Card Id
         * @request GET:/card/balance/id/{cardId}
         */
        getCardBalanceByCardId: (cardId: string, params?: RequestParams) => Promise<AxiosResponse<DtoPartnerApiBalanceResponse, any>>;
        /**
         * @description Block a virtual card
         *
         * @tags engine-partner-api
         * @name BlockVirtualCard
         * @summary Block Virtual Card
         * @request POST:/card/block
         */
        blockVirtualCard: (card: DtoBlockUnblockCardInput, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
        /**
         * @description Enable/Disable Online Transactions
         *
         * @tags engine-partner-api
         * @name EnableDisableOnlineTransactions
         * @summary Enable/Disable Online Transactions
         * @request POST:/card/enable_online_txn
         */
        enableDisableOnlineTransactions: (card: DtoVCSetOnlineTxnInput, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
        /**
         * @description Get Cards
         *
         * @tags engine-partner-api
         * @name GetCards
         * @summary Get Cards
         * @request GET:/card/list
         */
        getCards: (params?: RequestParams) => Promise<AxiosResponse<ModelPartnerCard[], any>>;
        /**
         * @description Apply Card Topup
         *
         * @tags engine-partner-api
         * @name ApplyCardTopup
         * @summary Apply Card Topup
         * @request POST:/card/topup/apply
         */
        applyCardTopup: (topup: DtoPartnerApiApplyCardTopupRequest, params?: RequestParams) => Promise<AxiosResponse<ModelCardTopupApplication, any>>;
        /**
         * @description Get All Partner Card Topup Applications
         *
         * @tags engine-partner-api
         * @name GetAllPartnerCardTopupApplications
         * @summary Get All Partner Card Topup Applications
         * @request GET:/card/topup/list
         */
        getAllPartnerCardTopupApplications: (query?: {
            /** Comma-separated card topup application ids */
            topupids?: string;
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelCardTopupApplication[], any>>;
        /**
         * @description Get Card Txn History By Card Id
         *
         * @tags engine-partner-api
         * @name GetCardTxnHistoryByCardId
         * @summary Get Card Txn History By Card Id
         * @request GET:/card/txnhistory/id/{cardId}
         */
        getCardTxnHistoryByCardId: (cardId: string, query?: {
            /** Start Date */
            startDate?: string;
            /** End Date */
            endDate?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<JdbTransactionHistoryItem[], any>>;
        /**
         * @description Unblock a virtual card
         *
         * @tags engine-partner-api
         * @name UnblockVirtualCard
         * @summary Unblock Virtual Card
         * @request POST:/card/unblock
         */
        unblockVirtualCard: (card: DtoBlockUnblockCardInput, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
    };
    user: {
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name CreateAPartnerUser
         * @summary Create a partner user
         * @request POST:/user/create
         * @secure
         */
        createAPartnerUser: (user: DtoPartnerApiCreateUserRequest, params?: RequestParams) => Promise<AxiosResponse<ModelUser, any>>;
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name UploadUserDocuments
         * @summary Upload user documents
         * @request POST:/user/document/upload
         * @secure
         */
        uploadUserDocuments: (documents: DtoPartnerApiUploadUserDocsRequest, params?: RequestParams) => Promise<AxiosResponse<DtoOkResponse, any>>;
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name ListPartnerUsers
         * @summary List partner users
         * @request GET:/user/list
         * @secure
         */
        listPartnerUsers: (params?: RequestParams) => Promise<AxiosResponse<ModelUser[], any>>;
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name UpdateAPartnerUser
         * @summary Update a partner user
         * @request POST:/user/update/{userId}
         * @secure
         */
        updateAPartnerUser: (userId: string, user: DtoPartnerApiUpdateUserRequest, params?: RequestParams) => Promise<AxiosResponse<ModelUser, any>>;
        /**
         * No description
         *
         * @tags engine-partner-api
         * @name GetAPartnerUserById
         * @summary Get a partner user by ID
         * @request GET:/user/{userId}
         * @secure
         */
        getAPartnerUserById: (userId: string, params?: RequestParams) => Promise<AxiosResponse<ModelUser, any>>;
    };
}
//# sourceMappingURL=dtpsApi.d.ts.map