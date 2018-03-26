export const SET_SCENE = 'SET_SCENE';
export const setScene = (payload) => ({
  type: SET_SCENE,
  payload,
});

export const REQUEST_CHECK_COLLISION = 'REQUEST_CHECK_COLLISION';
export const requestCheckCollision = () => ({
  type: REQUEST_CHECK_COLLISION,
});
