import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { REQUEST_CHECK_COLLISION } from './gameLayerAction';
import { setStatus, setLifepoint } from './player/playerAction';
import { stopTimer } from '../hudLayer/timer/timerAction';
import store from '../store';
import EscapeGame from '../index';

function* runRequestCheckCollision() {
  const state = store.getState();
  const { player, timer } = state;
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

  const newLifepoint = player.lifePoint - 1;

  if (newLifepoint <= 0) {
    yield put(setStatus('destroyed'));
    yield put(setLifepoint(newLifepoint));
    yield put(stopTimer());
    EscapeGame.instance.emitPublicEvent('destroyed', timer.time);
    return;
  }

  // 2秒間無敵状態
  yield put(setLifepoint(newLifepoint));
  yield put(setStatus('damage'));
  yield delay(500);
  yield put(setStatus('invincible'));
  yield delay(1500);
  yield put(setStatus('normal'));
}

export default function* gameLayerSaga() {
  yield takeEvery(REQUEST_CHECK_COLLISION, runRequestCheckCollision);
}
