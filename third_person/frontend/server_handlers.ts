import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_ACCOUNT, GetAccountRequestBody, GetAccountResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetAccountRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountResponse>;
}
