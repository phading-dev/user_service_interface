import { GetAccountSnapshotRequestBody, GET_ACCOUNT_SNAPSHOT, GetAccountSnapshotResponse, ListAccountsRequestBody, LIST_ACCOUNTS, ListAccountsResponse } from './interface';
import { NodeHandlerInterface } from '@selfage/service_descriptor/handler_interface';

export abstract class GetAccountSnapshotHandlerInterface implements NodeHandlerInterface {
  public descriptor = GET_ACCOUNT_SNAPSHOT;
  public abstract handle(
    loggingPrefix: string,
    body: GetAccountSnapshotRequestBody,
  ): Promise<GetAccountSnapshotResponse>;
}

export abstract class ListAccountsHandlerInterface implements NodeHandlerInterface {
  public descriptor = LIST_ACCOUNTS;
  public abstract handle(
    loggingPrefix: string,
    body: ListAccountsRequestBody,
  ): Promise<ListAccountsResponse>;
}
