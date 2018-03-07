import React from 'react';
import Pattern from './Pattern';

const styling = {
  height: '20vh',
  width: '100vw',
  background: 'RGBA(127, 195, 216, 1.00)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const PatternsWrapper = ({ patterns }) => {
  return (
    <div style={styling}>
      {patterns.map((pattern, index) => <Pattern name={pattern.name} />)}
    </div>
  );
};

export default PatternsWrapper;
