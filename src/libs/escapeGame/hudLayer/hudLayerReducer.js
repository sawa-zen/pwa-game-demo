import {
  SET_STICK_DATA,
  RESET_STICK_DATA,
} from './hudLayerAction';

const INIT_STICK_DATA = {
  x: 0,
  y: 0,
  length: 0,
  angle: 0,
};

const initState = {
  stickData: { ...INIT_STICK_DATA },
};

const hudLayerReducer = (state = {}, action) => {
  switch (action.typs) {
    case SET_STICK_DATA:
      return {
        ...state,
        stickData: action.payload,
      };
    case RESET_STICK_DATA:
      return {
        ...state,
        stickData: { ...INIT_STICK_DATA },
      };
    default:
      return state;
  }
};

export default hudLayerReducer;
