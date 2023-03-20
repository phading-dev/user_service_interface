import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, UploadAvatarResponse, UPLOAD_AVATAR, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, DeleteUserRequestBody, DeleteUserResponse, DELETE_USER, GetUserProfileRequestBody, GetUserProfileResponse, GET_USER_PROFILE, GetUserInfoCardRequestBody, GetUserInfoCardResponse, GET_USER_INFO_CARD, SetUserRelationshipRequestBody, SetUserRelationshipResponse, SET_USER_RELATIONSHIP, UploadPersonaImageResponse, UPLOAD_PERSONA_IMAGE, CreatePersonaRequestBody, CreatePersonaResponse, CREATE_PERSONA, UpdatePersonaRequestBody, UpdatePersonaResponse, UPDATE_PERSONA, DeletePersonaRequestBody, DeletePersonaResponse, DELETE_PERSONA, ListPersonasRequestBody, ListPersonasResponse, LIST_PERSONAS, GetPersonaRequestBody, GetPersonaResponse, GET_PERSONA, RefreshUserSessionRequestBody, RefreshUserSessionResponse, REFRESH_USER_SESSION } from './interface';

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

export function uploadAvatar(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadAvatarResponse> {
  return client.send({
    descriptor: UPLOAD_AVATAR,
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

export function deleteUser(
  client: WebServiceClientInterface,
  body: DeleteUserRequestBody,
): Promise<DeleteUserResponse> {
  return client.send({
    descriptor: DELETE_USER,
    body,
  });
}

export function getUserProfile(
  client: WebServiceClientInterface,
  body: GetUserProfileRequestBody,
): Promise<GetUserProfileResponse> {
  return client.send({
    descriptor: GET_USER_PROFILE,
    body,
  });
}

export function getUserInfoCard(
  client: WebServiceClientInterface,
  body: GetUserInfoCardRequestBody,
): Promise<GetUserInfoCardResponse> {
  return client.send({
    descriptor: GET_USER_INFO_CARD,
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

export function uploadPersonaImage(
  client: WebServiceClientInterface,
  body: Blob,
): Promise<UploadPersonaImageResponse> {
  return client.send({
    descriptor: UPLOAD_PERSONA_IMAGE,
    body,
  });
}

export function createPersona(
  client: WebServiceClientInterface,
  body: CreatePersonaRequestBody,
): Promise<CreatePersonaResponse> {
  return client.send({
    descriptor: CREATE_PERSONA,
    body,
  });
}

export function updatePersona(
  client: WebServiceClientInterface,
  body: UpdatePersonaRequestBody,
): Promise<UpdatePersonaResponse> {
  return client.send({
    descriptor: UPDATE_PERSONA,
    body,
  });
}

export function deletePersona(
  client: WebServiceClientInterface,
  body: DeletePersonaRequestBody,
): Promise<DeletePersonaResponse> {
  return client.send({
    descriptor: DELETE_PERSONA,
    body,
  });
}

export function listPersonas(
  client: WebServiceClientInterface,
  body: ListPersonasRequestBody,
): Promise<ListPersonasResponse> {
  return client.send({
    descriptor: LIST_PERSONAS,
    body,
  });
}

export function getPersona(
  client: WebServiceClientInterface,
  body: GetPersonaRequestBody,
): Promise<GetPersonaResponse> {
  return client.send({
    descriptor: GET_PERSONA,
    body,
  });
}

export function refreshUserSession(
  client: WebServiceClientInterface,
  body: RefreshUserSessionRequestBody,
): Promise<RefreshUserSessionResponse> {
  return client.send({
    descriptor: REFRESH_USER_SESSION,
    body,
  });
}
