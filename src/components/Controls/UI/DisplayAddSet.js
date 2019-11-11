import React from 'react';
import AddSet from '../Coordinates/Set/AddSet';

export default function DisplayAddSet({ numSets, addSet }) {
  const maxSets = 4;

  const sets = numSets < maxSets ? <AddSet addSet={addSet} /> : null;

  return <div id="addCoordinatesSet">{sets}</div>;
}
