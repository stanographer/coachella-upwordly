import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// only importing what we need
import PulseLoader from 'react-spinners/PulseLoader';

const override = `
  display: block;
  margin: 0 auto;
  padding: 75px 0;
  text-align: center;
`;

const Spinner = props => {
  const { loading } = props;

  return (
    <Fragment>
      {loading && (
        <PulseLoader
          css={override}
          size={15}
          margin={3}
          color="#000000"
          loading={loading}
        />
      )}
    </Fragment>
  );
};

export default Spinner;

Spinner.propTypes = {
  loading: PropTypes.bool,
};
