import React from 'react';
import './styles.css';

const Section = ({ id, title, children }) => {
  return(
    <div class='section'>
      {title && id && <h1 id={id}>{title}</h1>}
      {children}
    </div>

  );
};

export default Section;
