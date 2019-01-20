import React from 'react';
import { Flex, Box } from '@rebass/grid';
import './styles.css';

const SaveTheDate = () => {
  return (
    <div className='save-the-date'>
      <div className='save-the-date-overlay' />
      <Flex className='save-the-date-container' alignItems={'center'} justifyContent={'center'}>
        <Box>
          <h3 className='save-the-date-dt'>September 01, 2019</h3>
          <h1 className='save-the-date-title'>Dinner. Drinks. Dancing.</h1>
        </Box>
      </Flex>
    </div>
  );
};

export default SaveTheDate;
