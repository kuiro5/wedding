import React from 'react';
import { Flex, Box } from '@rebass/grid';
import './styles.css';

const Details = () => {
  return (
    <Flex className='details' flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
      <h4 className='details-header'>The Details</h4>
      <div className='details-section'>
        <h1>Where</h1>
        <div className="where-text">The Pennsylvanian</div>
        <div className="where-text">Pittsburgh, Pennsylvania</div>
      </div>
      <div className='details-section'>
        <h1>When</h1>
        <div className="where-text">September 01, 2019</div>
        <div className="where-text">at 5 o'clock in the evening</div>
        <div className="where-italic">reception to follow</div>
      </div>
      <div>
        <h1>Attire</h1>
        <div className="where-text">Cocktail</div>
      </div>
  </Flex>
  );
};

export default Details;
