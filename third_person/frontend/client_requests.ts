import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetAccountRequestBody, GetAccountResponse, GET_ACCOUNT } from './interface';

export function getAccount(
  client: WebServiceClientInterface,
  body: GetAccountRequestBody,
): Promise<GetAccountResponse> {
  return client.send({
    descriptor: GET_ACCOUNT,
    body,
  });
}
