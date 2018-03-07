import React from 'react';
import Pattern from './Pattern';
import ReactSortable from 'react-sortablejs';

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
    <ReactSortable
      options={{
        animation: 150,
        sort: false,
        group: {
          name: 'clone1',
          pull: 'clone',
          put: false
        }
      }}
      style={styling}
    >
      {patterns.map((pattern, index) => (
        <Pattern key={index} name={pattern.name} />
      ))}
    </ReactSortable>
  );
};

export default PatternsWrapper;
