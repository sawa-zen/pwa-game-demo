export const SET_STATUS = 'SET_STATUS';
export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
});

export const SET_LIFEPOINT = 'SET_LIFEPOINT';
export const setLifepoint = (payload) => ({
  type: SET_LIFEPOINT,
  payload,
});

export const SET_DIRECTION = 'SET_DIRECTION';
export const setDirection = (payload) => ({
  type: SET_DIRECTION,
  payload,
});

export const UPDATE_PLAYER = 'UPDATE_PLAYER';
export const updatePlayer = () => ({
  type: UPDATE_PLAYER,
});

export const RESET_PLAYER = 'RESET_PLAYER';
export const resetPlayer = () => ({
  type: RESET_PLAYER,
});
