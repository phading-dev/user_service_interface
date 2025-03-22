import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { BillingProfileState, BILLING_PROFILE_STATE } from './billing_profile_state';
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

export interface SyncBillingProfileStateRequestBody {
  accountId?: string,
  billingProfileStateVersion?: number,
  billingProfileState?: BillingProfileState,
}

export let SYNC_BILLING_PROFILE_STATE_REQUEST_BODY: MessageDescriptor<SyncBillingProfileStateRequestBody> = {
  name: 'SyncBillingProfileStateRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'billingProfileStateVersion',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'billingProfileState',
    index: 3,
    enumType: BILLING_PROFILE_STATE,
  }],
};

export interface SyncBillingProfileStateResponse {
}

export let SYNC_BILLING_PROFILE_STATE_RESPONSE: MessageDescriptor<SyncBillingProfileStateResponse> = {
  name: 'SyncBillingProfileStateResponse',
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

export interface ProcessBillingProfileCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_BILLING_PROFILE_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessBillingProfileCreatingTaskRequestBody> = {
  name: 'ProcessBillingProfileCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessBillingProfileCreatingTaskResponse {
}

export let PROCESS_BILLING_PROFILE_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessBillingProfileCreatingTaskResponse> = {
  name: 'ProcessBillingProfileCreatingTaskResponse',
  fields: [],
};

export interface ListBillingProfileCreatingTasksRequestBody {
}

export let LIST_BILLING_PROFILE_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListBillingProfileCreatingTasksRequestBody> = {
  name: 'ListBillingProfileCreatingTasksRequestBody',
  fields: [],
};

export interface ListBillingProfileCreatingTasksResponse {
  tasks?: Array<ProcessBillingProfileCreatingTaskRequestBody>,
}

export let LIST_BILLING_PROFILE_CREATING_TASKS_RESPONSE: MessageDescriptor<ListBillingProfileCreatingTasksResponse> = {
  name: 'ListBillingProfileCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_BILLING_PROFILE_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessEarningsProfileCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_EARNINGS_PROFILE_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessEarningsProfileCreatingTaskRequestBody> = {
  name: 'ProcessEarningsProfileCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessEarningsProfileCreatingTaskResponse {
}

export let PROCESS_EARNINGS_PROFILE_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessEarningsProfileCreatingTaskResponse> = {
  name: 'ProcessEarningsProfileCreatingTaskResponse',
  fields: [],
};

export interface ListEarningsProfileCreatingTasksRequestBody {
}

export let LIST_EARNINGS_PROFILE_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListEarningsProfileCreatingTasksRequestBody> = {
  name: 'ListEarningsProfileCreatingTasksRequestBody',
  fields: [],
};

export interface ListEarningsProfileCreatingTasksResponse {
  tasks?: Array<ProcessEarningsProfileCreatingTaskRequestBody>,
}

export let LIST_EARNINGS_PROFILE_CREATING_TASKS_RESPONSE: MessageDescriptor<ListEarningsProfileCreatingTasksResponse> = {
  name: 'ListEarningsProfileCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_EARNINGS_PROFILE_CREATING_TASK_REQUEST_BODY,
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

export let SYNC_BILLING_PROFILE_STATE: RemoteCallDescriptor = {
  name: "SyncBillingProfileState",
  service: USER_NODE_SERVICE,
  path: "/SyncBillingProfileState",
  body: {
    messageType: SYNC_BILLING_PROFILE_STATE_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_BILLING_PROFILE_STATE_RESPONSE,
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

export let PROCESS_BILLING_PROFILE_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessBillingProfileCreatingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessBillingProfileCreatingTask",
  body: {
    messageType: PROCESS_BILLING_PROFILE_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_BILLING_PROFILE_CREATING_TASK_RESPONSE,
  },
}

export let LIST_BILLING_PROFILE_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListBillingProfileCreatingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListBillingProfileCreatingTasks",
  body: {
    messageType: LIST_BILLING_PROFILE_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_BILLING_PROFILE_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_EARNINGS_PROFILE_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessEarningsProfileCreatingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessEarningsProfileCreatingTask",
  body: {
    messageType: PROCESS_EARNINGS_PROFILE_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_EARNINGS_PROFILE_CREATING_TASK_RESPONSE,
  },
}

export let LIST_EARNINGS_PROFILE_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListEarningsProfileCreatingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListEarningsProfileCreatingTasks",
  body: {
    messageType: LIST_EARNINGS_PROFILE_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_EARNINGS_PROFILE_CREATING_TASKS_RESPONSE,
  },
}
