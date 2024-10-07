export interface CardcontrollerActivateCardInputDTO {
    selfieImg: string;
    userCardId: string;
}
export interface CardcontrollerApplyCardTopupInputDTO {
    amount: number;
    userCardId: string;
}
export interface CardcontrollerBalanceResponse {
    balance?: string;
}
export interface CardcontrollerIssueCardInputDTO {
    cardId: string;
    carddeliveryaddress: string;
    /** @maxLength 25 */
    embossname: string;
    userId: string;
}
export interface CardcontrollerTransaction {
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
export interface ModelsCardPurchaseApplication {
    cardDeliveryAddress?: string;
    createdAt?: string;
    embossName?: string;
    handledById?: string;
    id?: string;
    pcid?: string;
    remarks?: string;
    status?: ModelsCardPurchaseApplicationStatus;
    ucid?: string;
    updatedAt?: string;
    userId?: string;
}
export declare enum ModelsCardPurchaseApplicationStatus {
    CPAS_NOT_INITIALIZED = "NOT_INITIALIZED",
    CPAS_PENDING = "PENDING",
    CPAS_SUCCESS = "SUCCESS",
    CPAS_FAILED = "FAILED",
    DOCUMENT_NOT_INITIALIZED = "NOT_INITIALIZED",
    DOCUMENT_SUCCESS = "SUCCESS",
    DOCUMENT_FAILED = "FAILED"
}
export interface ModelsCardTopupApplication {
    createdAt?: string;
    failedRemarks?: string;
    fee?: string;
    finalAmount?: string;
    id?: string;
    processedById?: string;
    requestedAmount?: string;
    status?: ModelsCardTopupStatus;
    updatedAt?: string;
    userCard?: ModelsUserCard;
    userCardId?: string;
}
export declare enum ModelsCardTopupStatus {
    CTS_NOT_INITIALIZED = "NOT_INITIALIZED",
    CTS_PENDING = "PENDING",
    CTS_SUCCESS = "SUCCESS",
    CTS_FAILED = "FAILED"
}
export interface ModelsPartner {
    createdAt?: string;
    createdByID?: string;
    email?: string;
    floatBalMinThreshold?: string;
    floatBalance?: string;
    id?: string;
    is2FAEnabled?: boolean;
    isEnabled?: boolean;
    name?: string;
    updatedAt?: string;
}
export interface ModelsPartnerCard {
    cardId?: string;
    createdAt?: string;
    id?: string;
    isEnabled?: boolean;
    name?: string;
    partnerId?: string;
    price?: string;
    topupFeePercent?: string;
    updatedAt?: string;
}
export interface ModelsUser {
    accountInfo?: ModelsUserAccountInfo;
    applications?: ModelsCardPurchaseApplication[];
    cards?: ModelsUserCard[];
    createdAt?: string;
    email?: string;
    fullName?: string;
    id?: string;
    isEnabled?: boolean;
    partner?: ModelsPartner;
    partnerId?: string;
    passportNumber?: string;
    updatedAt?: string;
}
export interface ModelsUserAccountInfo {
    createdAt?: string;
    documents?: ModelsUserDocument[];
    failedRemarks?: string;
    id?: string;
    metadata?: string;
    status?: ModelsUserAccountInfoStatus;
    updatedAt?: string;
    userId?: string;
}
export declare enum ModelsUserAccountInfoStatus {
    UAIS_NOT_INITIALIZED = "NOT_INITIALIZED",
    UAIS_SUCCESS = "SUCCESS",
    UAIS_FAILED = "FAILED"
}
export interface ModelsUserCard {
    accountNumber?: string;
    applicationId?: string;
    cardActivationDetails?: ModelsUserCardActivation;
    cardNumber?: string;
    createdAt?: string;
    embossName?: string;
    id?: string;
    isEnabled?: boolean;
    pcid?: string;
    updatedAt?: string;
    user?: ModelsUser;
    userId?: string;
}
export interface ModelsUserCardActivation {
    createdAt?: string;
    failedRemarks?: string;
    handledByID?: string;
    id?: string;
    imgName?: string;
    status?: ModelsUserCardActivationStatus;
    updatedAt?: string;
    userCard?: ModelsUserCard;
    userCardId?: string;
}
export declare enum ModelsUserCardActivationStatus {
    UCAS_NOT_INITIALIZED = "NOT_INITIALIZED",
    UCAS_PENDING = "PENDING",
    UCAS_SUCCESS = "SUCCESS",
    UCAS_FAILED = "FAILED"
}
export interface ModelsUserDocument {
    createdAt?: string;
    documentStatus?: string;
    documentType?: string;
    failedRemarks?: string;
    fileName?: string;
    id?: string;
    updatedAt?: string;
    userInfoId?: string;
}
export interface ResponsesOkResponse {
    message?: string;
}
export interface UsercontrollerCreateUserInputDTO {
    birth_country: string;
    district: string;
    dob: string;
    first_name: string;
    gender: string;
    isd_code: number;
    last_name: string;
    mail: string;
    occupation: string;
    passport_expiry_date: string;
    passport_issue_date: string;
    passportnumber: string;
    place_of_birth: string;
    province: string;
    telephone: string;
    title: string;
    village: string;
}
export interface UsercontrollerDocumentInputDto {
    base64data: string;
    docName: string;
}
export interface UsercontrollerUpdateUserInputDTO {
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
    place_of_birth?: string;
    province?: string;
    telephone?: string;
    title?: string;
    village?: string;
}
export interface UsercontrollerUploadUserDocsInputDTO {
    documents: UsercontrollerDocumentInputDto[];
    userId: string;
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
 * @title DTPS APIs
 * @version 1.0
 * @baseUrl /api/v1
 * @contact
 *
 * DTPS Apis.
 */
export declare class Api<SecurityDataType extends unknown> {
    http: HttpClient<SecurityDataType>;
    constructor(http: HttpClient<SecurityDataType>);
    card: {
        /**
         * @description Activate Card in SelfieImage post base64 image of user holding debit card and passport
         *
         * @tags card
         * @name ActivateCard
         * @summary Activate Card
         * @request POST:/card/activate
         * @secure
         */
        activateCard: (user: CardcontrollerActivateCardInputDTO, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Call this api after 1. /user/create  and 2. /user/documents/upload ( after uploading all required docs )
         *
         * @tags card application
         * @name ApplyCard
         * @summary Apply Card
         * @request POST:/card/application/apply
         * @secure
         */
        applyCard: (card: CardcontrollerIssueCardInputDTO, params?: RequestParams) => Promise<AxiosResponse<ModelsCardPurchaseApplication, any>>;
        /**
         * @description Get All Card Applications.
         *
         * @tags card application
         * @name GetAllCardApplications
         * @summary Get All Card Applications
         * @request GET:/card/application/list
         * @secure
         */
        getAllCardApplications: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsCardPurchaseApplication[], any>>;
        /**
         * @description Get Card Application.
         *
         * @tags card application
         * @name GetCardApplication
         * @summary Get Card Application
         * @request GET:/card/application/{cardapplicationId}
         * @secure
         */
        getCardApplication: (cardapplicationId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsCardPurchaseApplication, any>>;
        /**
         * @description Get Card Balance
         *
         * @tags card
         * @name GetCardBalance
         * @summary Get Card Balance
         * @request GET:/card/balance/{cardnumber}
         * @secure
         */
        getCardBalance: (cardnumber: string, params?: RequestParams) => Promise<AxiosResponse<CardcontrollerBalanceResponse, any>>;
        /**
         * @description Get Available Cards
         *
         * @tags card
         * @name GetAvailableCards
         * @summary Get Available Cards
         * @request GET:/card/list
         * @secure
         */
        getAvailableCards: (params?: RequestParams) => Promise<AxiosResponse<ModelsPartnerCard[], any>>;
        /**
         * @description Apply Card Topup
         *
         * @tags card topup
         * @name ApplyCardTopup
         * @summary Apply Card Topup
         * @request POST:/card/topup/apply
         * @secure
         */
        applyCardTopup: (card: CardcontrollerApplyCardTopupInputDTO, params?: RequestParams) => Promise<AxiosResponse<ModelsCardTopupApplication, any>>;
        /**
         * @description Get All Card Topup Applications
         *
         * @tags card topup
         * @name GetAllCardTopupApplications
         * @summary Get All Card Topup Applications
         * @request GET:/card/topup/list
         * @secure
         */
        getAllCardTopupApplications: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsCardTopupApplication[], any>>;
        /**
         * @description Get  Card Txn History
         *
         * @tags card
         * @name GetCardTxnHistory
         * @summary Get  Card Txn History
         * @request GET:/card/txnhistory/{cardnumber}
         * @secure
         */
        getCardTxnHistory: (cardnumber: string, query?: {
            /** startdate in YYYY-MM-DD */
            startDate?: string;
            /** enddate in YYYY-MM-DD */
            endDate?: string;
        }, params?: RequestParams) => Promise<AxiosResponse<CardcontrollerTransaction[], any>>;
    };
    user: {
        /**
         * @description Add a new User
         *
         * @tags user
         * @name CreateUser
         * @summary Create User
         * @request POST:/user/create
         * @secure
         */
        createUser: (user: UsercontrollerCreateUserInputDTO, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
        /**
         * @description possible docName values PASSPORT, SIGNATURE, SELFIE, SELFIE_WITH_PASSPORT
         *
         * @tags user
         * @name UploadUserDocuments
         * @summary Upload User Documents
         * @request POST:/user/document/upload
         * @secure
         */
        uploadUserDocuments: (user: UsercontrollerUploadUserDocsInputDTO, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get All Users
         *
         * @tags user
         * @name GetAllUsers
         * @summary Get All Users
         * @request GET:/user/list
         * @secure
         */
        getAllUsers: (query?: {
            /** page no for pagination */
            page?: number;
            /** limit no for pagination */
            limit?: number;
        }, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
        /**
         * @description Update User Details
         *
         * @tags user
         * @name UpdateUserDetails
         * @summary Update User Details
         * @request POST:/user/update/{userId}
         * @secure
         */
        updateUserDetails: (userId: string, user: UsercontrollerUpdateUserInputDTO, params?: RequestParams) => Promise<AxiosResponse<ResponsesOkResponse, any>>;
        /**
         * @description Get  Partner User
         *
         * @tags user
         * @name GetPartnerUser
         * @summary Get  Partner User
         * @request GET:/user/{userId}
         * @secure
         */
        getPartnerUser: (userId: string, params?: RequestParams) => Promise<AxiosResponse<ModelsUser, any>>;
    };
}
//# sourceMappingURL=dtpsApi.d.ts.map