import React from 'react';
import styled from 'styled-components';
import App from './app/App';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

class CanvasLayer extends React.PureComponent {
  componentDidMount() {
    this.app.init();
  }

  app = new App();

  render() {
    return (
      <Wrapper id="my-canvas" />
    );
  }
}

export default CanvasLayer;
