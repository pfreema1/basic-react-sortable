import React, { Component } from 'react';
import { createStore } from 'redux';
import './App.css';
import PatternsWrapper from './Components/PatternsWrapper';
import SongWrapper from './Components/SongWrapper';
import { Provider } from 'react-redux';

const patternNameArr = [
  'Pattern1',
  'Pattern2',
  'Pattern3',
  'Pattern4',
  'Pattern5'
];

const initializePatterns = () => {
  let patterns = [];
  for (let i = 0; i < 5; i++) {
    let tempPattern = {};

    tempPattern.name = patternNameArr[i];

    patterns = patterns.concat(tempPattern);
  }

  return patterns;
};

const initialState = {
  patternsArr: initializePatterns(),
  songArr: []
};

/**********
 * Reducer
 */

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SONG_UPDATED': {
      const { listIdArr } = action;
      const { patternsArr } = state;

      let newSongArr = listIdArr.map(listId => {
        let patternToBeAdded = patternsArr.find(pattern => {
          return pattern.name === listId;
        });

        return patternToBeAdded;
      });

      return {
        ...state,
        songArr: newSongArr
      };
    }
    default:
      return state;
  }
};

let store = createStore(reducer);
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    let state = store.getState();
    let patterns = state.patternsArr;

    return (
      <Provider store={store}>
        <div>
          <PatternsWrapper patterns={patterns} />
          <SongWrapper />
        </div>
      </Provider>
    );
  }
}

export default App;
