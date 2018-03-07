import React from 'react';

const styling = {
  height: '200px',
  width: '80vw',
  background: 'RGBA(65, 150, 239, 1.00)',
  border: '5px dashed white',
  transition: 'all 0.5s',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'white'
};

const SongBuilderArea = ({ songArr }) => {
  return <div style={styling}>drag songs here breh</div>;
};

export default SongBuilderArea;
