import React from 'react';
import classNames from 'classnames';

const Button = ({ onClick, children, className }) => {
  return(
    <button className={classNames('pill-button', className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
};

export default Button;
