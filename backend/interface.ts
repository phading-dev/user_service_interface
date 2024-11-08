import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSummary, ACCOUNT_SUMMARY } from './account_summary';
import { AccountType, ACCOUNT_TYPE } from '../account_type';
import { NodeRemoteCallDescriptor } from '@selfage/service_descriptor';

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

export interface ListAccountsRequestBody {
  accountType?: AccountType,
  createdTimeMsCursor?: number,
  limit?: number,
}

export let LIST_ACCOUNTS_REQUEST_BODY: MessageDescriptor<ListAccountsRequestBody> = {
  name: 'ListAccountsRequestBody',
  fields: [{
    name: 'accountType',
    index: 1,
    enumType: ACCOUNT_TYPE,
  }, {
    name: 'createdTimeMsCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'limit',
    index: 3,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ListAccountsResponse {
  accountIds?: Array<string>,
  createdTimeMsCursor?: number,
}

export let LIST_ACCOUNTS_RESPONSE: MessageDescriptor<ListAccountsResponse> = {
  name: 'ListAccountsResponse',
  fields: [{
    name: 'accountIds',
    index: 1,
    primitiveType: PrimitiveType.STRING,
    isArray: true,
  }, {
    name: 'createdTimeMsCursor',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export let GET_ACCOUNT_SUMMARY: NodeRemoteCallDescriptor = {
  name: "GetAccountSummary",
  path: "/GetAccountSummary",
  body: {
    messageType: GET_ACCOUNT_SUMMARY_REQUEST_BODY,
  },
  response: {
    messageType: GET_ACCOUNT_SUMMARY_RESPONSE,
  },
}

export let LIST_ACCOUNTS: NodeRemoteCallDescriptor = {
  name: "ListAccounts",
  path: "/ListAccounts",
  body: {
    messageType: LIST_ACCOUNTS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_ACCOUNTS_RESPONSE,
  },
}
