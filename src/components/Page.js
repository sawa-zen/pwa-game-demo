import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: env(safe-area-inset-top);
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 177vw;
  margin: auto;
  background: black;
`;

const Page = (props) => (
  <Wrapper className={props.className}>
    {props.children}
  </Wrapper>
);
Page.defaultProps = {
  className: '',
};

export default Page;
