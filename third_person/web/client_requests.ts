import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { GetAccountRequestBody, GetAccountResponse, GET_ACCOUNT, SetAccountRelationshipRequestBody, SetAccountRelationshipResponse, SET_ACCOUNT_RELATIONSHIP } from './interface';

export function getAccount(
  client: WebServiceClientInterface,
  body: GetAccountRequestBody,
): Promise<GetAccountResponse> {
  return client.send({
    descriptor: GET_ACCOUNT,
    body,
  });
}

export function setAccountRelationship(
  client: WebServiceClientInterface,
  body: SetAccountRelationshipRequestBody,
): Promise<SetAccountRelationshipResponse> {
  return client.send({
    descriptor: SET_ACCOUNT_RELATIONSHIP,
    body,
  });
}
