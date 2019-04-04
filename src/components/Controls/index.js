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
        aria-label="Scroll to Bottom"
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
    <div onClick={ () => props.toggleModal() }>
      <Button
        aria-label="Close Modal"
        circleID="exitCircle"
        filter="exitFilter"
        filterID="hamburgerA"
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
    <div className={ closeStyles.navButton } onClick={ () => props.toggleModal() }>
      <Hamburger
        aria-label="Burger Menu"
        circleID="hamburgerB"
        filter="hamburgerA"
        href="hamburgerB"
        path="M20 22h12-12zm6 6h6-6z"
        styles={ closeStyles }
        title="Burger Menu"
      />
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
