import { UPDATE_PLAYER } from './playerAction';

const playerReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PLAYER:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default playerReducer;
