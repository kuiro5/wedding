import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import map from '../../images/map.png';
import './styles.css';

const Pittsburgh = () => {
  return (
    <Flex className='pittsburgh' alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
      <Box width={[1, 1/2]} p={[4, 5]}>
        <img src={map} />
      </Box>
      <Box className='pittsburgh-description' width={[1, 1/2]} p={[4]}>
        <h4 className="pittsburgh-title">Welcome to the Steel City</h4>
        <p>Situated within the Allegheny Mountains, Pittsburgh is the Steel City known for its rich history, melting pot of culture, and transformative industry. While you're here, these are some of Rach and Josh's favorite things to do:</p>
        <ul>
          <li>Breakfast @ <a href='http://www.pamelasdiner.com/' target='_blank'>Pamela's in The Strip District</a></li>
          <li>Lunch @ <a href='https://primantibros.com/locations/strip-district' target='_blank'>Primanti Brothers</a></li>
          <li>Bike Along the Water @ <a href='http://bikepittsburgh.com' target='_blank'>Golden Triangle Bike Rental</a></li>
          <li>Drinks @ <a href='https://churchbrew.com/' target='_blank'>The Church Brew Works</a></li>
          <li>Be Inspired @ <a href='https://www.warhol.org/' target='_blank'>The Andy Warhol Museum</a></li>
        </ul>
      </Box>
    </Flex>
  );
};

export default Pittsburgh;
