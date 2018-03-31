import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { REQUEST_CHECK_COLLISION } from './gameLayerAction';
import { setStatus, setLifepoint } from './player/playerAction';
import store from '../store';

function* runRequestCheckCollision() {
  const state = store.getState();
  const { player } = state;
  const { meteors } = state.meteorEmitter;
  let isCollision = false;

  // playerが既にやられていれば処理しない
  if (player.status !== 'normal') {
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

  if (newLifepoint <= 0) {
    yield put(setStatus('destroyed'));
    yield put(setLifepoint(newLifepoint));
    return;
  }

  // 2秒間無敵状態
  yield put(setStatus('damage'));
  yield delay(500);
  yield put(setStatus('invincible'));
  yield put(setLifepoint(newLifepoint));
  yield delay(1500);
  yield put(setStatus('normal'));
}

export default function* gameLayerSaga() {
  yield takeEvery(REQUEST_CHECK_COLLISION, runRequestCheckCollision);
}