import React, { useState, useEffect } from 'react';
import Binding from './react-binding';
import PropTypes from 'prop-types';
import Spinner from '../Utils/Spinner';

function ShareDBBinding(props) {
  const { doc, cssClass, flag, style } = props;

  const [text, setText] = useState('');
  let binding;

  useEffect(() => {
    doc.subscribe(err => {
      if (err) {
        setText('There was a connection error: ' + err);
      }
    }, []);

    // Load document and bind it to local snapshot.
    doc.on('load', () => {
      binding = new Binding(doc.data, flag);
      setText(binding.snapshot);
    });

    // Apply remote ops to local snapshot.
    doc.on('op', op => {
      setTimeout(() => {
        setText(binding.applyOp(op));
      }, 0);
    });

    // Destroy listeners.
    return () => {
      doc.unsubscribe();
      doc.destroy();
      binding = null;
    };
  }, []);

  return (
    <div
      className={ cssClass || '' }
      style={ style || '' }>
      { text || <Spinner loading /> }
    </div>
  );
}

ShareDBBinding.propTypes = {
  doc: PropTypes.object,
  cssClass: PropTypes.string,
  style: PropTypes.object,
  flag: PropTypes.string,
};

export default ShareDBBinding;
