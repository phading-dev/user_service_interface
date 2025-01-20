import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { AccountSummary, ACCOUNT_SUMMARY } from './account_summary';
import { BillingAccountState, BILLING_ACCOUNT_STATE } from './billing_account_state';
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

export interface SyncBillingAccountStateRequestBody {
  accountId?: string,
  version?: number,
  state?: BillingAccountState,
}

export let SYNC_BILLING_ACCOUNT_STATE_REQUEST_BODY: MessageDescriptor<SyncBillingAccountStateRequestBody> = {
  name: 'SyncBillingAccountStateRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'version',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'state',
    index: 3,
    enumType: BILLING_ACCOUNT_STATE,
  }],
};

export interface SyncBillingAccountStateResponse {
}

export let SYNC_BILLING_ACCOUNT_STATE_RESPONSE: MessageDescriptor<SyncBillingAccountStateResponse> = {
  name: 'SyncBillingAccountStateResponse',
  fields: [],
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

export let SYNC_BILLING_ACCOUNT_STATE: NodeRemoteCallDescriptor = {
  name: "SyncBillingAccountState",
  path: "/SyncBillingAccountState",
  body: {
    messageType: SYNC_BILLING_ACCOUNT_STATE_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_BILLING_ACCOUNT_STATE_RESPONSE,
  },
}
