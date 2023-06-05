import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { USER_SESSION } from './user_session';
import { UserInfoCard, USER_INFO_CARD } from './user_info_card';
import { UserRelationship, USER_RELATIONSHIP } from './user_relationship';
import { PersonaCard, PERSONA_CARD } from './persona_card';

export interface SignUpRequestBody {
  username?: string,
  naturalName?: string,
  password?: string,
}

export let SIGN_UP_REQUEST_BODY: MessageDescriptor<SignUpRequestBody> = {
  name: 'SignUpRequestBody',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'password',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SignUpResponse {
  signedSession?: string,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SIGN_UP: ServiceDescriptor = {
  name: "SignUp",
  path: "/SignUp",
  body: {
    messageType: SIGN_UP_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_UP_RESPONSE,
  },
}

export interface SignInRequestBody {
  username?: string,
  password?: string,
}

export let SIGN_IN_REQUEST_BODY: MessageDescriptor<SignInRequestBody> = {
  name: 'SignInRequestBody',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'password',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SignInResponse {
  signedSession?: string,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SIGN_IN: ServiceDescriptor = {
  name: "SignIn",
  path: "/SignIn",
  body: {
    messageType: SIGN_IN_REQUEST_BODY,
  },
  response: {
    messageType: SIGN_IN_RESPONSE,
  },
}

export interface UploadAvatarResponse {
}

export let UPLOAD_AVATAR_RESPONSE: MessageDescriptor<UploadAvatarResponse> = {
  name: 'UploadAvatarResponse',
  fields: [
  ]
};

export let UPLOAD_AVATAR: ServiceDescriptor = {
  name: "UploadAvatar",
  path: "/UploadAvatar",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPLOAD_AVATAR_RESPONSE,
  },
}

export interface UpdatePasswordRequestBody {
  currentPassword?: string,
  newPassword?: string,
}

export let UPDATE_PASSWORD_REQUEST_BODY: MessageDescriptor<UpdatePasswordRequestBody> = {
  name: 'UpdatePasswordRequestBody',
  fields: [
    {
      name: 'currentPassword',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'newPassword',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface UpdatePasswordResponse {
}

export let UPDATE_PASSWORD_RESPONSE: MessageDescriptor<UpdatePasswordResponse> = {
  name: 'UpdatePasswordResponse',
  fields: [
  ]
};

export let UPDATE_PASSWORD: ServiceDescriptor = {
  name: "UpdatePassword",
  path: "/UpdatePassword",
  body: {
    messageType: UPDATE_PASSWORD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_PASSWORD_RESPONSE,
  },
}

export interface DeleteUserRequestBody {
}

export let DELETE_USER_REQUEST_BODY: MessageDescriptor<DeleteUserRequestBody> = {
  name: 'DeleteUserRequestBody',
  fields: [
  ]
};

export interface DeleteUserResponse {
}

export let DELETE_USER_RESPONSE: MessageDescriptor<DeleteUserResponse> = {
  name: 'DeleteUserResponse',
  fields: [
  ]
};

export let DELETE_USER: ServiceDescriptor = {
  name: "DeleteUser",
  path: "/DeleteUser",
  body: {
    messageType: DELETE_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: DELETE_USER_RESPONSE,
  },
}

export interface GetUserProfileRequestBody {
}

export let GET_USER_PROFILE_REQUEST_BODY: MessageDescriptor<GetUserProfileRequestBody> = {
  name: 'GetUserProfileRequestBody',
  fields: [
  ]
};

export interface GetUserProfileResponse {
  username?: string,
  naturalName?: string,
  email?: string,
  avatarLargePath?: string,
}

export let GET_USER_PROFILE_RESPONSE: MessageDescriptor<GetUserProfileResponse> = {
  name: 'GetUserProfileResponse',
  fields: [
    {
      name: 'username',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'email',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'avatarLargePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let GET_USER_PROFILE: ServiceDescriptor = {
  name: "GetUserProfile",
  path: "/GetUserProfile",
  body: {
    messageType: GET_USER_PROFILE_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_USER_PROFILE_RESPONSE,
  },
}

export interface GetUserInfoCardRequestBody {
  userId?: string,
}

export let GET_USER_INFO_CARD_REQUEST_BODY: MessageDescriptor<GetUserInfoCardRequestBody> = {
  name: 'GetUserInfoCardRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetUserInfoCardResponse {
  card?: UserInfoCard,
}

export let GET_USER_INFO_CARD_RESPONSE: MessageDescriptor<GetUserInfoCardResponse> = {
  name: 'GetUserInfoCardResponse',
  fields: [
    {
      name: 'card',
      messageType: USER_INFO_CARD,
    },
  ]
};

export let GET_USER_INFO_CARD: ServiceDescriptor = {
  name: "GetUserInfoCard",
  path: "/GetUserInfoCard",
  body: {
    messageType: GET_USER_INFO_CARD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_USER_INFO_CARD_RESPONSE,
  },
}

export interface SetUserRelationshipRequestBody {
  userId?: string,
  relationship?: UserRelationship,
}

export let SET_USER_RELATIONSHIP_REQUEST_BODY: MessageDescriptor<SetUserRelationshipRequestBody> = {
  name: 'SetUserRelationshipRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'relationship',
      enumType: USER_RELATIONSHIP,
    },
  ]
};

export interface SetUserRelationshipResponse {
}

export let SET_USER_RELATIONSHIP_RESPONSE: MessageDescriptor<SetUserRelationshipResponse> = {
  name: 'SetUserRelationshipResponse',
  fields: [
  ]
};

export let SET_USER_RELATIONSHIP: ServiceDescriptor = {
  name: "SetUserRelationship",
  path: "/SetUserRelationship",
  body: {
    messageType: SET_USER_RELATIONSHIP_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: SET_USER_RELATIONSHIP_RESPONSE,
  },
}

export interface UploadPersonaImageResponse {
  imagePath?: string,
}

export let UPLOAD_PERSONA_IMAGE_RESPONSE: MessageDescriptor<UploadPersonaImageResponse> = {
  name: 'UploadPersonaImageResponse',
  fields: [
    {
      name: 'imagePath',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let UPLOAD_PERSONA_IMAGE: ServiceDescriptor = {
  name: "UploadPersonaImage",
  path: "/UploadPersonaImage",
  body: {
    primitiveType: PrimitveTypeForBody.BYTES,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPLOAD_PERSONA_IMAGE_RESPONSE,
  },
}

export interface CreatePersonaRequestBody {
  name?: string,
  imagePath?: string,
}

export let CREATE_PERSONA_REQUEST_BODY: MessageDescriptor<CreatePersonaRequestBody> = {
  name: 'CreatePersonaRequestBody',
  fields: [
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

export interface CreatePersonaResponse {
  id?: string,
}

export let CREATE_PERSONA_RESPONSE: MessageDescriptor<CreatePersonaResponse> = {
  name: 'CreatePersonaResponse',
  fields: [
    {
      name: 'id',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_PERSONA: ServiceDescriptor = {
  name: "CreatePersona",
  path: "/CreatePersona",
  body: {
    messageType: CREATE_PERSONA_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: CREATE_PERSONA_RESPONSE,
  },
}

export interface UpdatePersonaRequestBody {
  personaId?: string,
  name?: string,
  imagePath?: string,
}

export let UPDATE_PERSONA_REQUEST_BODY: MessageDescriptor<UpdatePersonaRequestBody> = {
  name: 'UpdatePersonaRequestBody',
  fields: [
    {
      name: 'personaId',
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

export interface UpdatePersonaResponse {
}

export let UPDATE_PERSONA_RESPONSE: MessageDescriptor<UpdatePersonaResponse> = {
  name: 'UpdatePersonaResponse',
  fields: [
  ]
};

export let UPDATE_PERSONA: ServiceDescriptor = {
  name: "UpdatePersona",
  path: "/UpdatePersona",
  body: {
    messageType: UPDATE_PERSONA_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: UPDATE_PERSONA_RESPONSE,
  },
}

export interface DeletePersonaRequestBody {
  personaId?: string,
}

export let DELETE_PERSONA_REQUEST_BODY: MessageDescriptor<DeletePersonaRequestBody> = {
  name: 'DeletePersonaRequestBody',
  fields: [
    {
      name: 'personaId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface DeletePersonaResponse {
}

export let DELETE_PERSONA_RESPONSE: MessageDescriptor<DeletePersonaResponse> = {
  name: 'DeletePersonaResponse',
  fields: [
  ]
};

export let DELETE_PERSONA: ServiceDescriptor = {
  name: "DeletePersona",
  path: "/DeletePersona",
  body: {
    messageType: DELETE_PERSONA_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: DELETE_PERSONA_RESPONSE,
  },
}

export interface ListPersonasRequestBody {
}

export let LIST_PERSONAS_REQUEST_BODY: MessageDescriptor<ListPersonasRequestBody> = {
  name: 'ListPersonasRequestBody',
  fields: [
  ]
};

export interface ListPersonasResponse {
  cards?: PersonaCard,
}

export let LIST_PERSONAS_RESPONSE: MessageDescriptor<ListPersonasResponse> = {
  name: 'ListPersonasResponse',
  fields: [
    {
      name: 'cards',
      messageType: PERSONA_CARD,
    },
  ]
};

export let LIST_PERSONAS: ServiceDescriptor = {
  name: "ListPersonas",
  path: "/ListPersonas",
  body: {
    messageType: LIST_PERSONAS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_PERSONAS_RESPONSE,
  },
}

export interface GetPersonaRequestBody {
  personaId?: string,
}

export let GET_PERSONA_REQUEST_BODY: MessageDescriptor<GetPersonaRequestBody> = {
  name: 'GetPersonaRequestBody',
  fields: [
    {
      name: 'personaId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetPersonaResponse {
  card?: PersonaCard,
}

export let GET_PERSONA_RESPONSE: MessageDescriptor<GetPersonaResponse> = {
  name: 'GetPersonaResponse',
  fields: [
    {
      name: 'card',
      messageType: PERSONA_CARD,
    },
  ]
};

export let GET_PERSONA: ServiceDescriptor = {
  name: "GetPersona",
  path: "/GetPersona",
  body: {
    messageType: GET_PERSONA_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_PERSONA_RESPONSE,
  },
}

export interface RefreshUserSessionRequestBody {
  personaId?: string,
}

export let REFRESH_USER_SESSION_REQUEST_BODY: MessageDescriptor<RefreshUserSessionRequestBody> = {
  name: 'RefreshUserSessionRequestBody',
  fields: [
    {
      name: 'personaId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface RefreshUserSessionResponse {
  signedSession?: string,
  selectPersona?: boolean,
}

export let REFRESH_USER_SESSION_RESPONSE: MessageDescriptor<RefreshUserSessionResponse> = {
  name: 'RefreshUserSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'selectPersona',
      primitiveType: PrimitiveType.BOOLEAN,
    },
  ]
};

export let REFRESH_USER_SESSION: ServiceDescriptor = {
  name: "RefreshUserSession",
  path: "/RrefreshUserSession",
  body: {
    messageType: REFRESH_USER_SESSION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: REFRESH_USER_SESSION_RESPONSE,
  },
}
