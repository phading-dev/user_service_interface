import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSummary, ACCOUNT_SUMMARY, AccountDetails, ACCOUNT_DETAILS } from './account';
import { USER_WEB_SERVICE } from '../../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetAccountSummaryRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_SUMMARY_REQUEST_BODY: MessageDescriptor<GetAccountSummaryRequestBody> = {
  name: 'GetAccountSummaryRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetAccountSummaryResponse {
  account?: AccountSummary,
}

export let GET_ACCOUNT_SUMMARY_RESPONSE: MessageDescriptor<GetAccountSummaryResponse> = {
  name: 'GetAccountSummaryResponse',
  fields: [{
    name: 'account',
    index: 1,
    messageType: ACCOUNT_SUMMARY,
  }],
};

export interface GetAccountDetailsRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_DETAILS_REQUEST_BODY: MessageDescriptor<GetAccountDetailsRequestBody> = {
  name: 'GetAccountDetailsRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetAccountDetailsResponse {
  account?: AccountDetails,
}

export let GET_ACCOUNT_DETAILS_RESPONSE: MessageDescriptor<GetAccountDetailsResponse> = {
  name: 'GetAccountDetailsResponse',
  fields: [{
    name: 'account',
    index: 1,
    messageType: ACCOUNT_DETAILS,
  }],
};

export interface SearchPublishersRequestBody {
  query?: string,
  limit?: number,
  scoreCursor?: number,
  createdTimeCursor?: number,
}

export let SEARCH_PUBLISHERS_REQUEST_BODY: MessageDescriptor<SearchPublishersRequestBody> = {
  name: 'SearchPublishersRequestBody',
  fields: [{
    name: 'query',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'scoreCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 4,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SearchPublishersResponse {
  accounts?: Array<AccountDetails>,
  scoreCursor?: number,
  createdTimeCursor?: number,
}

export let SEARCH_PUBLISHERS_RESPONSE: MessageDescriptor<SearchPublishersResponse> = {
  name: 'SearchPublishersResponse',
  fields: [{
    name: 'accounts',
    index: 1,
    messageType: ACCOUNT_DETAILS,
    isArray: true,
  }, {
    name: 'scoreCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'createdTimeCursor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_ACCOUNT_SUMMARY: RemoteCallDescriptor = {
  name: "GetAccountSummary",
  service: USER_WEB_SERVICE,
  path: "/GetAccountSummary",
  body: {
    messageType: GET_ACCOUNT_SUMMARY_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_ACCOUNT_SUMMARY_RESPONSE,
  },
}

export let GET_ACCOUNT_DETAILS: RemoteCallDescriptor = {
  name: "GetAccountDetails",
  service: USER_WEB_SERVICE,
  path: "/GetAccountDetails",
  body: {
    messageType: GET_ACCOUNT_DETAILS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: GET_ACCOUNT_DETAILS_RESPONSE,
  },
}

export let SEARCH_PUBLISHERS: RemoteCallDescriptor = {
  name: "SearchPublishers",
  service: USER_WEB_SERVICE,
  path: "/SearchPublishers",
  body: {
    messageType: SEARCH_PUBLISHERS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SEARCH_PUBLISHERS_RESPONSE,
  },
}
