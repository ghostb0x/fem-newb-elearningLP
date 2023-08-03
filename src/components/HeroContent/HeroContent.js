import React from 'react';
import { styled } from 'styled-components';
import Button from '../Button/Button';

function HeroContent() {
  return (
    <Wrapper>
      <H1>Maximize skill, minimize budget</H1>
      <Paragraph>
        Our modern courses across a range of in-demand skills will
        give you the knowledge you need to live the life you want.
      </Paragraph>
      <HeroButton>Get Started</HeroButton>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const H1 = styled.h1`
  font: var(--font-h2);
`;

const Paragraph = styled.p`
  margin: 26px 0 24px 0;
  font: var(--font-body-s);
  color: var(--color-lightGray);
  line-height: 26px;
`;

const HeroButton = styled(Button)`
  background: var(--button-2-idle);
  width: 10.4375rem;
  height: 3.5rem;
  border-radius: 31.5px;
  &:hover{
    background: var(--button-2-hover)
  }
`;


export default HeroContent;
