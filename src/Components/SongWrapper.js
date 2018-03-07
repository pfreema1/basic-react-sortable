import React from 'react';
import SongBuilderArea from './SongBuilderArea';

const styling = {
  height: '80vh',
  width: '100vw',
  background: 'RGBA(87, 141, 160, 1.00)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const SongWrapper = ({ songArr }) => {
  return (
    <div style={styling}>
      <SongBuilderArea songArr={songArr} />
    </div>
  );
};

export default SongWrapper;
