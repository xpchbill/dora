import { SagaIterator } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { push, replace } from 'connected-react-router';
import {
  FETCH_TOKEN, FETCH_USER, SIGN_OUT
} from './auth.actionTypes';
import { login, getAuthUser, logout } from '../../api';
import {
  fetchTokenActionCreator,
  setTokenActionCreator,
  setAuthUserActionCreator,
  setAuthLoadingActionCreator,
  setSigninValuesActionCreator,
  setSignOutValuesActionCreator,
} from './auth.actions';
import {
  setGlobalLoadingActionCreator,
} from '../common/comm.actions';

import { setToken, clearToken } from '../../utils';

export function* fetchTokenSaga(
  action: ReturnType<typeof fetchTokenActionCreator>,
): SagaIterator {
  try {
    const { username, password, rememberMe } = action.payload;

    yield put(setSigninValuesActionCreator(action.payload));
    yield put(setAuthLoadingActionCreator(true));
    const [data] = yield call(login, username, password);
    const { token } = data;
    setToken(token, rememberMe);
    yield put(setTokenActionCreator(token));
    yield put(setAuthLoadingActionCreator(false));
  } catch (error) {
    console.log('Error while fetching token', { error });
    yield put(setTokenActionCreator(null));
    yield put(setAuthUserActionCreator(null));
    yield put(setAuthLoadingActionCreator(false));
    clearToken();
  }
}

export function* fetchAuthUserSaga(): SagaIterator {
  try {
    yield put(setAuthLoadingActionCreator(true));
    const [data] = yield call(getAuthUser);
    const user = data.user;

    yield put(setAuthLoadingActionCreator(false));
    yield put(
      setAuthUserActionCreator(
        user?.username
          ? {
              username: user.username,
              email: user.email,
            }
          : null,
      ),
    );
    if (user) {
      yield put(
        replace({
          pathname: '/',
        }),
      );
    }
  } catch (error) {
    console.log('Error while fetching login user', { error });
    yield put(setTokenActionCreator(null));
    yield put(setAuthUserActionCreator(null));
    yield put(setAuthLoadingActionCreator(false));
    clearToken();
  }
}

export function* signOutSaga(): SagaIterator {
  try {
    yield put(setGlobalLoadingActionCreator(true));
    yield call(logout);
    yield put(setGlobalLoadingActionCreator(false));
    yield put(setSignOutValuesActionCreator());
    clearToken();
    yield put(
      push({
        pathname: '/',
      }),
    );
  } catch (error) {
    console.log('Error while logout', { error });
    yield put(setTokenActionCreator(null));
    yield put(setAuthUserActionCreator(null));
    yield put(setGlobalLoadingActionCreator(false));
    clearToken();
  }
}

export function* watchAuthSagas() {
  yield takeLatest(FETCH_TOKEN, fetchTokenSaga);
  yield takeLatest(FETCH_USER, fetchAuthUserSaga);
  yield takeLatest(SIGN_OUT, signOutSaga);
}

export default watchAuthSagas;
