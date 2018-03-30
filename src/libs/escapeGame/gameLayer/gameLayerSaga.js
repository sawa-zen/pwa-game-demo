import { put, takeEvery } from 'redux-saga/effects';
import { REQUEST_CHECK_COLLISION } from './gameLayerAction';
import { setLifepoint } from '../player/playerAction';
import store from '../store';

function* runRequestCheckCollision() {
  const state = store.getState();
  const { player } = state;
  const { meteors } = state.meteorEmitter;
  let isCollision = false;

  // playerが既にやられていれば処理しない
  if (player.lifepoint <= 0) {
    return;
  }

  meteors.forEach((meteor) => {
    const distance = player.position.distanceTo(meteor.position);
    if (distance < 3) {
      isCollision = true;
    }
  });

  if (!isCollision) {
    return;
  }

  const newLifepoint = player.lifepoint - 1;
  yield put(setLifepoint(newLifepoint));

  if (newLifepoint <= 0) {
    yield put(setScene('score'));
    App.instance.emit('changeScene', 'score');
  }
}

export default function* appSaga() {
  yield takeEvery(REQUEST_CHECK_COLLISION, runRequestCheckCollision);
}
