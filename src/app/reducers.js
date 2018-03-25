import { combineReducers } from 'redux';
import appReducer from './appReducer';
import gameSceneReducer from '../gameScene/gameSceneReducer';

const reducers = combineReducers({
  app: appReducer,
  gameScene: gameSceneReducer,
});

export default reducers;
