import { GetAccountContactRequestBody, GetAccountContactResponse, GET_ACCOUNT_CONTACT, SyncPaymentProfileStateRequestBody, SyncPaymentProfileStateResponse, SYNC_PAYMENT_PROFILE_STATE, ProcessAccountCapabilitiesUpdatingTaskRequestBody, ProcessAccountCapabilitiesUpdatingTaskResponse, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ListAccountCapabilitiesUpdatingTasksRequestBody, ListAccountCapabilitiesUpdatingTasksResponse, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ProcessPaymentProfileCreatingTaskRequestBody, ProcessPaymentProfileCreatingTaskResponse, PROCESS_PAYMENT_PROFILE_CREATING_TASK, ListPaymentProfileCreatingTasksRequestBody, ListPaymentProfileCreatingTasksResponse, LIST_PAYMENT_PROFILE_CREATING_TASKS, ProcessPayoutProfileCreatingTaskRequestBody, ProcessPayoutProfileCreatingTaskResponse, PROCESS_PAYOUT_PROFILE_CREATING_TASK, ListPayoutProfileCreatingTasksRequestBody, ListPayoutProfileCreatingTasksResponse, LIST_PAYOUT_PROFILE_CREATING_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetAccountContactRequest(
  body: GetAccountContactRequestBody,
): ClientRequestInterface<GetAccountContactResponse> {
  return {
    descriptor: GET_ACCOUNT_CONTACT,
    body,
  };
}

export function newSyncPaymentProfileStateRequest(
  body: SyncPaymentProfileStateRequestBody,
): ClientRequestInterface<SyncPaymentProfileStateResponse> {
  return {
    descriptor: SYNC_PAYMENT_PROFILE_STATE,
    body,
  };
}

export function newProcessAccountCapabilitiesUpdatingTaskRequest(
  body: ProcessAccountCapabilitiesUpdatingTaskRequestBody,
): ClientRequestInterface<ProcessAccountCapabilitiesUpdatingTaskResponse> {
  return {
    descriptor: PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK,
    body,
  };
}

export function newListAccountCapabilitiesUpdatingTasksRequest(
  body: ListAccountCapabilitiesUpdatingTasksRequestBody,
): ClientRequestInterface<ListAccountCapabilitiesUpdatingTasksResponse> {
  return {
    descriptor: LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS,
    body,
  };
}

export function newProcessPaymentProfileCreatingTaskRequest(
  body: ProcessPaymentProfileCreatingTaskRequestBody,
): ClientRequestInterface<ProcessPaymentProfileCreatingTaskResponse> {
  return {
    descriptor: PROCESS_PAYMENT_PROFILE_CREATING_TASK,
    body,
  };
}

export function newListPaymentProfileCreatingTasksRequest(
  body: ListPaymentProfileCreatingTasksRequestBody,
): ClientRequestInterface<ListPaymentProfileCreatingTasksResponse> {
  return {
    descriptor: LIST_PAYMENT_PROFILE_CREATING_TASKS,
    body,
  };
}

export function newProcessPayoutProfileCreatingTaskRequest(
  body: ProcessPayoutProfileCreatingTaskRequestBody,
): ClientRequestInterface<ProcessPayoutProfileCreatingTaskResponse> {
  return {
    descriptor: PROCESS_PAYOUT_PROFILE_CREATING_TASK,
    body,
  };
}

export function newListPayoutProfileCreatingTasksRequest(
  body: ListPayoutProfileCreatingTasksRequestBody,
): ClientRequestInterface<ListPayoutProfileCreatingTasksResponse> {
  return {
    descriptor: LIST_PAYOUT_PROFILE_CREATING_TASKS,
    body,
  };
}
