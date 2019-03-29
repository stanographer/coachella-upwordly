import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { Close } from '../Controls';
import Contents from './Contents';

const SlideOut = props => {
  return (
    <div className={ styles.drawerContent }>
      <Contents />
      <Close closeModal={ props.closeModal } />
    </div>
  );
};

SlideOut.propTypes = {
  closeModal: PropTypes.func
};

export default SlideOut;
