import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, GET_AUTH_SETTINGS, GetAuthSettingsRequestBody, GetAuthSettingsResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, UPDATE_USERNAME, UpdateUsernameRequestBody, UpdateUsernameResponse, UPDATE_RECOVERY_EMAIL, UpdateRecoveryEmailRequestBody, UpdateRecoveryEmailResponse, CREATE_ACCOUNT, CreateAccountRequestBody, CreateAccountResponse, SWITCH_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, GET_ACCOUNT_TYPE, GetAccountTypeRequestBody, GetAccountTypeResponse, LIST_OWNED_ACCOUNTS, ListOwnedAccountsRequestBody, ListOwnedAccountsResponse, UPDATE_NATURAL_NAME, UpdateNaturalNameRequestBody, UpdateNaturalNameResponse, UPDATE_CONTACT_EMAIL, UpdateContactEmailRequestBody, UpdateContactEmailResponse, UPDATE_DESCRIPTION, UpdateDescriptionRequestBody, UpdateDescriptionResponse, UPLOAD_AVATAR, UploadAvatarResponse, GET_SUBJECT_ACCOUNT, GetSubjectAccountRequestBody, GetSubjectAccountResponse, GET_OBJECT_ACCOUNT, GetObjectAccountRequestBody, GetObjectAccountResponse, SET_OBJECT_ACCOUNT_RELATIONSHIP, SetObjectAccountRelationshipRequestBody, SetObjectAccountRelationshipResponse } from './interface';
import { WebClientSession } from '@phading/user_session_service_interface/web_client_session';
import { Readable } from 'stream';

export abstract class SignUpHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_UP;
  public abstract handle(
    requestId: string,
    body: SignUpRequestBody,
  ): Promise<SignUpResponse>;
}

export abstract class SignInHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SIGN_IN;
  public abstract handle(
    requestId: string,
    body: SignInRequestBody,
  ): Promise<SignInResponse>;
}

export abstract class GetAuthSettingsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_AUTH_SETTINGS;
  public abstract handle(
    requestId: string,
    body: GetAuthSettingsRequestBody,
    auth: WebClientSession,
  ): Promise<GetAuthSettingsResponse>;
}

export abstract class UpdatePasswordHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    requestId: string,
    body: UpdatePasswordRequestBody,
    auth: WebClientSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class UpdateUsernameHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_USERNAME;
  public abstract handle(
    requestId: string,
    body: UpdateUsernameRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateUsernameResponse>;
}

export abstract class UpdateRecoveryEmailHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_RECOVERY_EMAIL;
  public abstract handle(
    requestId: string,
    body: UpdateRecoveryEmailRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateRecoveryEmailResponse>;
}

export abstract class CreateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: CreateAccountRequestBody,
    auth: WebClientSession,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: SwitchAccountRequestBody,
    auth: WebClientSession,
  ): Promise<SwitchAccountResponse>;
}

export abstract class GetAccountTypeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_TYPE;
  public abstract handle(
    requestId: string,
    body: GetAccountTypeRequestBody,
    auth: WebClientSession,
  ): Promise<GetAccountTypeResponse>;
}

export abstract class ListOwnedAccountsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_OWNED_ACCOUNTS;
  public abstract handle(
    requestId: string,
    body: ListOwnedAccountsRequestBody,
    auth: WebClientSession,
  ): Promise<ListOwnedAccountsResponse>;
}

export abstract class UpdateNaturalNameHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_NATURAL_NAME;
  public abstract handle(
    requestId: string,
    body: UpdateNaturalNameRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateNaturalNameResponse>;
}

export abstract class UpdateContactEmailHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_CONTACT_EMAIL;
  public abstract handle(
    requestId: string,
    body: UpdateContactEmailRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateContactEmailResponse>;
}

export abstract class UpdateDescriptionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_DESCRIPTION;
  public abstract handle(
    requestId: string,
    body: UpdateDescriptionRequestBody,
    auth: WebClientSession,
  ): Promise<UpdateDescriptionResponse>;
}

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: WebClientSession,
  ): Promise<UploadAvatarResponse>;
}

export abstract class GetSubjectAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SUBJECT_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetSubjectAccountRequestBody,
    auth: WebClientSession,
  ): Promise<GetSubjectAccountResponse>;
}

export abstract class GetObjectAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_OBJECT_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetObjectAccountRequestBody,
    auth: WebClientSession,
  ): Promise<GetObjectAccountResponse>;
}

export abstract class SetObjectAccountRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_OBJECT_ACCOUNT_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetObjectAccountRelationshipRequestBody,
    auth: WebClientSession,
  ): Promise<SetObjectAccountRelationshipResponse>;
}
