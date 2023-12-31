import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';
import { QUERIES } from '../../constants';

function Footer() {
  return (
    <FooterWrapper>
      <picture>
        <FooterLogo
          src={'/assets/logo-light.svg'}
          alt="Skilled company logo"
        />
      </picture>
      <FooterButton>Get Started</FooterButton>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: var(--color-offblack);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 16px;

  @media ${QUERIES.tabletAndUp} {
    padding: 36px 40px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 40px 165px;
  }
`;

const FooterLogo = styled.img`
  width: 89px;

  @media ${QUERIES.laptopAndUp} {
    width: 111px;
  }
`;

const FooterButton = styled(Button)`
  background: var(--button-3-idle);

  &:hover {
    background: var(--button-3-hover);
  }
`;

export default Footer;
