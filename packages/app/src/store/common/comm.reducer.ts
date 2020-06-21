import { updateObject } from '../utility';
import { Token, User } from '../../types';
import { createReducer } from 'typesafe-actions';
import { CommonActions } from './comm.actions';
import { getToken } from '../../utils';
import { SignInValues } from '../../modules/auth';

export interface CommonState extends SignInValues {
  loading: boolean;
}

export const initialCommonState: CommonState = {
  loading: false,
};

export const commonReducer = createReducer<CommonState, CommonActions>(
  initialCommonState,
  {
    SET_GLOBAL_LOADING: (state, { payload }) =>
      updateObject(state, {
        loading: payload,
      }),
  },
);
