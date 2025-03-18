import { GetAccountContactRequestBody, GetAccountContactResponse, GET_ACCOUNT_CONTACT, SyncBillingAccountStateRequestBody, SyncBillingAccountStateResponse, SYNC_BILLING_ACCOUNT_STATE, ProcessAccountCapabilitiesUpdatingTaskRequestBody, ProcessAccountCapabilitiesUpdatingTaskResponse, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ListAccountCapabilitiesUpdatingTasksRequestBody, ListAccountCapabilitiesUpdatingTasksResponse, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ProcessBillingAccountCreatingTaskRequestBody, ProcessBillingAccountCreatingTaskResponse, PROCESS_BILLING_ACCOUNT_CREATING_TASK, ListBillingAccountCreatingTasksRequestBody, ListBillingAccountCreatingTasksResponse, LIST_BILLING_ACCOUNT_CREATING_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetAccountContactRequest(
  body: GetAccountContactRequestBody,
): ClientRequestInterface<GetAccountContactResponse> {
  return {
    descriptor: GET_ACCOUNT_CONTACT,
    body,
  };
}

export function newSyncBillingAccountStateRequest(
  body: SyncBillingAccountStateRequestBody,
): ClientRequestInterface<SyncBillingAccountStateResponse> {
  return {
    descriptor: SYNC_BILLING_ACCOUNT_STATE,
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

export function newProcessBillingAccountCreatingTaskRequest(
  body: ProcessBillingAccountCreatingTaskRequestBody,
): ClientRequestInterface<ProcessBillingAccountCreatingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_ACCOUNT_CREATING_TASK,
    body,
  };
}

export function newListBillingAccountCreatingTasksRequest(
  body: ListBillingAccountCreatingTasksRequestBody,
): ClientRequestInterface<ListBillingAccountCreatingTasksResponse> {
  return {
    descriptor: LIST_BILLING_ACCOUNT_CREATING_TASKS,
    body,
  };
}
