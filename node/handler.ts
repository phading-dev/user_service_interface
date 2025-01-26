import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, GetAccountContactRequestBody, GET_ACCOUNT_CONTACT, GetAccountContactResponse, SyncBillingAccountStateRequestBody, SYNC_BILLING_ACCOUNT_STATE, SyncBillingAccountStateResponse, ProcessAccountCapabilitiesUpdatingTaskRequestBody, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ProcessAccountCapabilitiesUpdatingTaskResponse, ListAccountCapabilitiesUpdatingTasksRequestBody, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ListAccountCapabilitiesUpdatingTasksResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetAccountSummaryHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSummaryRequestBody,
  ): Promise<GetAccountSummaryResponse>;
}

export abstract class GetAccountContactHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_CONTACT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountContactRequestBody,
  ): Promise<GetAccountContactResponse>;
}

export abstract class SyncBillingAccountStateHandlerInterface implements NodeHandlerInterface {
  public descriptor = SYNC_BILLING_ACCOUNT_STATE;
  public abstract handle(
    loggingPrefix: string,
    body: SyncBillingAccountStateRequestBody,
  ): Promise<SyncBillingAccountStateResponse>;
}

export abstract class ProcessAccountCapabilitiesUpdatingTaskHandlerInterface implements NodeHandlerInterface {
  public descriptor = PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessAccountCapabilitiesUpdatingTaskRequestBody,
  ): Promise<ProcessAccountCapabilitiesUpdatingTaskResponse>;
}

export abstract class ListAccountCapabilitiesUpdatingTasksHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountCapabilitiesUpdatingTasksRequestBody,
  ): Promise<ListAccountCapabilitiesUpdatingTasksResponse>;
}
