import { ActionType, action } from 'typesafe-actions';
import {
  SET_GLOBAL_LOADING,
} from './comm.actionTypes';

export const setGlobalLoadingActionCreator = (loading: boolean | null) =>
  action(SET_GLOBAL_LOADING, loading);

const actions = {
  setGlobalLoadingActionCreator,
};

export type CommonActions = ActionType<typeof actions>;
