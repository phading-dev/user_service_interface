import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, CreateUserRequestBody, CreateUserResponse, CREATE_USER, SwitchUserRequestBody, SwitchUserResponse, SWITCH_USER, RenewSessionRequestBody, RenewSessionResponse, RENEW_SESSION, ListOwnedUsersRequestBody, ListOwnedUsersResponse, LIST_OWNED_USERS, UploadAvatarResponse, UPLOAD_AVATAR, GetSubjectUserRequestBody, GetSubjectUserResponse, GET_SUBJECT_USER, GetObjectUserRequestBody, GetObjectUserResponse, GET_OBJECT_USER, SetObjectUserRelationshipRequestBody, SetObjectUserRelationshipResponse, SET_OBJECT_USER_RELATIONSHIP } from './interface';

export function signUp(
  client: WebServiceClientInterface,
  body: SignUpRequestBody,
): Promise<SignUpResponse> {
  return client.send({
    descriptor: SIGN_UP,
    body,
  });
}

export function signIn(
  client: WebServiceClientInterface,
  body: SignInRequestBody,
): Promise<SignInResponse> {
  return client.send({
    descriptor: SIGN_IN,
    body,
  });
}

export function updatePassword(
  client: WebServiceClientInterface,
  body: UpdatePasswordRequestBody,
): Promise<UpdatePasswordResponse> {
  return client.send({
    descriptor: UPDATE_PASSWORD,
    body,
  });
}

export function createUser(
  client: WebServiceClientInterface,
  body: CreateUserRequestBody,
): Promise<CreateUserResponse> {
  return client.send({
    descriptor: CREATE_USER,
    body,
  });
}

export function switchUser(
  client: WebServiceClientInterface,
  body: SwitchUserRequestBody,
): Promise<SwitchUserResponse> {
  return client.send({
    descriptor: SWITCH_USER,
    body,
  });
}

export function renewSession(
  client: WebServiceClientInterface,
  body: RenewSessionRequestBody,
): Promise<RenewSessionResponse> {
  return client.send({
    descriptor: RENEW_SESSION,
    body,
  });
}

export function listOwnedUsers(
  client: WebServiceClientInterface,
  body: ListOwnedUsersRequestBody,
): Promise<ListOwnedUsersResponse> {
  return client.send({
    descriptor: LIST_OWNED_USERS,
    body,
  });
}

export function uploadAvatar(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadAvatarResponse> {
  return client.send({
    descriptor: UPLOAD_AVATAR,
    body,
  });
}

export function getSubjectUser(
  client: WebServiceClientInterface,
  body: GetSubjectUserRequestBody,
): Promise<GetSubjectUserResponse> {
  return client.send({
    descriptor: GET_SUBJECT_USER,
    body,
  });
}

export function getObjectUser(
  client: WebServiceClientInterface,
  body: GetObjectUserRequestBody,
): Promise<GetObjectUserResponse> {
  return client.send({
    descriptor: GET_OBJECT_USER,
    body,
  });
}

export function setObjectUserRelationship(
  client: WebServiceClientInterface,
  body: SetObjectUserRelationshipRequestBody,
): Promise<SetObjectUserRelationshipResponse> {
  return client.send({
    descriptor: SET_OBJECT_USER_RELATIONSHIP,
    body,
  });
}
