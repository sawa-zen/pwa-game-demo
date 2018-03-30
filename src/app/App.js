import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import TopScene from '../topScene/TopScene';
import GameScene from '../gameScene/GameScene';
import ScoreScene from '../scoreScene/ScoreScene';
import CanvasLayer from '../modules/canvasLayer';
import { setScene } from './appAction';

const renderScene = (scene) => {
  switch (scene) {
    case 'game': return <GameScene />;
    case 'score': return <ScoreScene />;
    case 'start':
    default: return <TopScene />;
  }
};

const App = pure((props) => (
  <div>
    <CanvasLayer
      scene={props.scene}
      onDestroyed={props.onDestroyed}
    />
    { renderScene(props.scene) }
  </div>
));
App.defaultProps = {
  scene: 'start',
};

const mapStateToProps = (state) => ({
  scene: state.app.scene,
});

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
    dispatch(setScene('score'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
