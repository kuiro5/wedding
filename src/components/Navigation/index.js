import React from 'react';
import Scrollchor from 'react-scrollchor';
import './styles.css';

const Navigation = () => (
  <div class='navigation'>
    <Scrollchor className='navigation-item' to="#our-story">Our Story</Scrollchor>
    <Scrollchor className='navigation-item' to="#details">Details</Scrollchor>
  </div>
);

export default Navigation;
