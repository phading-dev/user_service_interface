import { GetAccountContactRequestBody, GET_ACCOUNT_CONTACT, GetAccountContactResponse, SyncBillingAccountStateRequestBody, SYNC_BILLING_ACCOUNT_STATE, SyncBillingAccountStateResponse, ProcessAccountCapabilitiesUpdatingTaskRequestBody, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ProcessAccountCapabilitiesUpdatingTaskResponse, ListAccountCapabilitiesUpdatingTasksRequestBody, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ListAccountCapabilitiesUpdatingTasksResponse, ProcessBillingAccountCreatingTaskRequestBody, PROCESS_BILLING_ACCOUNT_CREATING_TASK, ProcessBillingAccountCreatingTaskResponse, ListBillingAccountCreatingTasksRequestBody, LIST_BILLING_ACCOUNT_CREATING_TASKS, ListBillingAccountCreatingTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetAccountContactHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_CONTACT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountContactRequestBody,
  ): Promise<GetAccountContactResponse>;
}

export abstract class SyncBillingAccountStateHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SYNC_BILLING_ACCOUNT_STATE;
  public abstract handle(
    loggingPrefix: string,
    body: SyncBillingAccountStateRequestBody,
  ): Promise<SyncBillingAccountStateResponse>;
}

export abstract class ProcessAccountCapabilitiesUpdatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessAccountCapabilitiesUpdatingTaskRequestBody,
  ): Promise<ProcessAccountCapabilitiesUpdatingTaskResponse>;
}

export abstract class ListAccountCapabilitiesUpdatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountCapabilitiesUpdatingTasksRequestBody,
  ): Promise<ListAccountCapabilitiesUpdatingTasksResponse>;
}

export abstract class ProcessBillingAccountCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_BILLING_ACCOUNT_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingAccountCreatingTaskRequestBody,
  ): Promise<ProcessBillingAccountCreatingTaskResponse>;
}

export abstract class ListBillingAccountCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLING_ACCOUNT_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingAccountCreatingTasksRequestBody,
  ): Promise<ListBillingAccountCreatingTasksResponse>;
}
