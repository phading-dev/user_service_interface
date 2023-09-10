import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, CREATE_USER, CreateUserRequestBody, CreateUserResponse, SWITCH_USER, SwitchUserRequestBody, SwitchUserResponse, RENEW_SESSION, RenewSessionRequestBody, RenewSessionResponse, GET_USER_TYPE, GetUserTypeRequestBody, GetUserTypeResponse, LIST_OWNED_USERS, ListOwnedUsersRequestBody, ListOwnedUsersResponse, UPLOAD_AVATAR, UploadAvatarResponse, GET_SUBJECT_USER, GetSubjectUserRequestBody, GetSubjectUserResponse, GET_OBJECT_USER, GetObjectUserRequestBody, GetObjectUserResponse, SET_OBJECT_USER_RELATIONSHIP, SetObjectUserRelationshipRequestBody, SetObjectUserRelationshipResponse } from './interface';
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

export abstract class CreateUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = CREATE_USER;
  public abstract handle(
    requestId: string,
    body: CreateUserRequestBody,
    auth: UserSession,
  ): Promise<CreateUserResponse>;
}

export abstract class SwitchUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SWITCH_USER;
  public abstract handle(
    requestId: string,
    body: SwitchUserRequestBody,
    auth: UserSession,
  ): Promise<SwitchUserResponse>;
}

export abstract class RenewSessionHandlerInterface implements ServiceHandlerInterface {
  public descriptor = RENEW_SESSION;
  public abstract handle(
    requestId: string,
    body: RenewSessionRequestBody,
    auth: UserSession,
  ): Promise<RenewSessionResponse>;
}

export abstract class GetUserTypeHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER_TYPE;
  public abstract handle(
    requestId: string,
    body: GetUserTypeRequestBody,
    auth: UserSession,
  ): Promise<GetUserTypeResponse>;
}

export abstract class ListOwnedUsersHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_OWNED_USERS;
  public abstract handle(
    requestId: string,
    body: ListOwnedUsersRequestBody,
    auth: UserSession,
  ): Promise<ListOwnedUsersResponse>;
}

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadAvatarResponse>;
}

export abstract class GetSubjectUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_SUBJECT_USER;
  public abstract handle(
    requestId: string,
    body: GetSubjectUserRequestBody,
    auth: UserSession,
  ): Promise<GetSubjectUserResponse>;
}

export abstract class GetObjectUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_OBJECT_USER;
  public abstract handle(
    requestId: string,
    body: GetObjectUserRequestBody,
    auth: UserSession,
  ): Promise<GetObjectUserResponse>;
}

export abstract class SetObjectUserRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_OBJECT_USER_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetObjectUserRelationshipRequestBody,
    auth: UserSession,
  ): Promise<SetObjectUserRelationshipResponse>;
}
