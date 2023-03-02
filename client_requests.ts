import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, GetUserInfoRequestBody, GetUserInfoResponse, GET_USER_INFO, UploadAvatarResponse, UPLOAD_AVATAR, GetUserInfoCardRequestBody, GetUserInfoCardResponse, GET_USER_INFO_CARD, SetUserRelationshipRequestBody, SetUserRelationshipResponse, SET_USER_RELATIONSHIP } from './interface';

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

export function getUserInfo(
  client: WebServiceClientInterface,
  body: GetUserInfoRequestBody,
): Promise<GetUserInfoResponse> {
  return client.send({
    descriptor: GET_USER_INFO,
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
