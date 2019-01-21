import React from 'react';
import './styles.css';

const Hero = ({ children }) => (
  <div className='hero'>
    <div className='hero-overlay'></div>
    {children}
  </div>
);

export default Hero;
