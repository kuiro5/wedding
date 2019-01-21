import React from 'react';
import { Flex, Box } from '@rebass/grid';
import Cross from '../Cross';
import Button from '../Button';
import './styles.css';

const Accomodations = () => {
  return (
    <Flex className='accomodation' alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Flex className='accomodation-description' alignItems={'center'} justifyContent={'center'}>
        <Box>
          <Cross />
          <h1>Accomodations</h1>
          <p>Blocks of rooms have been reserved at The Westin and Hotel Monaco in downtown Pittsburgh. Several types of rooms are available and rates vary by room type. Mention the Morelli/Kuiros wedding block to receive a group rate.
          </p>
        </Box>
      </Flex>
      <Flex className='accomodation-hotels' alignItems={'center'} justifyContent={'center'}  flexWrap={'wrap'}>
        <Box width={[1, 1/2, 1/2]} px={[6]} className='accomodation-hotel accomodation-hotel-border'>
          <h4>The Westin</h4>
          <div>1000 Penn Avenue</div>
          <div>Pittsburgh, Pennsylvania 15222</div>
          <div>(412) 281-3700</div>
          <div>18 miles from PIT (20 min drive)</div>
          <div>0.2 miles from venue (4 min walk)</div>
          <Button>Book online</Button>
        </Box>
        <Box className='accomodation-divider' />
        <Box width={[1, 1/2, 1/2, 1/2]} px={[6]} className='accomodation-hotel'>
          <h4>Hotel Monaco</h4>
          <div>620 William Penn Place</div>
          <div>Pittsburgh, Pennsylvania 15219</div>
          <div>(412) 471-1170</div>
          <div>18 miles from PIT (20 min drive)</div>
          <div>0.4 miles from venue (8 min walk)</div>
          <Button>Book online</Button>
        </Box>
      </Flex>
    </Flex>

  );
};

export default Accomodations;
