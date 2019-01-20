import React from 'react';
import Button from '../Button'
import { Flex, Box } from '@rebass/grid';

const RSVPFooter = () => {
  return (
    <Flex>
        <Box width={[1, 1/2]} p={[4]}>
          <h4>We can't wait to celebrate with you!</h4>
        </Box>
        <Box width={[1, 1/2]} p={[4]}>
          <Button>RSVP</Button>
        </Box>
    </Flex>
  );
};

export default RSVPFooter;
