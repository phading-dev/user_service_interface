import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, SearchAccountsRequestBody, SEARCH_ACCOUNTS, SearchAccountsResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetAccountSummaryHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSummaryRequestBody,
    authStr: string,
  ): Promise<GetAccountSummaryResponse>;
}

export abstract class SearchAccountsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SEARCH_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: SearchAccountsRequestBody,
    authStr: string,
  ): Promise<SearchAccountsResponse>;
}
