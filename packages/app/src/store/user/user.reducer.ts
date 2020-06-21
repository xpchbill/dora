import { updateObject } from '../utility';
import { User } from '../../types';
import { createReducer } from 'typesafe-actions';
import { UserActions } from './user.actions';

export interface UserState {
  user: User | null;
}

export const initialUserState: UserState = {
  user: null,
};

export const userReducer = createReducer<UserState, UserActions>(
  initialUserState,
  {
    SET_USER: (state, action) =>
      updateObject(state, {
        user: action.payload,
      }),
  },
);
