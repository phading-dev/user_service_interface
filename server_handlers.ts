import { ServiceHandlerInterface } from '@selfage/service_descriptor/service_handler_interface';
import { SIGN_UP, SignUpRequestBody, SignUpResponse, SIGN_IN, SignInRequestBody, SignInResponse, UPDATE_PASSWORD, UpdatePasswordRequestBody, UpdatePasswordResponse, CREATE_USER, CreateUserRequestBody, CreateUserResponse, SWITCH_USER, SwitchUserRequestBody, SwitchUserResponse, RENEW_SESSION, RenewSessionRequestBody, RenewSessionResponse, LIST_USERS, ListUsersRequestBody, ListUsersResponse, UPLOAD_AVATAR, UploadAvatarResponse, GET_USER, GetUserRequestBody, GetUserResponse, GET_USER_CARD, GetUserCardRequestBody, GetUserCardResponse, SET_USER_RELATIONSHIP, SetUserRelationshipRequestBody, SetUserRelationshipResponse } from './interface';
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

export abstract class ListUsersHandlerInterface implements ServiceHandlerInterface {
  public descriptor = LIST_USERS;
  public abstract handle(
    requestId: string,
    body: ListUsersRequestBody,
    auth: UserSession,
  ): Promise<ListUsersResponse>;
}

export abstract class UploadAvatarHandlerInterface implements ServiceHandlerInterface {
  public descriptor = UPLOAD_AVATAR;
  public abstract handle(
    requestId: string,
    body: Readable,
    auth: UserSession,
  ): Promise<UploadAvatarResponse>;
}

export abstract class GetUserHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER;
  public abstract handle(
    requestId: string,
    body: GetUserRequestBody,
    auth: UserSession,
  ): Promise<GetUserResponse>;
}

export abstract class GetUserCardHandlerInterface implements ServiceHandlerInterface {
  public descriptor = GET_USER_CARD;
  public abstract handle(
    requestId: string,
    body: GetUserCardRequestBody,
    auth: UserSession,
  ): Promise<GetUserCardResponse>;
}

export abstract class SetUserRelationshipHandlerInterface implements ServiceHandlerInterface {
  public descriptor = SET_USER_RELATIONSHIP;
  public abstract handle(
    requestId: string,
    body: SetUserRelationshipRequestBody,
    auth: UserSession,
  ): Promise<SetUserRelationshipResponse>;
}
