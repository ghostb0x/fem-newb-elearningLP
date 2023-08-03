import React from 'react';
import styled from 'styled-components/macro';
import Button from '../Button/Button';

function Header() {
  let logo_src = '/assets/logo-dark.svg';

  return (
    <HeaderWrapper>
      <Logo>
        <picture>
          <img
            src={logo_src}
            alt="Skilled company logo - click to go home"
          />
        </picture>
      </Logo>
      <HeaderButton>Get Started</HeaderButton>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 16px;
`;

const Logo = styled.figure``;

const HeaderButton = styled(Button)`
  &:hover {
    background: var(--button-1-hover);
  }
`;

export default Header;
