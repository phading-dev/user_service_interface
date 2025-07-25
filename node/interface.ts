import { PrimitiveType, MessageDescriptor } from '@selfage/message/descriptor';
import { PaymentProfileState, PAYMENT_PROFILE_STATE } from './payment_profile_state';
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
  name?: string,
  contactEmail?: string,
}

export let GET_ACCOUNT_CONTACT_RESPONSE: MessageDescriptor<GetAccountContactResponse> = {
  name: 'GetAccountContactResponse',
  fields: [{
    name: 'name',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'contactEmail',
    index: 2,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface SyncPaymentProfileStateRequestBody {
  accountId?: string,
  paymentProfileStateVersion?: number,
  paymentProfileState?: PaymentProfileState,
}

export let SYNC_PAYMENT_PROFILE_STATE_REQUEST_BODY: MessageDescriptor<SyncPaymentProfileStateRequestBody> = {
  name: 'SyncPaymentProfileStateRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }, {
    name: 'paymentProfileStateVersion',
    index: 2,
    primitiveType: PrimitiveType.NUMBER,
  }, {
    name: 'paymentProfileState',
    index: 3,
    enumType: PAYMENT_PROFILE_STATE,
  }],
};

export interface SyncPaymentProfileStateResponse {
}

export let SYNC_PAYMENT_PROFILE_STATE_RESPONSE: MessageDescriptor<SyncPaymentProfileStateResponse> = {
  name: 'SyncPaymentProfileStateResponse',
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

export interface ProcessPaymentProfileCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_PAYMENT_PROFILE_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPaymentProfileCreatingTaskRequestBody> = {
  name: 'ProcessPaymentProfileCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPaymentProfileCreatingTaskResponse {
}

export let PROCESS_PAYMENT_PROFILE_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessPaymentProfileCreatingTaskResponse> = {
  name: 'ProcessPaymentProfileCreatingTaskResponse',
  fields: [],
};

export interface ListPaymentProfileCreatingTasksRequestBody {
}

export let LIST_PAYMENT_PROFILE_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListPaymentProfileCreatingTasksRequestBody> = {
  name: 'ListPaymentProfileCreatingTasksRequestBody',
  fields: [],
};

export interface ListPaymentProfileCreatingTasksResponse {
  tasks?: Array<ProcessPaymentProfileCreatingTaskRequestBody>,
}

export let LIST_PAYMENT_PROFILE_CREATING_TASKS_RESPONSE: MessageDescriptor<ListPaymentProfileCreatingTasksResponse> = {
  name: 'ListPaymentProfileCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYMENT_PROFILE_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessPayoutProfileCreatingTaskRequestBody {
  accountId?: string,
}

export let PROCESS_PAYOUT_PROFILE_CREATING_TASK_REQUEST_BODY: MessageDescriptor<ProcessPayoutProfileCreatingTaskRequestBody> = {
  name: 'ProcessPayoutProfileCreatingTaskRequestBody',
  fields: [{
    name: 'accountId',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessPayoutProfileCreatingTaskResponse {
}

export let PROCESS_PAYOUT_PROFILE_CREATING_TASK_RESPONSE: MessageDescriptor<ProcessPayoutProfileCreatingTaskResponse> = {
  name: 'ProcessPayoutProfileCreatingTaskResponse',
  fields: [],
};

export interface ListPayoutProfileCreatingTasksRequestBody {
}

export let LIST_PAYOUT_PROFILE_CREATING_TASKS_REQUEST_BODY: MessageDescriptor<ListPayoutProfileCreatingTasksRequestBody> = {
  name: 'ListPayoutProfileCreatingTasksRequestBody',
  fields: [],
};

export interface ListPayoutProfileCreatingTasksResponse {
  tasks?: Array<ProcessPayoutProfileCreatingTaskRequestBody>,
}

export let LIST_PAYOUT_PROFILE_CREATING_TASKS_RESPONSE: MessageDescriptor<ListPayoutProfileCreatingTasksResponse> = {
  name: 'ListPayoutProfileCreatingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_PAYOUT_PROFILE_CREATING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface ProcessAvatarImageDeletingTaskRequestBody {
  r2Filename?: string,
}

export let PROCESS_AVATAR_IMAGE_DELETING_TASK_REQUEST_BODY: MessageDescriptor<ProcessAvatarImageDeletingTaskRequestBody> = {
  name: 'ProcessAvatarImageDeletingTaskRequestBody',
  fields: [{
    name: 'r2Filename',
    index: 1,
    primitiveType: PrimitiveType.STRING,
  }],
};

export interface ProcessAvatarImageDeletingTaskResponse {
}

export let PROCESS_AVATAR_IMAGE_DELETING_TASK_RESPONSE: MessageDescriptor<ProcessAvatarImageDeletingTaskResponse> = {
  name: 'ProcessAvatarImageDeletingTaskResponse',
  fields: [],
};

export interface ListAvatarImageDeletingTasksRequestBody {
}

export let LIST_AVATAR_IMAGE_DELETING_TASKS_REQUEST_BODY: MessageDescriptor<ListAvatarImageDeletingTasksRequestBody> = {
  name: 'ListAvatarImageDeletingTasksRequestBody',
  fields: [],
};

export interface ListAvatarImageDeletingTasksResponse {
  tasks?: Array<ProcessAvatarImageDeletingTaskRequestBody>,
}

export let LIST_AVATAR_IMAGE_DELETING_TASKS_RESPONSE: MessageDescriptor<ListAvatarImageDeletingTasksResponse> = {
  name: 'ListAvatarImageDeletingTasksResponse',
  fields: [{
    name: 'tasks',
    index: 1,
    messageType: PROCESS_AVATAR_IMAGE_DELETING_TASK_REQUEST_BODY,
    isArray: true,
  }],
};

export interface DeleteExpiredEmailVerificationTokensRequestBody {
}

export let DELETE_EXPIRED_EMAIL_VERIFICATION_TOKENS_REQUEST_BODY: MessageDescriptor<DeleteExpiredEmailVerificationTokensRequestBody> = {
  name: 'DeleteExpiredEmailVerificationTokensRequestBody',
  fields: [],
};

export interface DeleteExpiredEmailVerificationTokensResponse {
}

export let DELETE_EXPIRED_EMAIL_VERIFICATION_TOKENS_RESPONSE: MessageDescriptor<DeleteExpiredEmailVerificationTokensResponse> = {
  name: 'DeleteExpiredEmailVerificationTokensResponse',
  fields: [],
};

export interface DeleteExpiredPasswordResetTokensRequestBody {
}

export let DELETE_EXPIRED_PASSWORD_RESET_TOKENS_REQUEST_BODY: MessageDescriptor<DeleteExpiredPasswordResetTokensRequestBody> = {
  name: 'DeleteExpiredPasswordResetTokensRequestBody',
  fields: [],
};

export interface DeleteExpiredPasswordResetTokensResponse {
}

export let DELETE_EXPIRED_PASSWORD_RESET_TOKENS_RESPONSE: MessageDescriptor<DeleteExpiredPasswordResetTokensResponse> = {
  name: 'DeleteExpiredPasswordResetTokensResponse',
  fields: [],
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

export let SYNC_PAYMENT_PROFILE_STATE: RemoteCallDescriptor = {
  name: "SyncPaymentProfileState",
  service: USER_NODE_SERVICE,
  path: "/SyncPaymentProfileState",
  body: {
    messageType: SYNC_PAYMENT_PROFILE_STATE_REQUEST_BODY,
  },
  response: {
    messageType: SYNC_PAYMENT_PROFILE_STATE_RESPONSE,
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

export let PROCESS_PAYMENT_PROFILE_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessPaymentProfileCreatingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessPaymentProfileCreatingTask",
  body: {
    messageType: PROCESS_PAYMENT_PROFILE_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYMENT_PROFILE_CREATING_TASK_RESPONSE,
  },
}

export let LIST_PAYMENT_PROFILE_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListPaymentProfileCreatingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListPaymentProfileCreatingTasks",
  body: {
    messageType: LIST_PAYMENT_PROFILE_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYMENT_PROFILE_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_PAYOUT_PROFILE_CREATING_TASK: RemoteCallDescriptor = {
  name: "ProcessPayoutProfileCreatingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessPayoutProfileCreatingTask",
  body: {
    messageType: PROCESS_PAYOUT_PROFILE_CREATING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_PAYOUT_PROFILE_CREATING_TASK_RESPONSE,
  },
}

export let LIST_PAYOUT_PROFILE_CREATING_TASKS: RemoteCallDescriptor = {
  name: "ListPayoutProfileCreatingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListPayoutProfileCreatingTasks",
  body: {
    messageType: LIST_PAYOUT_PROFILE_CREATING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_PAYOUT_PROFILE_CREATING_TASKS_RESPONSE,
  },
}

export let PROCESS_AVATAR_IMAGE_DELETING_TASK: RemoteCallDescriptor = {
  name: "ProcessAvatarImageDeletingTask",
  service: USER_NODE_SERVICE,
  path: "/ProcessAvatarImageDeletingTask",
  body: {
    messageType: PROCESS_AVATAR_IMAGE_DELETING_TASK_REQUEST_BODY,
  },
  response: {
    messageType: PROCESS_AVATAR_IMAGE_DELETING_TASK_RESPONSE,
  },
}

export let LIST_AVATAR_IMAGE_DELETING_TASKS: RemoteCallDescriptor = {
  name: "ListAvatarImageDeletingTasks",
  service: USER_NODE_SERVICE,
  path: "/ListAvatarImageDeletingTasks",
  body: {
    messageType: LIST_AVATAR_IMAGE_DELETING_TASKS_REQUEST_BODY,
  },
  response: {
    messageType: LIST_AVATAR_IMAGE_DELETING_TASKS_RESPONSE,
  },
}

export let DELETE_EXPIRED_EMAIL_VERIFICATION_TOKENS: RemoteCallDescriptor = {
  name: "DeleteExpiredEmailVerificationTokens",
  service: USER_NODE_SERVICE,
  path: "/DeleteExpiredEmailVerificationTokens",
  body: {
    messageType: DELETE_EXPIRED_EMAIL_VERIFICATION_TOKENS_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_EXPIRED_EMAIL_VERIFICATION_TOKENS_RESPONSE,
  },
}

export let DELETE_EXPIRED_PASSWORD_RESET_TOKENS: RemoteCallDescriptor = {
  name: "DeleteExpiredPasswordResetTokens",
  service: USER_NODE_SERVICE,
  path: "/DeleteExpiredPasswordResetTokens",
  body: {
    messageType: DELETE_EXPIRED_PASSWORD_RESET_TOKENS_REQUEST_BODY,
  },
  response: {
    messageType: DELETE_EXPIRED_PASSWORD_RESET_TOKENS_RESPONSE,
  },
}
