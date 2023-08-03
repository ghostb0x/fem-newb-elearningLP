import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';

function Footer() {
  return (
    <FooterWrapper>
        <picture>
          <img
            src={'/assets/logo-light.svg'}
            alt="Skilled company logo"
          />
        </picture>
        <FooterButton>
          Get Started
        </FooterButton>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: var(--color-offblack);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 16px;
`;

const FooterButton = styled(Button)`
  background: var(--button-3-idle);

  &:hover {
    background: var(--button-3-hover);
  }
`;

export default Footer;
