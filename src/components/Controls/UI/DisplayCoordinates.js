import React from 'react';
import Set from '../Coordinates/Set/Set';
import DisplayAddSet from './DisplayAddSet';

export default function DisplayCoordinates({ numSets, addSet }) {
  const coordinatesSets = [];

  for (let i = 0; i < numSets; i++) {
    coordinatesSets.push(
      <li key={i}>
        <Set setId={i + 1} />
        <DisplayAddSet numSets={numSets} addSet={addSet} />
      </li>
    );
  }

  return <ul>{coordinatesSets}</ul>;
}
