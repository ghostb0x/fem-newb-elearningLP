import React from "react";
import { styled } from "styled-components";

function CourseCard( {id, title, description, startUrl, iconSrc, iconAltText}) {
  return (

    <Article>
      <Icon src={iconSrc} alt={iconAltText} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CTAlink href={startUrl}> Get Started </CTAlink>
    </Article>


  );
}

const Article = styled.article`
  --iconOffset: calc(56 - 32);
  margin: calc((var(--iconOffset) + 16) * 1px) 0 16px 0;
  padding: 0 28px 32px 28px;
  border-radius: 10px;
  background-color: var(--color-white);

`;

const Icon = styled.img`
  margin-top: calc(var(--iconOffset) * -1px);
`;

const Title = styled.h4`
  font: var(--font-h4);
`;

const Description = styled.p`
  font: var(--font-p);
  margin-top: 16px;
  margin-bottom: 24px;
`;

const CTAlink = styled.a`
  font: var(--font-body-m);
  color: var(--color-hotPink);
`;

export default CourseCard;
