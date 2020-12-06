import React from 'react';

function Button(props) {
  const { className = '', children, ...restProps } = props;
  return (
    <button {...restProps} className={`custom-btn ${className}`}>
      {children}
    </button>
  );
}

export default Button;
