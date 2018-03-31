import { Vector2 } from 'three';
import {
  SET_STATUS,
  SET_LIFEPOINT,
  UPDATE_PLAYER,
  SET_DIRECTION,
  RESET_PLAYER,
} from './playerAction';
import store from '../../store';

const INIT_POSITION = new Vector2(0, -8);

const initState = {
  status: 'normal',
  lifepoint: 3,
  maxLifePoint: 3,
  velocity: new Vector2(0, 0),
  position: INIT_POSITION,
};

const getNewPosition = () => {
  const state = store.getState();
  const { position, velocity } = state.player;
  return position.clone().add(velocity);
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_LIFEPOINT:
      return {
        ...state,
        lifepoint: action.payload,
      };
    case SET_DIRECTION:
      return {
        ...state,
        velocity: action.payload.normalize().multiplyScalar(0.3),
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        position: getNewPosition(),
      };
    case RESET_PLAYER:
      return {
        ...initState,
      };
    default:
      return state;
  }
};

export default playerReducer;
