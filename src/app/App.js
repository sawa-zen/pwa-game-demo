import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import StartScene from '../startScene/StartScene';
import GameScene from '../gameScene/GameScene';
import ScoreScene from '../scoreScene/ScoreScene';
import CanvasLayer from '../modules/canvasLayer';
import { setScene } from './appAction';

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
      direction={props.direction}
      onChangeScene={props.onChangeScene}
    />
    { renderScene(props.scene) }
  </div>
));
App.defaultProps = {
  scene: 'start',
};

const mapStateToProps = (state) => ({
  scene: state.app.scene,
  direction: (() => {
    const { isOnLeft, isOnRight } = state.gameScene;
    if (isOnLeft && !isOnRight) {
      // 左キーだけ押されていた時
      return [-1, 0];
    } else if (!isOnLeft && isOnRight) {
      // 右キーだけ押されていた時
      return [1, 0]
    }

    // それ以外
    return [0, 0]
  })(),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeScene: (scene) => {
    dispatch(setScene(scene));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
