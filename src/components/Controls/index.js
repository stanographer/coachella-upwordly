import React from 'react';
import PropTypes from 'prop-types';
import DownArrow from './DownArrow';
import Hamburger from './Hamburger';

const Arrow = props => {
  return (
    <div onClick={ () => props.scrollDown() }>
      <DownArrow />
    </div>
  );
};

const Burger = props => {
  return (
    <div onClick={ props.onClick }>
      <Hamburger />
    </div>
  );
};

Arrow.propTypes = {
  scrollDown: PropTypes.func
};

export {
  Arrow,
  Burger,
};
