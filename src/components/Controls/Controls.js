import React, { useState } from 'react';
import DisplayCoordinates from './UI/DisplayCoordinates';

export default function Controls() {
  const [numSets, setState] = useState(1);

  function addSet() {
    return setState(numSets + 1);
  }

  return <DisplayCoordinates numSets={numSets} addSet={addSet} />;
}
