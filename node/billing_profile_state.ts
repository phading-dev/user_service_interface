import { EnumDescriptor } from '@selfage/message/descriptor';

export enum BillingProfileState {
  HEALTHY = 1,
  SUSPENDED = 2,
}

export let BILLING_PROFILE_STATE: EnumDescriptor<BillingProfileState> = {
  name: 'BillingProfileState',
  values: [{
    name: 'HEALTHY',
    value: 1,
  }, {
    name: 'SUSPENDED',
    value: 2,
  }]
}
