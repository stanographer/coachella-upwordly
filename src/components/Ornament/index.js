import React, { Fragment } from 'react';
import styles from '../../index.module.scss';

// Function generates a random number and shows a random
// decoration element.
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Calculate a random integer.
const rand = getRandomInt(0, 2);

// Spit out an ornament based on the random number via key.
const ornaments = {
  0: <div className={ styles.responsiveSprig } />,
  1: <div className={ styles.responsiveStar } />,
  2: <div className={ styles.responsiveFlower } />
};

const Ornament = () => {
  const ornament = ornaments[rand];

  return (
    <Fragment>
      { ornament }
    </Fragment>
  );
};

export default Ornament;
