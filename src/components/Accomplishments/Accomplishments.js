import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

// Could import this to constants
const data = [
  { number: 2019, text: 'Moved to Toronto from the UK', },
  { number: 2021, text: 'Became a Permenant Resident in Canada', },
  { number: 2022, text: 'Completed Web Dev bootcamp'},
  { number: 2023, text: 'Began working as a web developer for MeaningfulWork Inc', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
