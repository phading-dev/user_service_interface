import { WebServiceClientInterface } from '@selfage/service_descriptor/web_service_client_interface';
import { SignUpRequestBody, SignUpResponse, SIGN_UP, SignInRequestBody, SignInResponse, SIGN_IN, GetAuthSettingsRequestBody, GetAuthSettingsResponse, GET_AUTH_SETTINGS, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_PASSWORD, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, UPDATE_RECOVERY_EMAIL, CreateAccountRequestBody, CreateAccountResponse, CREATE_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, SWITCH_ACCOUNT, RenewSessionRequestBody, RenewSessionResponse, RENEW_SESSION, GetAccountTypeRequestBody, GetAccountTypeResponse, GET_ACCOUNT_TYPE, ListOwnedAccountsRequestBody, ListOwnedAccountsResponse, LIST_OWNED_ACCOUNTS, UpdateNaturalNameRequestBody, UpdateNaturalNameResponse, UPDATE_NATURAL_NAME, UpdateContactEmailRequestBody, UpdateContactEmailResponse, UPDATE_CONTACT_EMAIL, UpdateDescriptionRequestBody, UpdateDescriptionResponse, UPDATE_DESCRIPTION, UploadAvatarResponse, UPLOAD_AVATAR, GetSubjectAccountRequestBody, GetSubjectAccountResponse, GET_SUBJECT_ACCOUNT, GetObjectAccountRequestBody, GetObjectAccountResponse, GET_OBJECT_ACCOUNT, SetObjectAccountRelationshipRequestBody, SetObjectAccountRelationshipResponse, SET_OBJECT_ACCOUNT_RELATIONSHIP } from './interface';

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

export function getAuthSettings(
  client: WebServiceClientInterface,
  body: GetAuthSettingsRequestBody,
): Promise<GetAuthSettingsResponse> {
  return client.send({
    descriptor: GET_AUTH_SETTINGS,
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

export function updateRecoveryEmail(
  client: WebServiceClientInterface,
  body: UpdateRecoveryEmailRequestBody,
): Promise<UpdateRecoveryEmailResponse> {
  return client.send({
    descriptor: UPDATE_RECOVERY_EMAIL,
    body,
  });
}

export function createAccount(
  client: WebServiceClientInterface,
  body: CreateAccountRequestBody,
): Promise<CreateAccountResponse> {
  return client.send({
    descriptor: CREATE_ACCOUNT,
    body,
  });
}

export function switchAccount(
  client: WebServiceClientInterface,
  body: SwitchAccountRequestBody,
): Promise<SwitchAccountResponse> {
  return client.send({
    descriptor: SWITCH_ACCOUNT,
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

export function getAccountType(
  client: WebServiceClientInterface,
  body: GetAccountTypeRequestBody,
): Promise<GetAccountTypeResponse> {
  return client.send({
    descriptor: GET_ACCOUNT_TYPE,
    body,
  });
}

export function listOwnedAccounts(
  client: WebServiceClientInterface,
  body: ListOwnedAccountsRequestBody,
): Promise<ListOwnedAccountsResponse> {
  return client.send({
    descriptor: LIST_OWNED_ACCOUNTS,
    body,
  });
}

export function updateNaturalName(
  client: WebServiceClientInterface,
  body: UpdateNaturalNameRequestBody,
): Promise<UpdateNaturalNameResponse> {
  return client.send({
    descriptor: UPDATE_NATURAL_NAME,
    body,
  });
}

export function updateContactEmail(
  client: WebServiceClientInterface,
  body: UpdateContactEmailRequestBody,
): Promise<UpdateContactEmailResponse> {
  return client.send({
    descriptor: UPDATE_CONTACT_EMAIL,
    body,
  });
}

export function updateDescription(
  client: WebServiceClientInterface,
  body: UpdateDescriptionRequestBody,
): Promise<UpdateDescriptionResponse> {
  return client.send({
    descriptor: UPDATE_DESCRIPTION,
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

export function getSubjectAccount(
  client: WebServiceClientInterface,
  body: GetSubjectAccountRequestBody,
): Promise<GetSubjectAccountResponse> {
  return client.send({
    descriptor: GET_SUBJECT_ACCOUNT,
    body,
  });
}

export function getObjectAccount(
  client: WebServiceClientInterface,
  body: GetObjectAccountRequestBody,
): Promise<GetObjectAccountResponse> {
  return client.send({
    descriptor: GET_OBJECT_ACCOUNT,
    body,
  });
}

export function setObjectAccountRelationship(
  client: WebServiceClientInterface,
  body: SetObjectAccountRelationshipRequestBody,
): Promise<SetObjectAccountRelationshipResponse> {
  return client.send({
    descriptor: SET_OBJECT_ACCOUNT_RELATIONSHIP,
    body,
  });
}
