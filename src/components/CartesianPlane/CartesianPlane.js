import React, { useState } from 'react';
import './CartesianPlane.css';
import Grid from './Grid/Grid';
import Axes from './Axes/Axes';
import CoordinatesSet from './CoordinatesSet/CoordinatesSet';

function coordinatePairToSVG(unit) {
  return function unitTimesCoordinatePair(pair) {
    return [pair[0] * unit, pair[1] * unit];
  };
}

export default function CartesianPlane() {
  const [state] = useState({
    width: 500,
    height: 500,
    arrowSize: 4
  });

  const { width, height, arrowSize } = state;
  const gridGapSize = (width || height) / 10;
  const origin = [width / 2, height / 2];
  const unit = 50;

  const setOne = [2, 0];
  const setTwo = [2, 4];
  const setThree = [4, 3];

  const set = [setOne, setTwo, setThree];
  const unitTimesCoordinatePair = coordinatePairToSVG(unit);
  const payload = set.map(p => unitTimesCoordinatePair(p));

  return (
    <svg
      aria-labelledby="title"
      role="presentation"
      version="1.1"
      baseProfile="full"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="title" lang="en">
        Cartesian Plane
      </title>
      <rect x="0" y="0" width={width} height={height} fill="lightblue" />
      <Grid id="Grid" width={width} height={height} gapSize={gridGapSize} />
      <Axes id="Axes" width={width} height={height} arrowSize={arrowSize} />
      <CoordinatesSet width={width} height={height} set={payload} />
    </svg>
  );
}
