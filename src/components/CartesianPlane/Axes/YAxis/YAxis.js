import React from 'react';

function makeYAxis(height) {
  const heightDividedByTwo = height / 2;

  return (
    <line
      x1={heightDividedByTwo}
      y1="0"
      x2={heightDividedByTwo}
      y2={height}
      stroke="black"
    />
  );
}

export default function YAxis({ height }) {
  const yAxis = makeYAxis(height);

  return <g>{yAxis}</g>;
}
