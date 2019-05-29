import React from 'react';
import classNames from 'classnames';
import './styles.css';

const Button = ({ disabled, onClick, children, className, type }) => {
  return(
    <button
      disabled={disabled}
      type={type}
      className={classNames('pill-button', className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

export default Button;
