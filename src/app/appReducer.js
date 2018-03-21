import { SET_SCENE } from './appAction';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SCENE:
      return {
        ...state,
        scene: action.payload,
      };
    default: return state;
  }
};

export default appReducer;
