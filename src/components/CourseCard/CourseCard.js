import React from 'react';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function CourseCard({
  id,
  title,
  description,
  startUrl,
  iconSrc,
  iconAltText,
}) {
  return (
    <Article>
      <Icon
        src={iconSrc}
        alt={iconAltText}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CTAlink href={startUrl}> Get Started </CTAlink>
      <CTAlinkInvis href={startUrl}> Get Started </CTAlinkInvis>
    </Article>
  );
}

const Article = styled.article`
  --iconOffset: calc(56 - 32);
  margin: calc((var(--iconOffset) + 16) * 1px) 0 16px 0;
  padding: 0 28px 32px 28px;
  border-radius: 10px;
  background-color: var(--color-white);

  @media ${QUERIES.tabletAndUp} {
    margin: 0;
    padding: 0 32px 32px 32px;
    position: relative;
  }
`;

const Icon = styled.img`
  margin-top: calc(var(--iconOffset) * -1px);
`;

const Title = styled.h3`
  font: var(--font-mobile-h3);
  margin-top: calc(var(--iconOffset) * 1px);

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h4);
  }
`;

const Description = styled.p`
  font: var(--font-body-s);
  color: var(--color-lightGray);
  margin-top: 16px;
  margin-bottom: 24px;
  @media ${QUERIES.laptopAndUp} {
    font: var(--font-body-m);
  }
`;

const CTAlink = styled.a`
  font: var(--font-body-m);
  font-weight: var(--font-weight-medium);
  color: var(--color-hotPink);

  &:hover {
    color: var(--color-lightPink);
  }

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    left: 32px;
    bottom: 32px;
  }
`;

// This is to create space in-flow, so container doesn't collapse when CTAlink is positioned absolutely
const CTAlinkInvis = styled(CTAlink)`
  position: relative;
  opacity: 0;
`;

export default CourseCard;
