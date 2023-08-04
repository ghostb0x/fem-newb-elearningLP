import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button';
import { QUERIES } from '../../constants';

function Header() {
  let logo_src = '/assets/logo-dark.svg';

  return (
    <HeaderWrapper>
      <picture>
        <Logo
          src={logo_src}
          alt="Skilled company logo - click to go home"
        />
      </picture>
      <HeaderButton>Get Started</HeaderButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 24px 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 40px 165px;
  }
`;

const Logo = styled.img`
  width: 89px;

  @media ${QUERIES.laptopAndUp} {
    width: 111px;
  }
`;

const HeaderButton = styled(Button)`
  z-index: 2;
  &:hover {
    background: var(--button-1-hover);
  }
`;

export default Header;
