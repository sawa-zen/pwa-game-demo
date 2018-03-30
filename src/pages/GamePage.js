import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Page from '../components/Page';
import EscapeGame from '../libs/escapeGame';

class GameLayer extends React.Component {
  static WRAPPER_ID = 'game-wrapper';

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.game = new EscapeGame(GameLayer.WRAPPER_ID);
    this.game.on('destroyed', this.props.onDestroyed);
  }

  render() {
    return (
      <Page id={GameLayer.WRAPPER_ID} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
  },
});

export default connect(null, mapDispatchToProps)(GameLayer);
