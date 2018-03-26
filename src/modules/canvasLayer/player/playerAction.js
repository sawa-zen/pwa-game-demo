export const DECREMENT_LIFEPOINT = 'DECREMENT_LIFEPOINT';
export const decrementLifepoint = () => ({
  type: DECREMENT_LIFEPOINT,
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
