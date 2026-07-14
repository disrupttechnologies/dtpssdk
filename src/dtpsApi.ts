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

export enum ModelUserCardActivationStatus {
  UCAS_NOT_INITIALIZED = "NOT_INITIALIZED",
  UCAS_PENDING = "PENDING",
  UCAS_SUCCESS = "SUCCESS",
  UCAS_FAILED = "FAILED",
}

export enum ModelUserAccountInfoStatus {
  UAIS_NOT_INITIALIZED = "NOT_INITIALIZED",
  UAIS_SUCCESS = "SUCCESS",
  UAIS_FAILED = "FAILED",
}

export enum ModelDocumentStatus {
  DOCUMENT_NOT_INITIALIZED = "NOT_INITIALIZED",
  DOCUMENT_SUCCESS = "SUCCESS",
  DOCUMENT_FAILED = "FAILED",
}

export enum ModelCardTopupStatus {
  CTS_NOT_INITIALIZED = "NOT_INITIALIZED",
  CTS_PENDING = "PENDING",
  CTS_SUCCESS = "SUCCESS",
  CTS_FAILED = "FAILED",
}

export enum ModelCardPurchaseApplicationStatus {
  CPAS_NOT_INITIALIZED = "NOT_INITIALIZED",
  CPAS_PENDING = "PENDING",
  CPAS_SUCCESS = "SUCCESS",
  CPAS_FAILED = "FAILED",
  CPAS_SHIPPED = "SHIPPED",
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
  maccountNumber?: string;
  mcardNumber?: string;
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
  userCard?: ModelUserCard;
  userCardId?: string;
}

export interface ModelPartner {
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
  accountInfo?: ModelUserAccountInfo;
  applications?: ModelCardPurchaseApplication[];
  cards?: ModelUserCard[];
  createdAt?: string;
  email?: string;
  fullName?: string;
  id?: string;
  isEnabled?: boolean;
  partner?: ModelPartner;
  partnerId?: string;
  passportNumber?: string;
  updatedAt?: string;
}

export interface ModelUserAccountInfo {
  createdAt?: string;
  documents?: ModelUserDocument[];
  failedRemarks?: string;
  id?: string;
  metadata?: string;
  status?: ModelUserAccountInfoStatus;
  updatedAt?: string;
  userId?: string;
}

export interface ModelUserCard {
  accountNumber?: string;
  applicationId?: string;
  card?: ModelPartnerCard;
  cardActivationDetails?: ModelUserCardActivation;
  cardNumber?: string;
  cardTopupApplication?: ModelCardTopupApplication[];
  createdAt?: string;
  embossName?: string;
  id?: string;
  isActive?: boolean;
  isEnabled?: boolean;
  isMemberCard?: boolean;
  pcid?: string;
  updatedAt?: string;
  user?: ModelUser;
  userId?: string;
}

export interface ModelUserCardActivation {
  createdAt?: string;
  failedRemarks?: string;
  handledByID?: string;
  id?: string;
  imgName?: string;
  name?: string;
  status?: ModelUserCardActivationStatus;
  updatedAt?: string;
  userCard?: ModelUserCard;
  userCardId?: string;
}

export interface ModelUserDocument {
  createdAt?: string;
  documentStatus?: ModelDocumentStatus;
  documentType?: string;
  failedRemarks?: string;
  fileName?: string;
  id?: string;
  updatedAt?: string;
  userInfoId?: string;
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "/api/v2",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
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
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
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
    activateCard: (
      card: DtoPartnerApiActivateCardRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    activateReplacementCard: (
      card: DtoPartnerApiReplacementCardActivateRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    applyCard: (
      application: DtoPartnerApiIssueCardRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelCardPurchaseApplication, any>({
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
     * @request GET:/card/application/list
     */
    getAllPartnerApplications: (params: RequestParams = {}) =>
      this.http.request<ModelCardPurchaseApplication[], any>({
        path: `/card/application/list`,
        method: "GET",
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
    applyCard2: (
      application: DtoPartnerApiIssueCardRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelCardPurchaseApplication, any>({
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
    getCardApplicationById: (
      cardapplicationId: string,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelCardPurchaseApplication, any>({
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
    getCardBalanceByCardId: (cardId: string, params: RequestParams = {}) =>
      this.http.request<DtoPartnerApiBalanceResponse, any>({
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
    blockVirtualCard: (
      card: DtoBlockUnblockCardInput,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    enableDisableOnlineTransactions: (
      card: DtoVCSetOnlineTxnInput,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    getCards: (params: RequestParams = {}) =>
      this.http.request<ModelPartnerCard[], any>({
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
    applyCardTopup: (
      topup: DtoPartnerApiApplyCardTopupRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelCardTopupApplication, any>({
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
    getAllPartnerCardTopupApplications: (params: RequestParams = {}) =>
      this.http.request<ModelCardTopupApplication[], any>({
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
    getCardTxnHistoryByCardId: (
      cardId: string,
      query?: {
        /** Start Date */
        startDate?: string;
        /** End Date */
        endDate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.http.request<JdbTransactionHistoryItem[], any>({
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
    unblockVirtualCard: (
      card: DtoBlockUnblockCardInput,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    createAPartnerUser: (
      user: DtoPartnerApiCreateUserRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelUser, any>({
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
    uploadUserDocuments: (
      documents: DtoPartnerApiUploadUserDocsRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<DtoOkResponse, any>({
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
    listPartnerUsers: (params: RequestParams = {}) =>
      this.http.request<ModelUser[], any>({
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
    updateAPartnerUser: (
      userId: string,
      user: DtoPartnerApiUpdateUserRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<ModelUser, any>({
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
    getAPartnerUserById: (userId: string, params: RequestParams = {}) =>
      this.http.request<ModelUser, any>({
        path: `/user/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
