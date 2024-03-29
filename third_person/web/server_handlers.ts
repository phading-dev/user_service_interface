import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_ACCOUNT, GetAccountRequestBody, GetAccountResponse, SET_ACCOUNT_RELATIONSHIP, SetAccountRelationshipRequestBody, SetAccountRelationshipResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetAccountRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountResponse>;
}

export abstract class SetAccountRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_ACCOUNT_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetAccountRelationshipRequestBody,
    auth: WebClientSession,
  ): Promise<SetAccountRelationshipResponse>;
}
