import { combineReducers } from 'redux';
import meteorEmitterReducer from './gameLayer/meteorEmitter/meteorEmitterReducer';
import playerReducer from './gameLayer/player/playerReducer';

const reducers = combineReducers({
  meteorEmitter: meteorEmitterReducer,
  player: playerReducer,
});

export default reducers;
