import React from 'react';
import { Flex, Box } from '@rebass/grid';
import { MdAirplanemodeActive } from 'react-icons/md';
import { MdDirectionsWalk } from 'react-icons/md';
import Cross from '../Cross';
import Button from '../Button';
import './styles.css';

const Accomodations = () => {
  return (
    <Flex className='accomodation' alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
      <Flex className='accomodation-description' alignItems={'center'} justifyContent={'center'}>
        <Box>
          <Cross />
          <h1 className='accomodation-header'>Accomodations</h1>
          <p>Blocks of rooms have been reserved at The Westin and Hotel Monaco in downtown Pittsburgh. Several types of rooms are available and rates vary by room type. Mention the Morelli/Kuiros wedding block to receive a group rate.
          </p>
        </Box>
      </Flex>
      <Flex className='accomodation-hotels' width={[1, .8]} alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'}>
        <Box width={[1, 1/2]} px={[2, 3, 3, 5]} className='accomodation-hotel accomodation-hotel-border'>
          <h4 className='accomodation-subtitle'>The Westin</h4>
          <div className='accomodation-address-phone-number'>
            <div className='accomodation-address'>
              <div>1000 Penn Avenue</div>
              <div>Pittsburgh, Pennsylvania 15222</div>
            </div>
            <div>(412) 281-3700</div>
          </div>
          <div className='accomodation-distance'>
            <Flex flexDirection='column' alignItems='center'>
              <Box>
                <Flex alignItems='center'>
                  <MdAirplanemodeActive className='accomodation-icons'/>
                  <div>18 miles from PIT (20 min drive)</div>
                </Flex>
                <Flex alignItems='center'>
                  <MdDirectionsWalk className='accomodation-icons'/>
                  <div>0.2 miles from venue (4 min walk)</div>
                </Flex>
              </Box>
            </Flex>
          </div>
          <Button onClick={() => window.open('https://www.marriott.com/event-reservations/reservation-link.mi?id=1547580083445&key=GRP&app=resvlink', '_blank')}>Book online</Button>
        </Box>
        <Box width={[1, 1/2]} px={[2, 3, 3, 5]} className='accomodation-hotel'>
          <h4 className='accomodation-subtitle'>Hotel Monaco</h4>
          <div className='accomodation-address-phone-number'>
            <div className='accomodation-address'>
              <div>620 William Penn Place</div>
              <div>Pittsburgh, Pennsylvania 15219</div>
            </div>
            <div>(412) 471-1170</div>
          </div>
          <div className='accomodation-distance'>
            <Flex flexDirection='column' alignItems='center'>
              <Box>
                <Flex alignItems='center'>
                  <MdAirplanemodeActive className='accomodation-icons'/>
                  <div>18 miles from PIT (20 min drive)</div>
                </Flex>
                <Flex alignItems='center'>
                  <MdDirectionsWalk className='accomodation-icons'/>
                  <div className='accomodation-distance-info'>0.4 miles from venue (8 min walk)</div>
                </Flex>
              </Box>
            </Flex>
          </div>
          <Button onClick={() => window.open('https://www.ihg.com/kimptonhotels/hotels/us/en/find-hotels/hotel/rooms?qDest=620%20William%20Penn%20Place,%20Pittsburgh,%20PA,%20US&qCiMy=72019&qCiD=31&qCoMy=82019&qCoD=2&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99801505&qGrpCd=D72&qSlH=PITHM&qAkamaiCC=US&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&qAAR=6CBARC&qWch=0&qSmP=1&setPMCookies=true&qRad=30&qRdU=mi&srb_u=1&icdv=99801505', '_blank')}>Book online</Button>
        </Box>
      </Flex>
    </Flex>

  );
};

export default Accomodations;
