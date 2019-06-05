import React, { Component } from 'react';
import './styles.css';

export const FormPage = ({ children, title }) => {
  return (
    <div className='form-page'>
      <div className='form-page-inner'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default FormPage;
