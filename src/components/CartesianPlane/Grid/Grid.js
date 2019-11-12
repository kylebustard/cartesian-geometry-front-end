import React from 'react';

function gapSize(s) {
  return function gapSizeTimesLineNumber(i) {
    return i * s;
  };
}

function makeGridLines(gridGapSize) {
  return function makeXLines(width) {
    const grid = [];
    const currentEdgeOfGrid = gapSize(gridGapSize);

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
  };
}

export default function Grid({ width, height, gapSize }) {
  const grid = makeGridLines(gapSize)(width)(height);

  return <g>{grid}</g>;
}
