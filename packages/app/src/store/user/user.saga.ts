import { SagaIterator } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { FETCH_USER } from './user.actionTypes';
import { getUser } from '../../api';
import { setUserActionCreator, fetchUserActionCreator } from './user.actions';
import { push } from 'connected-react-router';

export function* fetchUser(
  action: ReturnType<typeof fetchUserActionCreator>,
): SagaIterator {
  try {
  } catch (error) {}
}

function* latestActionsSaga() {
  yield takeLatest(FETCH_USER, fetchUser);
}

export default latestActionsSaga;
