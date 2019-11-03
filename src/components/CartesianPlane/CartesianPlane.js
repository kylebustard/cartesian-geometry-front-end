import React, { Fragment } from 'react';
import './CartesianPlane.css';
import Grid from './Grid/Grid';
import XAxis from './XAxis/XAxis';
import YAxis from './YAxis/YAxis';

export default function CartesianPlane() {
  return (
    <div id="CartesianPlane">
      <YAxis id="YAxis" />
      <XAxis id="XAxis" />
      <Grid id="Grid" />
    </div>
  );
}
