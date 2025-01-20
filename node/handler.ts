import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, SyncBillingAccountStateRequestBody, SYNC_BILLING_ACCOUNT_STATE, SyncBillingAccountStateResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetAccountSummaryHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSummaryRequestBody,
  ): Promise<GetAccountSummaryResponse>;
}

export abstract class SyncBillingAccountStateHandlerInterface implements NodeHandlerInterface {
  public descriptor = SYNC_BILLING_ACCOUNT_STATE;
  public abstract handle(
    loggingPrefix: string,
    body: SyncBillingAccountStateRequestBody,
  ): Promise<SyncBillingAccountStateResponse>;
}
