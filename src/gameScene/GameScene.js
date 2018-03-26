import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  FullScreen,
  PrimaryButton,
} from '../shared';

const Wrapper = styled(FullScreen)`
  position: relative;
`;

const LeftButton = styled(PrimaryButton)`
  position: absolute;
  left: 40px;
  bottom: 60px;
  width: 48px;
`;

const RightButton = styled(PrimaryButton)`
  position: absolute;
  right: 40px;
  bottom: 60px;
  width: 48px;
`;

const GameScene = pure((props) => (
  <FullScreen>
    <LeftButton
      label="<"
      onMouseDown={props.onMouseDownLeftButton}
      onMouseUp={props.onMouseUpLeftButton}
    />
    <RightButton
      label=">"
      onMouseDown={props.onMouseDownRightButton}
      onMouseUp={props.onMouseUpRightButton}
    />
  </FullScreen>
));

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onMouseDownLeftButton: () => {
    console.info('left down');
  },
  onMouseUpLeftButton: () => {
    console.info('left up');
  },
  onMouseDownRightButton: () => {
    console.info('right down');
  },
  onMouseUpRightButton: () => {
    console.info('right up');
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScene);
