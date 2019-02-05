import React from 'react';
import Cross from '../Cross';
import './styles.css';

const Section = ({ id, children }) => {
  return(
    <div className='section' id={id}>
      {children}
    </div>

  );
};

export default Section;
