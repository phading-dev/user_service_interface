import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PaymentCardMystified {
  brand?: string,
  lastFourDigits?: string,
  expMonth?: number,
  expYear?: number,
}

export let PAYMENT_CARD_MYSTIFIED: MessageDescriptor<PaymentCardMystified> = {
  name: 'PaymentCardMystified',
  fields: [
    {
      name: 'brand',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'lastFourDigits',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'expMonth',
      primitiveType: PrimitiveType.NUMBER,
    },
    {
      name: 'expYear',
      primitiveType: PrimitiveType.NUMBER,
    },
  ]
};

export interface PaymentMethodMystified {
  id?: string,
  card?: PaymentCardMystified,
}

export let PAYMENT_METHOD_MYSTIFIED: MessageDescriptor<PaymentMethodMystified> = {
  name: 'PaymentMethodMystified',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'card',
      messageType: PAYMENT_CARD_MYSTIFIED,
    },
  ]
};
