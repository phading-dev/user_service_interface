import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSummary, ACCOUNT_SUMMARY } from './account_summary';
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

export interface SearchAccountsRequestBody {
  query?: string,
  limit?: number,
  scoreCusor?: number,
}

export let SEARCH_ACCOUNTS_REQUEST_BODY: MessageDescriptor<SearchAccountsRequestBody> = {
  name: 'SearchAccountsRequestBody',
  fields: [{
    name: 'query',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'limit',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'scoreCusor',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface SearchAccountsResponse {
  accounts?: Array<AccountSummary>,
  scoreCusor?: number,
}

export let SEARCH_ACCOUNTS_RESPONSE: MessageDescriptor<SearchAccountsResponse> = {
  name: 'SearchAccountsResponse',
  fields: [{
    name: 'accounts',
    index: 1,
    messageType: ACCOUNT_SUMMARY,
    isArray: true,
  }, {
    name: 'scoreCusor',
    index: 2,
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

export let SEARCH_ACCOUNTS: RemoteCallDescriptor = {
  name: "SearchAccounts",
  service: USER_WEB_SERVICE,
  path: "/SearchAccounts",
  body: {
    messageType: SEARCH_ACCOUNTS_REQUEST_BODY,
  },
  authKey: "a",
  response: {
    messageType: SEARCH_ACCOUNTS_RESPONSE,
  },
}
