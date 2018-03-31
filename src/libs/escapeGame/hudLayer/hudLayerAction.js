export const SET_STICK_DATA = 'SET_STICK_DATA';
export const setStickData = (stickData) => ({
  type: SET_STICK_DATA,
  payload: stickData,
});

export const RESET_STICK_DATA = 'RESET_STICK_DATA';
export const resetStickData = () => ({
  type: RESET_STICK_DATA,
});
