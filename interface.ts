import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { UserType, USER_TYPE } from './user_type';
import { ProductType, PRODUCT_TYPE } from './product_type';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { USER_SESSION } from './user_session';
import { User, USER } from './user';
import { ObjectUser, OBJECT_USER } from './object_user';
import { ObjectUserRelationship, OBJECT_USER_RELATIONSHIP } from './object_user_relationship';

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
/* If set, no other fields will be populated. */
  usernameIsNotAvailable?: boolean,
  productType?: ProductType,
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
      name: 'productType',
      enumType: PRODUCT_TYPE,
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
  productType?: ProductType,
  signedSession?: string,
}

export let SIGN_IN_RESPONSE: MessageDescriptor<SignInResponse> = {
  name: 'SignInResponse',
  fields: [
    {
      name: 'productType',
      enumType: PRODUCT_TYPE,
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
  signedSession?: string,
}

export let CREATE_USER_RESPONSE: MessageDescriptor<CreateUserResponse> = {
  name: 'CreateUserResponse',
  fields: [
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
  signedSession?: string,
}

export let SWITCH_USER_RESPONSE: MessageDescriptor<SwitchUserResponse> = {
  name: 'SwitchUserResponse',
  fields: [
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
  productType?: ProductType,
  signedSession?: string,
}

export let RENEW_SESSION_RESPONSE: MessageDescriptor<RenewSessionResponse> = {
  name: 'RenewSessionResponse',
  fields: [
    {
      name: 'productType',
      enumType: PRODUCT_TYPE,
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

export interface ListOwnedUsersRequestBody {
  userType?: UserType,
}

export let LIST_OWNED_USERS_REQUEST_BODY: MessageDescriptor<ListOwnedUsersRequestBody> = {
  name: 'ListOwnedUsersRequestBody',
  fields: [
    {
      name: 'userType',
      enumType: USER_TYPE,
    },
  ]
};

export interface ListOwnedUsersResponse {
  users?: Array<User>,
}

export let LIST_OWNED_USERS_RESPONSE: MessageDescriptor<ListOwnedUsersResponse> = {
  name: 'ListOwnedUsersResponse',
  fields: [
    {
      name: 'users',
      messageType: USER,
      isArray: true,
    },
  ]
};

export let LIST_OWNED_USERS: ServiceDescriptor = {
  name: "ListOwnedUsers",
  path: "/ListOwnedUsers",
  body: {
    messageType: LIST_OWNED_USERS_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: LIST_OWNED_USERS_RESPONSE,
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

export interface GetSubjectUserRequestBody {
}

export let GET_SUBJECT_USER_REQUEST_BODY: MessageDescriptor<GetSubjectUserRequestBody> = {
  name: 'GetSubjectUserRequestBody',
  fields: [
  ]
};

export interface GetSubjectUserResponse {
  user?: User,
}

export let GET_SUBJECT_USER_RESPONSE: MessageDescriptor<GetSubjectUserResponse> = {
  name: 'GetSubjectUserResponse',
  fields: [
    {
      name: 'user',
      messageType: USER,
    },
  ]
};

export let GET_SUBJECT_USER: ServiceDescriptor = {
  name: "GetSubjectUser",
  path: "/GetSubjectUser",
  body: {
    messageType: GET_SUBJECT_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_SUBJECT_USER_RESPONSE,
  },
}

export interface GetObjectUserRequestBody {
  userId?: string,
}

export let GET_OBJECT_USER_REQUEST_BODY: MessageDescriptor<GetObjectUserRequestBody> = {
  name: 'GetObjectUserRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
  ]
};

export interface GetObjectUserResponse {
  objectUser?: ObjectUser,
}

export let GET_OBJECT_USER_RESPONSE: MessageDescriptor<GetObjectUserResponse> = {
  name: 'GetObjectUserResponse',
  fields: [
    {
      name: 'objectUser',
      messageType: OBJECT_USER,
    },
  ]
};

export let GET_OBJECT_USER: ServiceDescriptor = {
  name: "GetObjectUser",
  path: "/GetObjectUser",
  body: {
    messageType: GET_OBJECT_USER_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: GET_OBJECT_USER_RESPONSE,
  },
}

export interface SetObjectUserRelationshipRequestBody {
  userId?: string,
  relationship?: ObjectUserRelationship,
}

export let SET_OBJECT_USER_RELATIONSHIP_REQUEST_BODY: MessageDescriptor<SetObjectUserRelationshipRequestBody> = {
  name: 'SetObjectUserRelationshipRequestBody',
  fields: [
    {
      name: 'userId',
      primitiveType: PrimitiveType.STRING,
    },
    {
      name: 'relationship',
      enumType: OBJECT_USER_RELATIONSHIP,
    },
  ]
};

export interface SetObjectUserRelationshipResponse {
}

export let SET_OBJECT_USER_RELATIONSHIP_RESPONSE: MessageDescriptor<SetObjectUserRelationshipResponse> = {
  name: 'SetObjectUserRelationshipResponse',
  fields: [
  ]
};

export let SET_OBJECT_USER_RELATIONSHIP: ServiceDescriptor = {
  name: "SetObjectUserRelationship",
  path: "/SetObjectUserRelationship",
  body: {
    messageType: SET_OBJECT_USER_RELATIONSHIP_REQUEST_BODY,
  },
  auth: {
    key: "auth",
    type: USER_SESSION
  },
  response: {
    messageType: SET_OBJECT_USER_RELATIONSHIP_RESPONSE,
  },
}
