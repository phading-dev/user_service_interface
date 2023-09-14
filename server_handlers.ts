import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, CREATE_ACCOUNT, CreateAccountRequestBody, CreateAccountResponse, SWITCH_ACCOUNT, SwitchAccountRequestBody, SwitchAccountResponse, RENEW_SESSION, RenewSessionRequestBody, RenewSessionResponse, GET_ACCOUNT_TYPE, GetAccountTypeRequestBody, GetAccountTypeResponse, LIST_OWNED_ACCOUNTS, ListOwnedAccountsRequestBody, ListOwnedAccountsResponse, UPLOAD_AVATAR, UploadAvatarResponse, GET_SUBJECT_ACCOUNT, GetSubjectAccountRequestBody, GetSubjectAccountResponse, GET_OBJECT_ACCOUNT, GetObjectAccountRequestBody, GetObjectAccountResponse, SET_OBJECT_ACCOUNT_RELATIONSHIP, SetObjectAccountRelationshipRequestBody, SetObjectAccountRelationshipResponse } from './interface';
import { UserSession } from './user_session';
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

export abstract class UpdatePasswordHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPDATE_PASSWORD;
  public abstract handle(
    requestId: string,
    body: UpdatePasswordRequestBody,
    auth: UserSession,
  ): Promise<UpdatePasswordResponse>;
}

export abstract class CreateAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: CreateAccountRequestBody,
    auth: UserSession,
  ): Promise<CreateAccountResponse>;
}

export abstract class SwitchAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SWITCH_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: SwitchAccountRequestBody,
    auth: UserSession,
  ): Promise<SwitchAccountResponse>;
}

export abstract class RenewSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RENEW_SESSION;
  public abstract handle(
    requestId: string,
    body: RenewSessionRequestBody,
    auth: UserSession,
  ): Promise<RenewSessionResponse>;
}

export abstract class GetAccountTypeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_ACCOUNT_TYPE;
  public abstract handle(
    requestId: string,
    body: GetAccountTypeRequestBody,
    auth: UserSession,
  ): Promise<GetAccountTypeResponse>;
}

export abstract class ListOwnedAccountsHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_OWNED_ACCOUNTS;
  public abstract handle(
    requestId: string,
    body: ListOwnedAccountsRequestBody,
    auth: UserSession,
  ): Promise<ListOwnedAccountsResponse>;
}

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadAvatarResponse>;
}

export abstract class GetSubjectAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SUBJECT_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetSubjectAccountRequestBody,
    auth: UserSession,
  ): Promise<GetSubjectAccountResponse>;
}

export abstract class GetObjectAccountHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_OBJECT_ACCOUNT;
  public abstract handle(
    requestId: string,
    body: GetObjectAccountRequestBody,
    auth: UserSession,
  ): Promise<GetObjectAccountResponse>;
}

export abstract class SetObjectAccountRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_OBJECT_ACCOUNT_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetObjectAccountRelationshipRequestBody,
    auth: UserSession,
  ): Promise<SetObjectAccountRelationshipResponse>;
}
