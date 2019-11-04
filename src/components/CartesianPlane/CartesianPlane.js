import React from 'react';
import './CartesianPlane.css';
import Grid from './Grid/Grid';
import XAxis from './XAxis/XAxis';
import YAxis from './YAxis/YAxis';

export default function CartesianPlane() {
  const w = '600';
  const h = '600';

  return (
    <svg
      aria-labelledby="title"
      role="presentation"
      version="1.1"
      baseProfile="full"
      width={w}
      height={h}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="title" lang="en">
        Cartesian Plane
      </title>
      <rect x="0" y="0" width={w} height={h} fill="lightblue" />
      <Grid id="Grid" width={w} height={h} />
      <XAxis id="XAxis" width={w} />
      <YAxis id="YAxis" height={h} />
    </svg>
  );
}
