import { fork } from 'redux-saga/effects';
import gameLayerSaga from './gameLayer/gameLayerSaga';

export default function* rootSaga() {
  yield fork(gameLayerSaga);
}
