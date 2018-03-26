import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  FullScreen,
  PrimaryButton,
} from '../shared';
import {
  setOnLeft,
  setOffLeft,
  setOnRight,
  setOffRight,
} from './gameSceneAction';

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
  <Wrapper>
    <LeftButton
      label="<"
      onMouseDown={props.onMouseDownLeftButton}
      onMouseUp={props.onMouseUpLeftButton}
      onMouseLeave={props.onMouseUpLeftButton}
    />
    <RightButton
      label=">"
      onMouseDown={props.onMouseDownRightButton}
      onMouseUp={props.onMouseUpRightButton}
      onMouseLeave={props.onMouseUpRightButton}
    />
  </Wrapper>
));

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onMouseDownLeftButton: () => {
    dispatch(setOnLeft());
  },
  onMouseUpLeftButton: () => {
    dispatch(setOffLeft());
  },
  onMouseDownRightButton: () => {
    dispatch(setOnRight());
  },
  onMouseUpRightButton: () => {
    dispatch(setOffRight());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameScene);
