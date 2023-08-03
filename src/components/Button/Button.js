import React from 'react';
import styled from 'styled-components/macro';

function Button({ children, className }) {
  return (
  <ButtonWrapper className={className}>
    {children}
  </ButtonWrapper>);
}

const ButtonWrapper = styled.button`
  width: 8.75rem;
  height: 3rem;
  border-radius: 1.75rem;
  background: var(--button-1-idle);
  font: var(--font-button-mobile);
  color: var(--color-white);
  text-align: center;
  /* &:hover {
    background-color: var(--button-1-hover);
  } */
`;

export default Button;
