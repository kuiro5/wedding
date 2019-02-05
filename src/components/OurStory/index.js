import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import './styles.css';

const OurStory = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'}>
      <Box className='our-story'>
      <Cross />
      <h1>Our Story</h1>
      <h4 className="our-story-header">Happy Valley to California</h4>
      <div>
        <p>Rach and Josh first met their junior year at Penn State. Through hayrides and formals, football games and dollar slices, their relationship blossomed.</p>
        <p>After graduation, they embarked on their next adventure to California. Arriving in SFO with only a few suitcases, they found their first apartment and started settling in to life on the west coast. </p>
        <p>6 years and one short walk later, Josh asked Rach to marry him under the eucalyptus trees in San Francisco, a city where they both have learned to appreciate all the beauty and quirks life has to offer.</p>
      </div>
    </Box>
    </Flex>
  );
};

export default OurStory;

