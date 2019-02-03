import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import './styles.css';

const OurStory = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} className='our-story'>
      <Box>
      <Cross />
      <h1>Our Story</h1>
      <h4>Happy Valley to California</h4>
      <div>
        <p>Rach and Josh first met their junior year at Penn State. Through hayrides and formals, football games and dollar slices, their relationship blossomed.</p>
        <p>After graduation, they embarked on their next adventure to California. Arriving in SFO with only a couple suitcases, they found their first apartment and started settling in to life on the west coast. </p>
        <p>6 years later on Lover's Lane in San Francisco, a city they both love, Josh asked Rach to marry him.</p>
      </div>
    </Box>
    </Flex>
  );
};

export default OurStory;
