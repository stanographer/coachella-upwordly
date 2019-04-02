import React from 'react';
// import TenFiftyImage from '../../assets/images/ten-fifty.webp';

const TenFiftyLogo = ({ stylingClass }) => {
  return (
    <img
      style={ {
        userSelect: 'none',
        cursor: 'zoom-in'
      } }
      alt="Ten Fifty Entertainment Logo"
      aria-label="Ten Fifty Entertainment Logo"
      className={ stylingClass }
    />
  );
};

export default TenFiftyLogo;
