import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_ACCOUNT, GetAccountRequestBody, GetAccountResponse } from './interface';
import { ClientSession } from '@phading/user_session_service_interface/client_session';

export abstract class GetAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountRequestBody,
    auth: ClientSession,
  ): Promise<GetAccountResponse>;
}
