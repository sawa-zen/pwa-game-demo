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
  user-select: none;
`;

const PrimaryButton = (props) => (
  <Wrapper
    className={props.className}
    onClick={props.onClick}
    onTouchStart={props.onMouseDown}
    onTouchEnd={props.onMouseUp}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseLeave={props.onMouseLeave}
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
  onTouchStart: () => {},
  onTouchEnd: () => {},
  onMouseLeave: () => {},
};

export default PrimaryButton;
