import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Page from '../components/Page';
import EscapeGame from '../libs/escapeGame';

class GamePage extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this._game = new EscapeGame();
    this._game.setSize(this._element.clientWidth, this._element.clientHeight);
    this._game.on('destroyed', this.props.onDestroyed);
    this._element.appendChild(this._game.domElement);
  }

  render() {
    return (
      <Page innerRef={element => this._element = element } />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDestroyed: () => {
  },
});

export default connect(null, mapDispatchToProps)(GamePage);
