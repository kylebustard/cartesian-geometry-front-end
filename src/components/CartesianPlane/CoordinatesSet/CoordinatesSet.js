import React from 'react';
import Points from './Points/Points';

export default function CoordinatesSet() {
  const setOne = [200, 200];
  const setTwo = [300, 350];
  const setThree = [100, 150];

  const set = [setOne, setTwo, setThree];

  return <Points set={set} />;
}
