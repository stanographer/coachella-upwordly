import React from 'react';
import styles from './SlideOut.module.scss';
import PropTypes from 'prop-types';

const Contents = ({ toggleModal, handleActivePage }) => {
  return (
    <header aria-label="Navigation links" className={ styles.linkList }>
      <ul aria-label="Link list">
        <li>
          <button
            aria-label="About Live Captioning"
            onClick={ () => {
            handleActivePage({
              activePage: 1
            });
            toggleModal();
          } }>
            <span>About</span>
          </button>
        </li>
        <li>
          <button
            aria-label="Captioning Partners"
            onClick={ () => {
            toggleModal();
            handleActivePage({
              activePage: 2
            })
          } }>Partners</button>
        </li>
        <li>
          <button
            aria-label="Back to Live Captioning"
            onClick={ () => {
            toggleModal();
            handleActivePage({
              activePage: 0
            })
          } }>
            <span>Captioning</span>
          </button>
        </li>
      </ul>
    </header>
  );
};

Contents.propTypes = {
  toggleModal: PropTypes.func,
  handleActiveAge: PropTypes.func,
};

export default Contents;
