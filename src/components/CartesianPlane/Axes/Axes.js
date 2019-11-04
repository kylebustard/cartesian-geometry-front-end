import React, { Fragment } from 'react';
import XAxis from './XAxis/XAxis';
import YAxis from './YAxis/YAxis';
import Arrows from './Arrows/Arrows';

export default function Axes({ width, height, arrowSize }) {
  return (
    <Fragment>
      <XAxis width={width} />
      <YAxis height={height} />
      <Arrows width={width} height={height} size={arrowSize} />
    </Fragment>
  );
}
