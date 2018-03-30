import { fork } from 'redux-saga/effects';
import appSaga from './appSaga';

export default function* rootSaga() {
  yield fork(appSaga);
}
