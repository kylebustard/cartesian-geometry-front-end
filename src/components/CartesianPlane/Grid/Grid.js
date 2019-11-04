import React from 'react';

function gridGapSize(s) {
  return function gapSizeTimesLineNumber(i) {
    return i * s;
  };
}

function makeLines(width) {
  const grid = [];
  const currentEdgeOfGrid = gridGapSize(10);

  for (let i = 0; currentEdgeOfGrid(i) < width; i++) {
    grid.push(
      <line
        key={i}
        x1={currentEdgeOfGrid(i)}
        y1="0"
        x2={currentEdgeOfGrid(i)}
        y2={width}
        stroke="silver"
      />
    );
  }
  const xLineCount = grid.push;

  return function makeYLines(height) {
    for (let i = 0; currentEdgeOfGrid(i) < height; i++) {
      grid.push(
        <line
          key={i + xLineCount}
          x1="0"
          y1={currentEdgeOfGrid(i)}
          x2={height}
          y2={currentEdgeOfGrid(i)}
          stroke="silver"
        />
      );
    }
    return grid;
  };
}

export default function Grid({ width, height }) {
  const grid = makeLines(width)(height);

  return <g>{grid}</g>;
}
