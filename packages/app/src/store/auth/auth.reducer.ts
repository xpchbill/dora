import { updateObject } from '../utility';
import { Token, User } from '../../types';
import { createReducer } from 'typesafe-actions';
import { AuthActions } from './auth.actions';
import { getToken } from '../../utils';
import { SignInValues } from '../../modules/auth';

export interface AuthState extends SignInValues {
  token: Token | null;
  user: User | null;
  loading: boolean;
}

export const initialAuthState: AuthState = {
  token: getToken(),
  user: null,
  loading: false,
  username: '',
  password: '',
  rememberMe: false,
};

export const authReducer = createReducer<AuthState, AuthActions>(
  initialAuthState,
  {
    SET_TOKEN: (state, { payload }) =>
      updateObject(state, {
        token: payload,
      }),
    SET_USER: (state, { payload }) =>
      updateObject(state, {
        user: payload,
      }),
    SET_LOADING: (state, { payload }) =>
      updateObject(state, {
        loading: payload,
      }),
    SET_SIGNIN_VALUES: (state, { payload }) =>
      updateObject(state, {
        username: payload.username,
        password: payload.password,
        rememberMe: payload.rememberMe,
      }),
    SET_SIGN_OUT_VALUES: (state) =>
      updateObject(state, {
        token: null,
        user: null,
        loading: false,
        username: '',
        password: '',
        rememberMe: false,
      }),
  },
);
