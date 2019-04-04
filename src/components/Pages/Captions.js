import React from 'react';
import ShareDBBinding from '../../components/ShareDB';
import PropTypes from 'prop-types';

// ShareDB text area styles.
const style = {
  color: '#000',
  fontFamily: 'Poppins, sans-serif',
};

const Captions = ({ doc, styles }) => {
  return (
    <ShareDBBinding
      cssClass={ styles.liveTranscriptText }
      style={ style }
      doc={ doc }
      flag='≈'
      elementType="div" />
  );
};

Captions.propTypes = {
  doc: PropTypes.object,
  styles: PropTypes.object,
};

export default Captions;
