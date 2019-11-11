import React, { useState, Fragment } from 'react';
import Pair from '../Pair/Pair';
import DisplayAddPair from '../../UI/DisplayAddPair';

export default function Set({ setId }) {
  const [state, setState] = useState({ numPairs: 1, maxPairs: 3 });
  const { numPairs, maxPairs } = state;
  const coordinatePairs = [];

  function addPair() {
    return setState({ ...state, numPairs: numPairs + 1 });
  }

  for (let i = 0; i < numPairs; i++) {
    coordinatePairs.push(
      <li key={i}>
        <Pair pairId={i} />
      </li>
    );
  }

  return (
    <Fragment>
      <form
        onSubmit={event => {
          event.preventDefault();
          for (let i = 0; i < numPairs; i++) {
            let x = event.target.elements[`${i}-x`];
            let y = event.target.elements[`${i}-y`];
            console.log({
              setId: setId,
              x: x.value,
              y: y.value
            });
          }
        }}
      >
        Set–{setId}
        <ul setid={setId}>{coordinatePairs}</ul>
        <button type="submit">Submit</button>
      </form>
      <DisplayAddPair
        numPairs={numPairs}
        addPair={addPair}
        maxPairs={maxPairs}
      />
    </Fragment>
  );
}
