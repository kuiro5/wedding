import React from 'react';
import './styles.css';

const Hero = ({ children }) => (
  <div class='hero'>
    <div class='hero-overlay'></div>
    {children}
  </div>
);

export default Hero;
