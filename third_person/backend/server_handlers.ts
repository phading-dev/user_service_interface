import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { GET_ACCOUNT_SNAPSHOT, GetAccountSnapshotRequestBody, GetAccountSnapshotResponse } from './interface';

export abstract class GetAccountSnapshotHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_SNAPSHOT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSnapshotRequestBody,
  ): Promise<GetAccountSnapshotResponse>;
}
