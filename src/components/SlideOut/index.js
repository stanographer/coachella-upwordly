import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import closeButtonStyles from '../Controls/Close.module.scss';
import { Close } from '../Controls';
import Contents from './Contents';
import MobileCactus from '../../assets/images/mobile-nav-accent.png';

const SlideOut = props => {
  return (
    <Fragment>
      <div className={ closeButtonStyles.closeControls }>
        <button
          aria-label="Close nav"
          type="button"
        >
          <Close toggleModal={ props.toggleModal } />
        </button>
      </div>
      <div className={ styles.drawerContent }>
        <Contents
          toggleModal={ props.toggleModal }
          handleActivePage={ props.handleActivePage } />
      </div>
      <img
        alt="Mobile cactus decoration"
        className={ styles.mobileCactus }
        src={ MobileCactus }
        title="Mobile cactus decoration"
      />
    </Fragment>
  );
};

SlideOut.propTypes = {
  handleActivePage: PropTypes.func,
  toggleModal: PropTypes.func,
};

export default SlideOut;
