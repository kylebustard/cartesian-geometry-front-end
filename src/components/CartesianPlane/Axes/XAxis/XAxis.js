import React from 'react';

function makeXAxis(width) {
  const widthDividedByTwo = width / 2;

  return (
    <line
      x1="0"
      y1={widthDividedByTwo}
      x2={width}
      y2={widthDividedByTwo}
      stroke="black"
    />
  );
}

export default function XAxis({ width }) {
  const xAxis = makeXAxis(width);

  return <g>{xAxis}</g>;
}
