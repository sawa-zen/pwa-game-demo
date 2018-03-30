import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Page from '../components/Page';
import EscapeGame from '../libs/escapeGame';

const Game = styled.div`
  width: 100%;
  height: 100%;
`;

class GameLayer extends React.Component {
  static WRAPPER_ID = 'my-canvas';

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.game = new EscapeGame(GameLayer.WRAPPER_ID);
    this.game.on('destroyed', this.props.onDestroyed);
  }

  render() {
    return (
      <Page>
        <Game id="my-canvas" />
      </Page>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
  },
});

export default GameLayer;
