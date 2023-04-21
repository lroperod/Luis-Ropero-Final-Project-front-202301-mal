import { APIStatus } from '../../shared/models/api-status';

export interface User {
  email: string;
  password: string;
}
export interface UserToken {
  msg: string;
  accessToken: string;
  userId: string;
}

export interface UserStatus {
  status: APIStatus;
  loginStatus: 'loading' | 'success' | 'error' | 'idle';
  loginMessage: string | undefined;
}
export type AuthUser = Pick<User, 'email' | 'password'>;
