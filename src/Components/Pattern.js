import React from 'react';

const styling = {
  background: 'RGBA(198, 57, 67, 1.00)',
  width: '100px',
  height: '70px',
  color: 'white',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'move'
};

const Pattern = ({ name }) => {
  return (
    <div id={name} style={styling}>
      {name}
    </div>
  );
};

export default Pattern;
