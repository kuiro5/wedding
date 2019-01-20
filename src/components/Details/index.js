import React from 'react';
import { Flex, Box } from '@rebass/grid';
import pa from '../../images/Pennsylvanian.png';
import './styles.css';

const Details = () => {
  return (
    <div>
      <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
        <Box className='details-message' width={[1, 1/2]} p={[4]}>
          <h3>The Pennsylvanian</h3>
          <p>Pittsburgh, PA</p>
          <p>September 01, 2019</p>
          <p>Cocktail Attire</p>
        </Box>
        <Box width={[1, 1/2]} p={[4]}>
          <img src={pa} />
        </Box>
      </Flex>
    </div>
  );
};

export default Details;
