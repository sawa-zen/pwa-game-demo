import { combineReducers } from 'redux';
import appReducer from './appReducer';
import meteorEmitterReducer from '../meteorEmitter/meteorEmitterReducer';
import playerReducer from '../player/playerReducer';

const reducers = combineReducers({
  app: appReducer,
  meteorEmitter: meteorEmitterReducer,
  player: playerReducer,
});
export default reducers;
