import {
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  setScene,
  REQUEST_CHECK_COLLISION,
} from './appAction';
import store from './store';

function* runRequestCheckCollision() {
  const state = store.getState();
  const { player } = state;
  const { meteors } = state.meteorEmitter;
  let isCollision = false;

  meteors.forEach((meteor) => {
    const distance = player.position.distanceTo(meteor.position);
    if (distance < 3) {
      isCollision = true;
    }
  });

  if (isCollision) {
    yield put(setScene('score'));
  }
}

export default function* appSaga() {
  yield takeEvery(REQUEST_CHECK_COLLISION, runRequestCheckCollision);
}
