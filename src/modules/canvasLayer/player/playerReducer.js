import { Vector2 } from 'three';
import {
  SET_LIFEPOINT,
  UPDATE_PLAYER,
  SET_DIRECTION,
} from './playerAction';
import store from '../app/store';

const INIT_POSITION = new Vector2(0, -8);

const initState = {
  lifepoint: 10,
  velocity: new Vector2(0, 0),
  position: new Vector2(0, -8),
};

const getNewPosition = () => {
  const state = store.getState();
  const { scene } = state.app;
  const { position, velocity } = state.player;
  switch (scene) {
    case 'start':
      return INIT_POSITION;
    case 'game':
      return position.clone().add(velocity);
  }
  return;
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LIFEPOINT:
      return {
        ...state,
        lifepoint: action.payload,
      };
    case SET_DIRECTION:
      return {
        ...state,
        velocity: action.payload.multiplyScalar(0.3),
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        position: getNewPosition(),
      };
    default:
      return state;
  }
};

export default playerReducer;
