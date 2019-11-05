import React from 'react';
import AddPair from '../Coordinates/Pair/AddPair';

export default function DisplayAddPair({ numPairs, addPair, maxPairs }) {
  const pairs = numPairs < maxPairs ? <AddPair addPair={addPair} /> : null;

  return <div id="addCoordinatesPair">{pairs}</div>;
}
