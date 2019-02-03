import React from 'react';
import Button from '../Button'
import { Flex, Box } from '@rebass/grid';
import './styles.css';

const RSVPFooter = ({ openRSVP }) => {
  return (
    <Flex className='rsvp-footer' flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <h1 className='rsvp-footer-header'>We cannot wait to celebrate with you!</h1>
      <Button onClick={openRSVP} className='rsvp-footer-button'>RSVP</Button>
    </Flex>
  );
};

export default RSVPFooter;
