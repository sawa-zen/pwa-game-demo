import { combineReducers } from 'redux';
import meteorEmitterReducer from './gameLayer/meteorEmitter/meteorEmitterReducer';
import playerReducer from './gameLayer/player/playerReducer';
import hudLayerReducer from './hudLayer/hudLayerReducer';

const reducers = combineReducers({
  meteorEmitter: meteorEmitterReducer,
  player: playerReducer,
  hudLayer: hudLayerReducer,
});

export default reducers;
