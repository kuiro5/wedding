import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import './styles.css';

const OurStory = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} my={[6]}>
      <Box className='our-story'>
      <Cross />
      <h1>Our Story</h1>
      <h4>Happy Valley to California</h4>
      <div>
        Josh and Rach first met in college at Penn State. Josh and Rach first met in college at Penn State.
      </div>
    </Box>
    </Flex>
  );
};

export default OurStory;
