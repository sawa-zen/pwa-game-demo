import React from 'react';
import styled from 'styled-components';
import EscapeGame from '@sawa-zen/escape-game';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class EscapeGameBridge extends React.Component {
  static defaultProps = {
    className: '',
    status: 'playing',
    onDestroyed: () => {},
  };

  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this._game = new EscapeGame();
    this._game.on('destroyed', this.props.onDestroyed);
    this.wrapperRef.current.appendChild(this._game.domElement);
  }

  componentWillUnmount() {
    this._game.dispose();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this._game.status === 'destroyed' &&
      nextProps.status === 'playing'
    ) {
      this._game.retry();
    }
  }

  render() {
    return (
      <Wrapper
        className={this.props.className}
        ref={this.wrapperRef}
      />
    );
  }
}

export default EscapeGameBridge;
