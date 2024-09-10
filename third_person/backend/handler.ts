import { GetAccountSnapshotRequestBody, GET_ACCOUNT_SNAPSHOT, GetAccountSnapshotResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetAccountSnapshotHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_SNAPSHOT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSnapshotRequestBody,
  ): Promise<GetAccountSnapshotResponse>;
}
