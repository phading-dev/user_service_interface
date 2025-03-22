import { GetAccountContactRequestBody, GetAccountContactResponse, GET_ACCOUNT_CONTACT, SyncBillingProfileStateRequestBody, SyncBillingProfileStateResponse, SYNC_BILLING_PROFILE_STATE, ProcessAccountCapabilitiesUpdatingTaskRequestBody, ProcessAccountCapabilitiesUpdatingTaskResponse, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ListAccountCapabilitiesUpdatingTasksRequestBody, ListAccountCapabilitiesUpdatingTasksResponse, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ProcessBillingProfileCreatingTaskRequestBody, ProcessBillingProfileCreatingTaskResponse, PROCESS_BILLING_PROFILE_CREATING_TASK, ListBillingProfileCreatingTasksRequestBody, ListBillingProfileCreatingTasksResponse, LIST_BILLING_PROFILE_CREATING_TASKS, ProcessEarningsProfileCreatingTaskRequestBody, ProcessEarningsProfileCreatingTaskResponse, PROCESS_EARNINGS_PROFILE_CREATING_TASK, ListEarningsProfileCreatingTasksRequestBody, ListEarningsProfileCreatingTasksResponse, LIST_EARNINGS_PROFILE_CREATING_TASKS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetAccountContactRequest(
  body: GetAccountContactRequestBody,
): ClientRequestInterface<GetAccountContactResponse> {
  return {
    descriptor: GET_ACCOUNT_CONTACT,
    body,
  };
}

export function newSyncBillingProfileStateRequest(
  body: SyncBillingProfileStateRequestBody,
): ClientRequestInterface<SyncBillingProfileStateResponse> {
  return {
    descriptor: SYNC_BILLING_PROFILE_STATE,
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

export function newProcessBillingProfileCreatingTaskRequest(
  body: ProcessBillingProfileCreatingTaskRequestBody,
): ClientRequestInterface<ProcessBillingProfileCreatingTaskResponse> {
  return {
    descriptor: PROCESS_BILLING_PROFILE_CREATING_TASK,
    body,
  };
}

export function newListBillingProfileCreatingTasksRequest(
  body: ListBillingProfileCreatingTasksRequestBody,
): ClientRequestInterface<ListBillingProfileCreatingTasksResponse> {
  return {
    descriptor: LIST_BILLING_PROFILE_CREATING_TASKS,
    body,
  };
}

export function newProcessEarningsProfileCreatingTaskRequest(
  body: ProcessEarningsProfileCreatingTaskRequestBody,
): ClientRequestInterface<ProcessEarningsProfileCreatingTaskResponse> {
  return {
    descriptor: PROCESS_EARNINGS_PROFILE_CREATING_TASK,
    body,
  };
}

export function newListEarningsProfileCreatingTasksRequest(
  body: ListEarningsProfileCreatingTasksRequestBody,
): ClientRequestInterface<ListEarningsProfileCreatingTasksResponse> {
  return {
    descriptor: LIST_EARNINGS_PROFILE_CREATING_TASKS,
    body,
  };
}
