import { UPDATE_TIME } from './timerAction';

const initState = {
  time: 0,
};

const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        time: state.time + 1,
      };
    default:
      return state;
  }
};

export default timerReducer;
