import { MessageDescriptor, PrimitiveType } from '@selfage/message/descriptor';
import { ServiceDescriptor, PrimitveTypeForBody } from '@selfage/service_descriptor';
import { USER_SESSION } from './user_session';
import { UserInfoCard, USER_INFO_CARD } from './user_info_card';
import { UserRelationship, USER_RELATIONSHIP } from './user_relationship';

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
  usernameIsUsed?: boolean,
  signedSession?: string,
}

export let SIGN_UP_RESPONSE: MessageDescriptor<SignUpResponse> = {
  name: 'SignUpResponse',
  fields: [
    {
      name: 'usernameIsUsed',
      primitiveType: PrimitiveType.BOOLEAN,
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

export interface RefreshUserSessionRequestBody {
}

export let REFRESH_USER_SESSION_REQUEST_BODY: MessageDescriptor<RefreshUserSessionRequestBody> = {
  name: 'RefreshUserSessionRequestBody',
  fields: [
  ]
};

export interface RefreshUserSessionResponse {
  signedSession?: string,
}

export let REFRESH_USER_SESSION_RESPONSE: MessageDescriptor<RefreshUserSessionResponse> = {
  name: 'RefreshUserSessionResponse',
  fields: [
    {
      name: 'signedSession',
      primitiveType: PrimitiveType.STRING,
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
