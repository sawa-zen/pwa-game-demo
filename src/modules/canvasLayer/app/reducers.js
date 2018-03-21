import { combineReducers } from 'redux';
import meteorEmitterReducer from '../meteorEmitter/meteorEmitterReducer';
import playerReducer from '../player/playerReducer';

const reducers = combineReducers({
  meteorEmitter: meteorEmitterReducer,
  player: playerReducer,
});
export default reducers;
