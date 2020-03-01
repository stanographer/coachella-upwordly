import React from 'react';

const Dates = (props) => {
  const { dates } = props;

  return (
    <span style={ { 
      font: 'Poppins', 
      fontSize: '1.7em', 
      fontWeight: 500, 
      color: '#b44830', 
      marginLeft: '1.5em' 
      } }>
      {dates}
    </span>
  )
}

export default Dates;
