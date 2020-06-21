import { ActionType, action } from 'typesafe-actions';
import {
  SET_TOKEN,
  FETCH_TOKEN,
  SET_USER,
  FETCH_USER,
  SET_LOADING,
  SET_SIGNIN_VALUES,
  SIGN_OUT,
  SET_SIGN_OUT_VALUES,
} from './auth.actionTypes';
import { Token, User } from '../../types';
import { SignInValues } from '../../modules/auth';

export const setTokenActionCreator = (token: Token | null) =>
  action(SET_TOKEN, token);

export const fetchTokenActionCreator = (
  username?: string,
  password?: string,
  rememberMe?: boolean,
) => action(FETCH_TOKEN, { username, password, rememberMe });

export const setAuthUserActionCreator = (user: User | null) =>
  action(SET_USER, user);

export const fetchAuthUserActionCreator = () => action(FETCH_USER);

export const setAuthLoadingActionCreator = (loading: boolean | null) =>
  action(SET_LOADING, loading);

export const setSigninValuesActionCreator = (values: SignInValues) =>
  action(SET_SIGNIN_VALUES, values);

export const signOutActionCreator = () =>
  action(SIGN_OUT);

export const setSignOutValuesActionCreator = () =>
  action(SET_SIGN_OUT_VALUES);

const actions = {
  setTokenActionCreator,
  fetchTokenActionCreator,
  setAuthUserActionCreator,
  fetchAuthUserActionCreator,
  setAuthLoadingActionCreator,
  setSigninValuesActionCreator,
  signOutActionCreator,
  setSignOutValuesActionCreator,
};

export type AuthActions = ActionType<typeof actions>;
