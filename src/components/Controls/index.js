import React from 'react';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger';
import Button from './Button';
import arrowStyles from './Arrow.module.scss';
import closeStyles from './Close.module.scss';

const Arrow = props => {
  return (
    <div onClick={ () => props.scrollDown() }>
      <Button
        filter="scroll-top-a"
        href="scroll-top-b"
        id="scroll-top-b"
        path="M18 22l8 8 8-8"
        styles={ arrowStyles }
        title="Scroll to Bottom"
      />
    </div>
  );
};

const Close = props => {
  return (
    <div onClick={ () => props.closeModal() }>
      <Button
        filter="exitFilter"
        href="exitCircle"
        id="exitCircle"
        path="M21.25 20.25l9.5 9.5M21.25 29.75l9.5-9.5"
        styles={ closeStyles }
        title="Close Modal"
      />
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
  Close,
  Burger,
};
