import { SET_USER, FETCH_USER } from './user.actionTypes';
import { User } from '../../types';
import { ActionType, action } from 'typesafe-actions';

export const setUserActionCreator = (user: User | null) =>
  action(SET_USER, user);

export const fetchUserActionCreator = (value?: {
  shouldRedirect: boolean;
  user: User;
}) => action(FETCH_USER, value);

const actions = {
  setUserActionCreator,
  fetchUserActionCreator,
};

export type UserActions = ActionType<typeof actions>;
