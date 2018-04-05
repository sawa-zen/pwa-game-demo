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
  lifePoint: 3,
  maxLifePoint: 3,
  velocity: new Vector2(0, 0),
  position: INIT_POSITION,
};

const getNewPosition = () => {
  const state = store.getState();
  const { position, velocity } = state.player;
  const newPosition = position.clone().add(velocity);
  const MIN_X = -12,
        MAX_X = 12,
        MIN_Y = -20,
        MAX_Y = 20;

  if (newPosition.x < MIN_X) {
    newPosition.x = MIN_X;
  }

  if (newPosition.x > MAX_X) {
    newPosition.x = MAX_X;
  }

  if (newPosition.y < MIN_Y) {
    newPosition.y = MIN_Y;
  }

  if (newPosition.y > MAX_Y) {
    newPosition.y = MAX_Y;
  }

  return newPosition;
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
        lifePoint: action.payload,
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
