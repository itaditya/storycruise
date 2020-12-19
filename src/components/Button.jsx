import React from 'react';

function Button(props) {
  const { className = '', children, size = 'md', variant = 'default', ...restProps } = props;

  return (
    <button {...restProps} className={`custom-btn size-${size} variant-${variant} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
