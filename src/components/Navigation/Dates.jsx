import React from 'react';

const Dates = (props) => {
  const { dates } = props;

  return (
    <span style={ {
      font: 'Poppins',
      fontSize: '16.7px',
      fontWeight: 500,
      color: '#b44830',
      } }>
      {dates}
    </span>
  )
}

export default Dates;
