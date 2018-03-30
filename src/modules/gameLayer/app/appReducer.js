import store from '../app/store';
import {
  SET_SCENE,
} from './appAction';

const initState = {
  scene: 'start',
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_SCENE:
      return {
        ...state,
        scene: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
