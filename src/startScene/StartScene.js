import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setScene } from '../app/appAction';
import {
  FullScreen,
  PrimaryButton,
} from '../shared';

const Title = styled.h1`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  margin: auto;
  color: white;
  text-align: center;
  font-size: 48px;
`;

const StartButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

const StartScene = pure((props) => (
  <FullScreen>
    <Title>METEOR<br/>ESCAPE</Title>
    <StartButton
      label="START"
      onClick={props.onClickStart}
    />
  </FullScreen>
));

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClickStart: () => {
    dispatch(setScene('game'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartScene);
