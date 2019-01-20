import React from 'react';
import Button from '../Button'
import { Flex, Box } from '@rebass/grid';

const RSVPFooter = () => {
  return (
    <div className='rsvp-footer'>
      <Flex>
          <Box width={[1, 1/2]} p={[4]}>
            <h4>We cannot wait to celebrate with you!</h4>
          </Box>
          <Box width={[1, 1/2]} p={[4]}>
            <Button>RSVP</Button>
          </Box>
      </Flex>
    </div>
  );
};

export default RSVPFooter;