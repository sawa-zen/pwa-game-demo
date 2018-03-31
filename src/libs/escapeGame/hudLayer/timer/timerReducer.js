import {
  UPDATE_TIME,
  RESET_TIME,
  START_TIMER,
  STOP_TIMER,
} from './timerAction';

const initState = {
  status: 'stop',
  time: 0,
};

const updateTime = ({ time, status }) => {
  if (status === 'running') {
    return time + 1;
  }
  return time;
};

const timerReducer = (state = initState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        status: 'running',
      };
    case STOP_TIMER:
      return {
        ...state,
        status: 'stop',
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: updateTime(state),
      };
    case RESET_TIME:
      return {
        ...state,
        time: 0,
        status: 'running',
      };
    default:
      return state;
  }
};

export default timerReducer;
