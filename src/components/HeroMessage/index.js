import React from 'react';
import Button from '../Button'
import './styles.css';

const HeroMessage = ({ openRSVP }) => {
  return (
    <div className='hero-message'>
      <div className='hero-message-title'>We're getting married</div>
      <div className='hero-message-date'>09.01.19 // Pittsburgh, Pennsylvania</div>
      <Button onClick={openRSVP} className='hero-button'>{'RSVP'}</Button>
    </div>
  );
};

export default HeroMessage;
