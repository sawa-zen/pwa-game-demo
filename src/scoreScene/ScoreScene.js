import React from 'react';
import { pure } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setScene } from '../app/appAction';
import { FullScreen, PrimaryButton } from '../shared';

const Wrapper = styled(FullScreen)``;

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

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  onClickRetry: () => {
    dispatch(setScene('game'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScoreScene);
