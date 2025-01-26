import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, GetAccountContactRequestBody, GetAccountContactResponse, GET_ACCOUNT_CONTACT, SyncBillingAccountStateRequestBody, SyncBillingAccountStateResponse, SYNC_BILLING_ACCOUNT_STATE, ProcessAccountCapabilitiesUpdatingTaskRequestBody, ProcessAccountCapabilitiesUpdatingTaskResponse, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ListAccountCapabilitiesUpdatingTasksRequestBody, ListAccountCapabilitiesUpdatingTasksResponse, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getAccountSummary(
  client: NodeClientInterface,
  body: GetAccountSummaryRequestBody,
  options?: NodeClientOptions,
): Promise<GetAccountSummaryResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_SUMMARY,
      body,
    },
    options,
  );
}

export function getAccountContact(
  client: NodeClientInterface,
  body: GetAccountContactRequestBody,
  options?: NodeClientOptions,
): Promise<GetAccountContactResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_CONTACT,
      body,
    },
    options,
  );
}

export function syncBillingAccountState(
  client: NodeClientInterface,
  body: SyncBillingAccountStateRequestBody,
  options?: NodeClientOptions,
): Promise<SyncBillingAccountStateResponse> {
  return client.send(
    {
      descriptor: SYNC_BILLING_ACCOUNT_STATE,
      body,
    },
    options,
  );
}

export function processAccountCapabilitiesUpdatingTask(
  client: NodeClientInterface,
  body: ProcessAccountCapabilitiesUpdatingTaskRequestBody,
  options?: NodeClientOptions,
): Promise<ProcessAccountCapabilitiesUpdatingTaskResponse> {
  return client.send(
    {
      descriptor: PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK,
      body,
    },
    options,
  );
}

export function listAccountCapabilitiesUpdatingTasks(
  client: NodeClientInterface,
  body: ListAccountCapabilitiesUpdatingTasksRequestBody,
  options?: NodeClientOptions,
): Promise<ListAccountCapabilitiesUpdatingTasksResponse> {
  return client.send(
    {
      descriptor: LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS,
      body,
    },
    options,
  );
}
