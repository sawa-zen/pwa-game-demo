import React from 'react';
import { pure } from 'recompose';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: black;
`;

const ScoreScene = pure(() => (
  <Wrapper>
    ScoreScene
  </Wrapper>
));

export default ScoreScene;
