import React from 'react';
import { Flex, Box } from '@rebass/grid';
import './styles.css';

const SaveTheDate = () => {
  return (
    <div className='save-the-date'>
      <Flex className='save-the-date-container' alignItems={'center'} justifyContent={'center'}>
        <Box>
          <h1>Save the Date</h1>
          <h3 className='save-the-date-dt'>09.10.19</h3>
        </Box>
      </Flex>
    </div>
  );
};

export default SaveTheDate;
