import { EnumDescriptor } from '@selfage/message/descriptor';

export enum PaymentProfileState {
  HEALTHY = 1,
  SUSPENDED = 2,
}

export let PAYMENT_PROFILE_STATE: EnumDescriptor<PaymentProfileState> = {
  name: 'PaymentProfileState',
  values: [{
    name: 'HEALTHY',
    value: 1,
  }, {
    name: 'SUSPENDED',
    value: 2,
  }]
}
