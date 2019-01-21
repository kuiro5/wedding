import React from 'react';
import Cross from '../Cross';
import './styles.css';

const Section = ({ id, children }) => {
  return(
    <div class='section' id={id}>
      {children}
    </div>

  );
};

export default Section;
