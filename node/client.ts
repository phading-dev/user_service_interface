import { GetAccountSummaryRequestBody, GetAccountSummaryResponse, GET_ACCOUNT_SUMMARY, SyncBillingAccountStateRequestBody, SyncBillingAccountStateResponse, SYNC_BILLING_ACCOUNT_STATE } from './interface';
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

export function syncBillingAccountState(
  client: NodeClientInterface,
  body: SyncBillingAccountStateRequestBody,
  options?: NodeClientOptions,
): Promise<SyncBillingAccountStateResponse> {
  return client.send(
    {
      descriptor: SYNC_BILLING_ACCOUNT_STATE,
      body,
    },
    options,
  );
}
