import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, ListAccountsRequestBody, ListAccountsResponse, LIST_ACCOUNTS } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getAccountSummary(
  client: NodeClientInterface,
  body: GetAccountSummaryRequestBody,
  options?: NodeClientOptions,
): Promise<GetAccountSummaryResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_SUMMARY,
      body,
    },
    options,
  );
}

export function listAccounts(
  client: NodeClientInterface,
  body: ListAccountsRequestBody,
  options?: NodeClientOptions,
): Promise<ListAccountsResponse> {
  return client.send(
    {
      descriptor: LIST_ACCOUNTS,
      body,
    },
    options,
  );
}
