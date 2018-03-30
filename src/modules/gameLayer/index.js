import React from 'react';
import styled from 'styled-components';
import App from './app/App';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class CanvasLayer extends React.Component {
  static defaultProps = {
    scene: 'start',
    direction: [0, 0],
    onChangeScene: () => {},
  };

  componentWillReceiveProps(nextProps) {
    this.app.updateProps(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.app.init();
    this.app.on('changeScene', this.props.onChangeScene);
  }

  app = new App();

  render() {
    return (
      <Wrapper id="my-canvas" />
    );
  }
}

export default CanvasLayer;
