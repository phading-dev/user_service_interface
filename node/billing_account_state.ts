import { EnumDescriptor } from '@selfage/message/descriptor';

export enum BillingAccountState {
  HEALTHY = 1,
  SUSPENDED = 2,
}

export let BILLING_ACCOUNT_STATE: EnumDescriptor<BillingAccountState> = {
  name: 'BillingAccountState',
  values: [{
    name: 'HEALTHY',
    value: 1,
  }, {
    name: 'SUSPENDED',
    value: 2,
  }]
}
