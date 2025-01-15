import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, GetAccountContactRequestBody, GET_ACCOUNT_CONTACT, GetAccountContactResponse, SuspendAccountRequestBody, SUSPEND_ACCOUNT, SuspendAccountResponse, RestoreAccountRequestBody, RESTORE_ACCOUNT, RestoreAccountResponse } from './interface';
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

export abstract class SuspendAccountHandlerInterface implements NodeHandlerInterface {
  public descriptor = SUSPEND_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: SuspendAccountRequestBody,
  ): Promise<SuspendAccountResponse>;
}

export abstract class RestoreAccountHandlerInterface implements NodeHandlerInterface {
  public descriptor = RESTORE_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: RestoreAccountRequestBody,
  ): Promise<RestoreAccountResponse>;
}
