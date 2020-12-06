import React from 'react';

function Input(props) {
  const { className = '', ...restProps } = props;

  return (
    <input {...restProps} className={`custom-input ${className}`} />
  );
}

export default Input;
