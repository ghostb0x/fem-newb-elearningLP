import React from 'react';
import { COURSE_CATALOG } from '../../data';
import CourseCard from '../CourseCard';
import { styled } from 'styled-components';

function CourseCardGrid() {
  return (
    <>
      <GridTitleCard>
        <Title>Check out our most popular courses!</Title>
      </GridTitleCard>
      <GridCards> 
        {COURSE_CATALOG.map((data) => (
          <CourseCard
            key="data.id"
            {...data}
          />
        ))}
      </GridCards>
    </>
  );
}

const GridTitleCard = styled.div`
  background: var(--button-2-idle);
  color: var(--color-white);
  padding: 24px 28px 32px 28px;
  border-radius: 10px;
`;

const Title = styled.h4`
  font: var(--font-body-s);
  color: var(--color-white);
`;

const GridCards = styled.div``;


export default CourseCardGrid;
