import { GetAccountContactRequestBody, GET_ACCOUNT_CONTACT, GetAccountContactResponse, SyncBillingProfileStateRequestBody, SYNC_BILLING_PROFILE_STATE, SyncBillingProfileStateResponse, ProcessAccountCapabilitiesUpdatingTaskRequestBody, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ProcessAccountCapabilitiesUpdatingTaskResponse, ListAccountCapabilitiesUpdatingTasksRequestBody, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ListAccountCapabilitiesUpdatingTasksResponse, ProcessBillingProfileCreatingTaskRequestBody, PROCESS_BILLING_PROFILE_CREATING_TASK, ProcessBillingProfileCreatingTaskResponse, ListBillingProfileCreatingTasksRequestBody, LIST_BILLING_PROFILE_CREATING_TASKS, ListBillingProfileCreatingTasksResponse, ProcessEarningsProfileCreatingTaskRequestBody, PROCESS_EARNINGS_PROFILE_CREATING_TASK, ProcessEarningsProfileCreatingTaskResponse, ListEarningsProfileCreatingTasksRequestBody, LIST_EARNINGS_PROFILE_CREATING_TASKS, ListEarningsProfileCreatingTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetAccountContactHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_CONTACT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountContactRequestBody,
  ): Promise<GetAccountContactResponse>;
}

export abstract class SyncBillingProfileStateHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SYNC_BILLING_PROFILE_STATE;
  public abstract handle(
    loggingPrefix: string,
    body: SyncBillingProfileStateRequestBody,
  ): Promise<SyncBillingProfileStateResponse>;
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

export abstract class ProcessBillingProfileCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_BILLING_PROFILE_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessBillingProfileCreatingTaskRequestBody,
  ): Promise<ProcessBillingProfileCreatingTaskResponse>;
}

export abstract class ListBillingProfileCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_BILLING_PROFILE_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListBillingProfileCreatingTasksRequestBody,
  ): Promise<ListBillingProfileCreatingTasksResponse>;
}

export abstract class ProcessEarningsProfileCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_EARNINGS_PROFILE_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessEarningsProfileCreatingTaskRequestBody,
  ): Promise<ProcessEarningsProfileCreatingTaskResponse>;
}

export abstract class ListEarningsProfileCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_EARNINGS_PROFILE_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListEarningsProfileCreatingTasksRequestBody,
  ): Promise<ListEarningsProfileCreatingTasksResponse>;
}
