import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { BillingAccountState, BILLING_ACCOUNT_STATE } from './billing_account_state';
import { USER_NODE_SERVICE } from '../service';
import { RemoteCallDescriptor } from '@selfage/service_descriptor';

export interface GetAccountContactRequestBody {
  accountId?: string,
}

export let GET_ACCOUNT_CONTACT_REQUEST_BODY: MessageDescriptor<GetAccountContactRequestBody> = {
  name: 'GetAccountContactRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface GetAccountContactResponse {
  naturalName?: string,
  contactEmail?: string,
}

export let GET_ACCOUNT_CONTACT_RESPONSE: MessageDescriptor<GetAccountContactResponse> = {
  name: 'GetAccountContactResponse',
  fields: [{
    name: 'naturalName',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SyncBillingAccountStateRequestBody {
  accountId?: string,
  billingAccountStateVersion?: number,
  billingAccountState?: BillingAccountState,
}

export let SYNC_BILLING_ACCOUNT_STATE_REQUEST_BODY: MessageDescriptor<SyncBillingAccountStateRequestBody> = {
  name: 'SyncBillingAccountStateRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'billingAccountStateVersion',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'billingAccountState',
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

export interface ProcessAccountCapabilitiesUpdatingTaskRequestBody {
  accountId?: string,
  capabilitiesVersion?: number,
}

export let PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessAccountCapabilitiesUpdatingTaskRequestBody> = {
  name: 'ProcessAccountCapabilitiesUpdatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'capabilitiesVersion',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }],
};

export interface ProcessAccountCapabilitiesUpdatingTaskResponse {
}

export let PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK_RESPONSE: MessageDescriptor<ProcessAccountCapabilitiesUpdatingTaskResponse> = {
  name: 'ProcessAccountCapabilitiesUpdatingTaskResponse',
  fields: [],
};

export interface ListAccountCapabilitiesUpdatingTasksRequestBody {
}

export let LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS_REQUEST_BODY: MessageDescriptor<ListAccountCapabilitiesUpdatingTasksRequestBody> = {
  name: 'ListAccountCapabilitiesUpdatingTasksRequestBody',
  fields: [],
};

export interface ListAccountCapabilitiesUpdatingTasksResponse {
  tasks?: Array<ProcessAccountCapabilitiesUpdatingTaskRequestBody>,
}

export let LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS_RESPONSE: MessageDescriptor<ListAccountCapabilitiesUpdatingTasksResponse> = {
  name: 'ListAccountCapabilitiesUpdatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export let GET_ACCOUNT_CONTACT: RemoteCallDescriptor = {
  name: "GetAccountContact",
  service: USER_NODE_SERVICE,
  path: "/GetAccountContact",
  body: {
    messageType: GET_ACCOUNT_CONTACT_REQUEST_BODY,
  },
  response: {
    messageType: GET_ACCOUNT_CONTACT_RESPONSE,
  },
}

export let SYNC_BILLING_ACCOUNT_STATE: RemoteCallDescriptor = {
  name: "SyncBillingAccountState",
  service: USER_NODE_SERVICE,
  path: "/SyncBillingAccountState",
  body: {
    messageType: SYNC_BILLING_ACCOUNT_STATE_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_BILLING_ACCOUNT_STATE_RESPONSE,
  },
}

export let PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK: RemoteCallDescriptor = {
  name: "ProcessAccountCapabilitiesUpdatingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessAccountCapabilitiesUpdatingTask",
  body: {
    messageType: PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK_RESPONSE,
  },
}

export let LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS: RemoteCallDescriptor = {
  name: "ListAccountCapabilitiesUpdatingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListAccountCapabilitiesUpdatingTasks",
  body: {
    messageType: LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS_RESPONSE,
  },
}
