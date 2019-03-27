import React from 'react';

function TrackTitle(props) {
  return (
      <h4>
        "{ props.track }" - { props.artist }
      </h4>
  );
}

export default TrackTitle;
