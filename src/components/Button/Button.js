import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

function Button({ children, className }) {
  return (
    <ButtonWrapper className={className}>{children}</ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  width: 8.75rem;
  height: 3rem;
  border-radius: 1.75rem;
  background: var(--button-1-idle);
  font: var(--font-button-mobile);
  color: var(--color-white);
  text-align: center;

  @media ${QUERIES.laptopAndUp} {
    width: 10.4375rem;
    height: 3.5rem;
    font: var(--font-button-desktop);
  }
`;

export default Button;
