import React from 'react';
import HeroContent from '../HeroContent/HeroContent';
import { styled } from 'styled-components';
import HeroImage from '../HeroImage/HeroImage';
import CourseCardGrid from '../CourseCardGrid/CourseCardGrid';
import { QUERIES } from '../../constants';

function MainBody() {
  return (
    <MaxWidthWrapper>
      <MainBodyGrid>
        <HeroSection>
          <HeroContent />
          <HeroImage />
        </HeroSection>
        <CourseCardGrid />
      </MainBodyGrid>
    </MaxWidthWrapper>
  );
}

const MaxWidthWrapper = styled.main`
  background: var(--color-main-background);
  padding-bottom: 80px;
  z-index: 1;

  @media ${QUERIES.tabletAndUp} {
    overflow-x: clip;
    
  }
`;

const MainBodyGrid = styled.div`
  padding-top: 22px;
  margin-left: 16px;
  margin-right: 16px;

  @media ${QUERIES.tabletAndUp} {
    padding-top: 76px;
    margin-left: 40px;
    margin-right: 40px;
  }
`;

const HeroSection = styled.div`
@media ${QUERIES.tabletAndUp} {
  display: grid;
  grid-template-columns: 6fr 4fr;
  
} 
`;

export default MainBody;