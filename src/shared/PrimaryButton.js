import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 48px;
  border: 2px solid white;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  user-selected: none;
`;

const PrimaryButton = (props) => (
  <Wrapper
    className={props.className}
    onClick={props.onClick}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
  >
    {props.label}
  </Wrapper>
);
PrimaryButton.defaultProps = {
  className: '',
  label: 'ボタン',
  onClick: () => {},
  onMouseDown: () => {},
  onMouseaUp: () => {},
};

export default PrimaryButton;