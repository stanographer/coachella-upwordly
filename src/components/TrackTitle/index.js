import React from 'react';

function TrackTitle(props) {
  return (
      <h3>
        "{ props.track }" - { props.artist }
      </h3>
  );
}

export default TrackTitle;
