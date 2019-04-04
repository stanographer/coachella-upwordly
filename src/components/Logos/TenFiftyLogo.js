import React from 'react';
import TenFiftyImage from '../../assets/images/tenfifty.png';

const TenFiftyLogo = ({ stylingClass }) => {
  return (
    <img
      alt="Ten Fifty Entertainment Logo"
      aria-label="Ten Fifty Entertainment Logo"
      className={ stylingClass.tenFiftyLogo }
      src={ TenFiftyImage }
      style={ {
        userSelect: 'none',
        cursor: 'zoom-in',
      } }
    />
  );
};

export default TenFiftyLogo;
