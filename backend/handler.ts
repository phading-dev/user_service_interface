import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, ListAccountsRequestBody, LIST_ACCOUNTS, ListAccountsResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetAccountSummaryHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSummaryRequestBody,
  ): Promise<GetAccountSummaryResponse>;
}

export abstract class ListAccountsHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
  ): Promise<ListAccountsResponse>;
}
