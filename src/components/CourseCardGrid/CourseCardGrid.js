import React from 'react';
import { COURSE_CATALOG } from '../../data';
import CourseCard from '../CourseCard';
import { styled } from 'styled-components';
import { QUERIES } from '../../constants';

function CourseCardGrid() {
  return (
    <GridWrapper>
      <GridTitleCard>
        <Title>Check out our most popular courses!</Title>
      </GridTitleCard>

      {COURSE_CATALOG.map((data) => (
        <CourseCard
          key="data.id"
          {...data}
        />
      ))}
    </GridWrapper>
  );
}

const GridWrapper = styled.div`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px 10px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: repeat(3, 1fr);
    gap: 80px 30px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 50px;
  }
`;

const GridTitleCard = styled.div`
  background: var(--button-2-idle);
  color: var(--color-white);
  padding: 24px 28px 32px 28px;
  border-radius: 10px;

  @media ${QUERIES.tabletAndUp} {
    padding: 56px 21px 0 32px;
  }
`;

const Title = styled.h2`
  font: var(--font-h4);
  color: var(--color-white);
  line-height: 2rem;

  @media ${QUERIES.laptopAndUp} {
    font: var(--font-h3);
  }
`;

export default CourseCardGrid;
