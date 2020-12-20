import React from 'react';

function CompanyLogo(props) {
  const {
    company,
    shade = '000',
    size = 'md',
    className = '',
    ...restProps
  } = props;

  return (
    <img
      {...restProps}
      className={`custom-company-logo size-${size} ${className}`}
      src={`https://s.svgbox.net/social.svg?ic=${company}&fill=${shade}`}
    />
  );
}

export default CompanyLogo;
