import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, CreateUserRequestBody, CreateUserResponse, CREATE_USER, SwitchUserRequestBody, SwitchUserResponse, SWITCH_USER, RenewSessionRequestBody, RenewSessionResponse, RENEW_SESSION, ListUsersRequestBody, ListUsersResponse, LIST_USERS, UploadAvatarResponse, UPLOAD_AVATAR, GetUserRequestBody, GetUserResponse, GET_USER, GetUserCardRequestBody, GetUserCardResponse, GET_USER_CARD, SetUserRelationshipRequestBody, SetUserRelationshipResponse, SET_USER_RELATIONSHIP } from './interface';

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

export function listUsers(
  client: WebServiceClientInterface,
  body: ListUsersRequestBody,
): Promise<ListUsersResponse> {
  return client.send({
    descriptor: LIST_USERS,
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

export function getUser(
  client: WebServiceClientInterface,
  body: GetUserRequestBody,
): Promise<GetUserResponse> {
  return client.send({
    descriptor: GET_USER,
    body,
  });
}

export function getUserCard(
  client: WebServiceClientInterface,
  body: GetUserCardRequestBody,
): Promise<GetUserCardResponse> {
  return client.send({
    descriptor: GET_USER_CARD,
    body,
  });
}

export function setUserRelationship(
  client: WebServiceClientInterface,
  body: SetUserRelationshipRequestBody,
): Promise<SetUserRelationshipResponse> {
  return client.send({
    descriptor: SET_USER_RELATIONSHIP,
    body,
  });
}
