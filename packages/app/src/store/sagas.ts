import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { watchAuthSagas } from './auth/auth.saga';

export function* rootSaga(): SagaIterator {
  yield fork(watchAuthSagas);
}
