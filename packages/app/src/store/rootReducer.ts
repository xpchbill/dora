import { combineReducers } from 'redux';
import { authReducer, AuthState } from './auth';
import { userReducer, UserState } from './user';
import { commonReducer, CommonState } from './common';
import { connectRouter } from 'connected-react-router';

export interface RootState {
  common: CommonState;
  auth: AuthState;
  user: UserState;
  isLoading: boolean;
}

/**
 * https://github.com/ReactTraining/history/issues/805
 * history.push() stopped working after upgrading to v5,
 * so downgrade to 4.10.1
 * TODO: Upgride to V5 once the issue fixed.
 */
export const appReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    common: commonReducer,
    auth: authReducer,
    user: userReducer,
  });
