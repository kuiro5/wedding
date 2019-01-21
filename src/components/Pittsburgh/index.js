import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import map from '../../images/map.png';
import './styles.css';

const Pittsburgh = () => {
  return (
    <Flex className='pittsburgh' alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
      <Box width={[1, 1/2]} p={[4]}>
        <img src={map} />
      </Box>
      <Box className='pittsburgh-description' width={[1, 1/2]} p={[4]}>
        <h4>Welcome to the Steel City</h4>
        <p>Situated within the Allegheny Mountains, Pittsburgh is the Steel City known for its history, melting pot of culture, and transformative industry. There's plenty to do.</p>
      </Box>
    </Flex>
  );
};

export default Pittsburgh;
