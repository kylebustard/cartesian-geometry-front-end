import React, { useState } from 'react';
import './CartesianPlane.css';
import Grid from './Grid/Grid';
import Axes from './Axes/Axes';
import CoordinatesSet from './CoordinatesSet/CoordinatesSet';

export default function CartesianPlane() {
  const [state] = useState({
    width: 400,
    height: 400,
    arrowSize: 4
  });

  const { width, height, arrowSize } = state;

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
      <Grid id="Grid" width={width} height={height} />
      <Axes id="Axes" width={width} height={height} arrowSize={arrowSize} />
      <CoordinatesSet />
    </svg>
  );
}
