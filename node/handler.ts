import { GetAccountContactRequestBody, GET_ACCOUNT_CONTACT, GetAccountContactResponse, SyncPaymentProfileStateRequestBody, SYNC_PAYMENT_PROFILE_STATE, SyncPaymentProfileStateResponse, ProcessAccountCapabilitiesUpdatingTaskRequestBody, PROCESS_ACCOUNT_CAPABILITIES_UPDATING_TASK, ProcessAccountCapabilitiesUpdatingTaskResponse, ListAccountCapabilitiesUpdatingTasksRequestBody, LIST_ACCOUNT_CAPABILITIES_UPDATING_TASKS, ListAccountCapabilitiesUpdatingTasksResponse, ProcessPaymentProfileCreatingTaskRequestBody, PROCESS_PAYMENT_PROFILE_CREATING_TASK, ProcessPaymentProfileCreatingTaskResponse, ListPaymentProfileCreatingTasksRequestBody, LIST_PAYMENT_PROFILE_CREATING_TASKS, ListPaymentProfileCreatingTasksResponse, ProcessPayoutProfileCreatingTaskRequestBody, PROCESS_PAYOUT_PROFILE_CREATING_TASK, ProcessPayoutProfileCreatingTaskResponse, ListPayoutProfileCreatingTasksRequestBody, LIST_PAYOUT_PROFILE_CREATING_TASKS, ListPayoutProfileCreatingTasksResponse, ProcessAvatarImageDeletingTaskRequestBody, PROCESS_AVATAR_IMAGE_DELETING_TASK, ProcessAvatarImageDeletingTaskResponse, ListAvatarImageDeletingTasksRequestBody, LIST_AVATAR_IMAGE_DELETING_TASKS, ListAvatarImageDeletingTasksResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetAccountContactHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_CONTACT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountContactRequestBody,
  ): Promise<GetAccountContactResponse>;
}

export abstract class SyncPaymentProfileStateHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SYNC_PAYMENT_PROFILE_STATE;
  public abstract handle(
    loggingPrefix: string,
    body: SyncPaymentProfileStateRequestBody,
  ): Promise<SyncPaymentProfileStateResponse>;
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

export abstract class ProcessPaymentProfileCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYMENT_PROFILE_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPaymentProfileCreatingTaskRequestBody,
  ): Promise<ProcessPaymentProfileCreatingTaskResponse>;
}

export abstract class ListPaymentProfileCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYMENT_PROFILE_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPaymentProfileCreatingTasksRequestBody,
  ): Promise<ListPaymentProfileCreatingTasksResponse>;
}

export abstract class ProcessPayoutProfileCreatingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_PAYOUT_PROFILE_CREATING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessPayoutProfileCreatingTaskRequestBody,
  ): Promise<ProcessPayoutProfileCreatingTaskResponse>;
}

export abstract class ListPayoutProfileCreatingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_PAYOUT_PROFILE_CREATING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListPayoutProfileCreatingTasksRequestBody,
  ): Promise<ListPayoutProfileCreatingTasksResponse>;
}

export abstract class ProcessAvatarImageDeletingTaskHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = PROCESS_AVATAR_IMAGE_DELETING_TASK;
  public abstract handle(
    loggingPrefix: string,
    body: ProcessAvatarImageDeletingTaskRequestBody,
  ): Promise<ProcessAvatarImageDeletingTaskResponse>;
}

export abstract class ListAvatarImageDeletingTasksHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = LIST_AVATAR_IMAGE_DELETING_TASKS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAvatarImageDeletingTasksRequestBody,
  ): Promise<ListAvatarImageDeletingTasksResponse>;
}
