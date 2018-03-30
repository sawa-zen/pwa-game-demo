import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setCurrentPage } from '../router/routerAction';
import PrimaryButton from '../components/PrimaryButton';

const Wrapper = styled.div`
  position: relative;
`;

const RetryButton = styled(PrimaryButton)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  margin: auto;
  width: 200px;
`;

const ScoreScene = pure((props) => (
  <Wrapper>
    <RetryButton
      label="RETRY"
      onClick={props.onClickRetry}
    />
  </Wrapper>
));

const mapDispatchToProps = (dispatch) => ({
  onClickRetry: () => {
    dispatch(setCurrentPage('game'));
  },
});

export default connect(null, mapDispatchToProps)(ScoreScene);
