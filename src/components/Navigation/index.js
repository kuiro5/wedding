import React from 'react';
import Scrollchor from 'react-scrollchor';
import './styles.css';

const Navigation = () => (
  <div className='navigation'>
    <Scrollchor className='navigation-item' to="#our-story">Our Story</Scrollchor>
    <Scrollchor className='navigation-item' to="#details">Details</Scrollchor>
    <Scrollchor className='navigation-item' to="#stay">Stay</Scrollchor>
    <a className='navigation-item' href='https://www.zola.com/registry/joshplusrach?preview=true' target='_blank'>Registry</a>
  </div>
);

export default Navigation;
