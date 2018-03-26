import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import StartScene from '../startScene/StartScene';
import GameScene from '../gameScene/GameScene';
import ScoreScene from '../scoreScene/ScoreScene';
import CanvasLayer from '../modules/canvasLayer';

const renderScene = (scene) => {
  switch (scene) {
    case 'game': return <GameScene />;
    case 'score': return <ScoreScene />;
    case 'start':
    default: return <StartScene />;
  }
};

const App = pure((props) => (
  <div>
    <CanvasLayer
      scene={props.scene}
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

export default connect(mapStateToProps)(App);
