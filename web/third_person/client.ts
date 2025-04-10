import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, GetAccountDetailsRequestBody, GetAccountDetailsResponse, GET_ACCOUNT_DETAILS, SearchPublishersRequestBody, SearchPublishersResponse, SEARCH_PUBLISHERS } from './interface';
import { ClientRequestInterface } from '@selfage/service_descriptor/client_request_interface';

export function newGetAccountSummaryRequest(
  body: GetAccountSummaryRequestBody,
): ClientRequestInterface<GetAccountSummaryResponse> {
  return {
    descriptor: GET_ACCOUNT_SUMMARY,
    body,
  };
}

export function newGetAccountDetailsRequest(
  body: GetAccountDetailsRequestBody,
): ClientRequestInterface<GetAccountDetailsResponse> {
  return {
    descriptor: GET_ACCOUNT_DETAILS,
    body,
  };
}

export function newSearchPublishersRequest(
  body: SearchPublishersRequestBody,
): ClientRequestInterface<SearchPublishersResponse> {
  return {
    descriptor: SEARCH_PUBLISHERS,
    body,
  };
}
