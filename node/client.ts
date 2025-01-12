import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, SuspendAccountRequestBody, SuspendAccountResponse, SUSPEND_ACCOUNT, RestoreAccountRequestBody, RestoreAccountResponse, RESTORE_ACCOUNT } from './interface';
import { NodeClientInterface, NodeClientOptions } from '@selfage/service_descriptor/client_interface';

export function getAccountSummary(
  client: NodeClientInterface,
  body: GetAccountSummaryRequestBody,
  options?: NodeClientOptions,
): Promise<GetAccountSummaryResponse> {
  return client.send(
    {
      descriptor: GET_ACCOUNT_SUMMARY,
      body,
    },
    options,
  );
}

export function suspendAccount(
  client: NodeClientInterface,
  body: SuspendAccountRequestBody,
  options?: NodeClientOptions,
): Promise<SuspendAccountResponse> {
  return client.send(
    {
      descriptor: SUSPEND_ACCOUNT,
      body,
    },
    options,
  );
}

export function restoreAccount(
  client: NodeClientInterface,
  body: RestoreAccountRequestBody,
  options?: NodeClientOptions,
): Promise<RestoreAccountResponse> {
  return client.send(
    {
      descriptor: RESTORE_ACCOUNT,
      body,
    },
    options,
  );
}
