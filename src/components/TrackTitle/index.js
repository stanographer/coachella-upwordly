import React from 'react';

function TrackTitle(props) {
  return (
      <section>
        "{ props.track }" - { props.artist }
      </section>
  );
}

export default TrackTitle;
