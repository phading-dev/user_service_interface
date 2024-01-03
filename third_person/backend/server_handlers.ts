import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_ACCOUNT_SNAPSHOT, GetAccountSnapshotRequestBody, GetAccountSnapshotResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';

export abstract class GetAccountSnapshotHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_SNAPSHOT;
  public abstract handle(
    requestId: string,
    body: GetAccountSnapshotRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountSnapshotResponse>;
}
