import React from 'react';

export default function Grid(props) {
  console.log('props ', props);
  let grid = [];
  let y = 700;

  for (let i = 1; i < Number(props.w); i++) {
    let x = i * 10;
    console.log('X: ', x);
    grid.push(
      <line
        x1={x.toString()}
        y1={y.toString()}
        x2={x.toString()}
        y2={y.toString()}
        stroke="black"
      />
    );
  }

  console.log(grid);
  return <g>{grid}</g>;
}
