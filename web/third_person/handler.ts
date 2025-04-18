import { GetAccountSummaryRequestBody, GET_ACCOUNT_SUMMARY, GetAccountSummaryResponse, GetAccountDetailsRequestBody, GET_ACCOUNT_DETAILS, GetAccountDetailsResponse, SearchPublishersRequestBody, SEARCH_PUBLISHERS, SearchPublishersResponse } from './interface';
import { RemoteCallHandlerInterface } from '@selfage/service_descriptor/remote_call_handler_interface';

export abstract class GetAccountSummaryHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_SUMMARY;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSummaryRequestBody,
  ): Promise<GetAccountSummaryResponse>;
}

export abstract class GetAccountDetailsHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = GET_ACCOUNT_DETAILS;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountDetailsRequestBody,
  ): Promise<GetAccountDetailsResponse>;
}

export abstract class SearchPublishersHandlerInterface implements RemoteCallHandlerInterface {
  public descriptor = SEARCH_PUBLISHERS;
  public abstract handle(
    loggingPrefix: string,
    body: SearchPublishersRequestBody,
    authStr: string,
  ): Promise<SearchPublishersResponse>;
}
