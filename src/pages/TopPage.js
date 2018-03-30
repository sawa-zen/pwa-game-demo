import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPage } from '../router/routerAction';
import Page from '../components/Page';
import PrimaryButton from '../components/PrimaryButton';

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

const TopScene = pure((props) => (
  <Page>
    <Title>METEOR<br/>ESCAPE</Title>
    <StartButton
      label="START"
      onClick={props.onClickStart}
    />
  </Page>
));

const mapDispatchToProps = (dispatch) => ({
  onClickStart: () => {
    dispatch(setCurrentPage('game'));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TopScene);
