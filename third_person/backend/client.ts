import { GetAccountSnapshotRequestBody, GetAccountSnapshotResponse, GET_ACCOUNT_SNAPSHOT } from './interface';
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
