import { GetAccountSnapshotRequestBody, GetAccountSnapshotResponse, GET_ACCOUNT_SNAPSHOT, ListAccountsRequestBody, ListAccountsResponse, LIST_ACCOUNTS } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getAccountSnapshot(
  client: NodeClientInterface,
  body: GetAccountSnapshotRequestBody,
  options?: NodeClientOptions,
): Promise<GetAccountSnapshotResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_SNAPSHOT,
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
