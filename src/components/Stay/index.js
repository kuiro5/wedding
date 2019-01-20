import React from 'react';
import { Flex, Box } from '@rebass/grid';
import map from '../../images/map.png';
import './styles.css';

const Stay = () => {
  return (
    <div>
      <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
        <Box width={[1, 1/2]} p={[4]}>
          <img src={map} />
        </Box>
        <Box width={[1, 1/2]} p={[4]}>
          <h3 className='stay-header-link'><a href="">Hotel Monaco</a></h3>
          <p>620 William Penn Pl, Pittsburgh, PA 15219</p>
          <p>(412) 471-1170</p>
          <h3 className='stay-header-link'><a href="">Westin</a></h3>
          <p>1000 Penn Ave, Pittsburgh, PA 15222</p>
          <p>(412) 281-3700</p>
        </Box>
      </Flex>
    </div>

  );
};

export default Stay;
