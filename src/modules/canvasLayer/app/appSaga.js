import {
  put,
  takeEvery,
} from 'redux-saga/effects';
import {
  setScene,
  REQUEST_SET_SCENE,
  REQUEST_CHECK_COLLISION,
} from './appAction';
import { setLifepoint } from '../player/playerAction';
import App from './App';
import store from './store';

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

function* runRequestSetScene(action) {
  yield put(setScene(action.payload));
}

export default function* appSaga() {
  yield takeEvery(REQUEST_CHECK_COLLISION, runRequestCheckCollision);
  yield takeEvery(REQUEST_SET_SCENE, runRequestSetScene);
}
