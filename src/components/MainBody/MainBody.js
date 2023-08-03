import React from 'react';
import HeroContent from '../HeroContent/HeroContent';
import { styled } from 'styled-components';
import HeroImage from '../HeroImage/HeroImage';
import CourseCardGrid from '../CourseCardGrid/CourseCardGrid';

function MainBody() {
  return (
    <MaxWidthWrapper>
      <MainBodyGrid>
        <HeroContent />
        <HeroImage />
        <CourseCardGrid />
      </MainBodyGrid>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.main`
  background: var(--color-main-background);
  padding-bottom: 80px;
`;

const MainBodyGrid = styled.div`
  padding-top: 22px;
  margin-left: 16px;
  margin-right: 16px;
`;
export default MainBody;
