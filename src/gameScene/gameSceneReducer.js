import {
  SET_ON_LEFT,
  SET_OFF_LEFT,
  SET_ON_RIGHT,
  SET_OFF_RIGHT,
} from './gameSceneAction';

const initState = {
  isOnLeft: false,
  isOnRight: false,
};

const gameSceneReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ON_LEFT:
      return {
        ...state,
        isOnLeft: true,
      };
    case SET_OFF_LEFT:
      return {
        ...state,
        isOnLeft: false,
      };
    case SET_ON_RIGHT:
      return {
        ...state,
        isOnRight: true,
      };
    case SET_OFF_RIGHT:
      return {
        ...state,
        isOnRight: false,
      };
    default:
      return state;
  }
};

export default gameSceneReducer;
