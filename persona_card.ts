import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';

export interface PersonaCard {
  id?: string,
  name?: string,
  imagePath?: string,
}

export let PERSONA_CARD: MessageDescriptor<PersonaCard> = {
  name: 'PersonaCard',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'name',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'imagePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};
