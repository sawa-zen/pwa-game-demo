import { Vector2 } from 'three';
import {
  DECREMENT_LIFEPOINT,
  UPDATE_PLAYER,
  SET_DIRECTION,
} from './playerAction';

const initState = {
  lifepoint: 10,
  velocity: new Vector2(0, 0),
  position: new Vector2(0, -8),
};

const playerReducer = (state = initState, action) => {
  switch (action.type) {
    case DECREMENT_LIFEPOINT:
      return {
        ...state,
        lifepoint: state.lifepoint--,
      };
    case SET_DIRECTION:
      return {
        ...state,
        velocity: action.payload.multiplyScalar(0.3),
      };
    case UPDATE_PLAYER:
      return {
        ...state,
        position: state.position.clone().add(state.velocity),
      };
    default:
      return state;
  }
};

export default playerReducer;
