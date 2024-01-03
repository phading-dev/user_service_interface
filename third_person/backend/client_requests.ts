import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetAccountSnapshotRequestBody, GetAccountSnapshotResponse, GET_ACCOUNT_SNAPSHOT } from './interface';

export function getAccountSnapshot(
  client: WebServiceClientInterface,
  body: GetAccountSnapshotRequestBody,
): Promise<GetAccountSnapshotResponse> {
  return client.send({
    descriptor: GET_ACCOUNT_SNAPSHOT,
    body,
  });
}
