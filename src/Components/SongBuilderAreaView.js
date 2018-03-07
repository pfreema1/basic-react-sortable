import React from 'react';
import ReactSortable from 'react-sortablejs';

const styling = {
  height: '200px',
  width: '50vw',
  background: 'RGBA(65, 150, 239, 1.00)',
  border: '5px dashed white',
  transition: 'all 0.5s',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  color: 'white',
  overflow: 'scroll'
};

const SongBuilderAreaView = ({ songArr, onAdd, onUpdate }) => {
  return (
    <ReactSortable
      style={styling}
      options={{
        animation: 150,
        group: {
          name: 'clone1',
          pull: false,
          put: true
        },
        onAdd: onAdd,
        onUpdate: onUpdate
      }}
    >
      {' '}
    </ReactSortable>
  );
};

export default SongBuilderAreaView;
