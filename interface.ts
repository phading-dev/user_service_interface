import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { UserType, USER_TYPE } from './user_type';
import { UserSession, USER_SESSION } from './user_session';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { User, USER } from './user';
import { UserCard, USER_CARD } from './user_card';
import { UserRelationship, USER_RELATIONSHIP } from './user_relationship';

export interface SignUpRequestBody {
  username?: string,
  naturalName?: string,
  password?: string,
  userType?: UserType,
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
    {
      name: 'userType',
      enumType: USER_TYPE,
    },
  ]
};

export interface SignUpResponse {
  usernameIsNotAvailable?: boolean,
  userSession?: UserSession,
  signedSession?: string,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [
    {
      name: 'usernameIsNotAvailable',
      primitiveType: PrimitiveType.BOOLEAN,
    },
    {
      name: 'userSession',
      messageType: USER_SESSION,
    },
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
  userSession?: UserSession,
  signedSession?: string,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [
    {
      name: 'userSession',
      messageType: USER_SESSION,
    },
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

export interface CreateUserRequestBody {
  naturalName?: string,
  userType?: UserType,
}

export let CREATE_USER_REQUEST_BODY: MessageDescriptor<CreateUserRequestBody> = {
  name: 'CreateUserRequestBody',
  fields: [
    {
      name: 'naturalName',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'userType',
      enumType: USER_TYPE,
    },
  ]
};

export interface CreateUserResponse {
  userSession?: UserSession,
  signedSession?: string,
}

export let CREATE_USER_RESPONSE: MessageDescriptor<CreateUserResponse> = {
  name: 'CreateUserResponse',
  fields: [
    {
      name: 'userSession',
      messageType: USER_SESSION,
    },
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let CREATE_USER: ServiceDescriptor = {
  name: "CreateUser",
  path: "/CreateUser",
  body: {
    messageType: CREATE_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: CREATE_USER_RESPONSE,
  },
}

export interface SwitchUserRequestBody {
  userId?: string,
}

export let SWITCH_USER_REQUEST_BODY: MessageDescriptor<SwitchUserRequestBody> = {
  name: 'SwitchUserRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface SwitchUserResponse {
  userSession?: UserSession,
  signedSession?: string,
}

export let SWITCH_USER_RESPONSE: MessageDescriptor<SwitchUserResponse> = {
  name: 'SwitchUserResponse',
  fields: [
    {
      name: 'userSession',
      messageType: USER_SESSION,
    },
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let SWITCH_USER: ServiceDescriptor = {
  name: "SwitchUser",
  path: "/SwitchUser",
  body: {
    messageType: SWITCH_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: SWITCH_USER_RESPONSE,
  },
}

export interface RenewSessionRequestBody {
}

export let RENEW_SESSION_REQUEST_BODY: MessageDescriptor<RenewSessionRequestBody> = {
  name: 'RenewSessionRequestBody',
  fields: [
  ]
};

export interface RenewSessionResponse {
  userSession?: UserSession,
  signedSession?: string,
}

export let RENEW_SESSION_RESPONSE: MessageDescriptor<RenewSessionResponse> = {
  name: 'RenewSessionResponse',
  fields: [
    {
      name: 'userSession',
      messageType: USER_SESSION,
    },
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export let RENEW_SESSION: ServiceDescriptor = {
  name: "RenewSession",
  path: "/RenewSession",
  body: {
    messageType: RENEW_SESSION_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: RENEW_SESSION_RESPONSE,
  },
}

export interface ListUsersRequestBody {
  userType?: UserType,
}

export let LIST_USERS_REQUEST_BODY: MessageDescriptor<ListUsersRequestBody> = {
  name: 'ListUsersRequestBody',
  fields: [
    {
      name: 'userType',
      enumType: USER_TYPE,
    },
  ]
};

export interface ListUsersResponse {
  users?: Array<User>,
}

export let LIST_USERS_RESPONSE: MessageDescriptor<ListUsersResponse> = {
  name: 'ListUsersResponse',
  fields: [
    {
      name: 'users',
      messageType: USER,
      isArray: true,
    },
  ]
};

export let LIST_USERS: ServiceDescriptor = {
  name: "ListUsers",
  path: "/ListUsers",
  body: {
    messageType: LIST_USERS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_USERS_RESPONSE,
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

export interface GetUserRequestBody {
}

export let GET_USER_REQUEST_BODY: MessageDescriptor<GetUserRequestBody> = {
  name: 'GetUserRequestBody',
  fields: [
  ]
};

export interface GetUserResponse {
  user?: User,
}

export let GET_USER_RESPONSE: MessageDescriptor<GetUserResponse> = {
  name: 'GetUserResponse',
  fields: [
    {
      name: 'user',
      messageType: USER,
    },
  ]
};

export let GET_USER: ServiceDescriptor = {
  name: "GetUser",
  path: "/GetUser",
  body: {
    messageType: GET_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_USER_RESPONSE,
  },
}

export interface GetUserCardRequestBody {
  userId?: string,
}

export let GET_USER_CARD_REQUEST_BODY: MessageDescriptor<GetUserCardRequestBody> = {
  name: 'GetUserCardRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetUserCardResponse {
  userCard?: UserCard,
}

export let GET_USER_CARD_RESPONSE: MessageDescriptor<GetUserCardResponse> = {
  name: 'GetUserCardResponse',
  fields: [
    {
      name: 'userCard',
      messageType: USER_CARD,
    },
  ]
};

export let GET_USER_CARD: ServiceDescriptor = {
  name: "GetUserCard",
  path: "/GetUserCard",
  body: {
    messageType: GET_USER_CARD_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_USER_CARD_RESPONSE,
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
