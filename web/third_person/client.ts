import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, SearchAccountsRequestBody, SearchAccountsResponse, SEARCH_ACCOUNTS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetAccountSummaryRequest(
  body: GetAccountSummaryRequestBody,
): ClientRequestInterface<GetAccountSummaryResponse> {
  return {
    descriptor: GET_ACCOUNT_SUMMARY,
    body,
  };
}

export function newSearchAccountsRequest(
  body: SearchAccountsRequestBody,
): ClientRequestInterface<SearchAccountsResponse> {
  return {
    descriptor: SEARCH_ACCOUNTS,
    body,
  };
}
