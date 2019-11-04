import React from 'react';

function pointsValues(leftX, leftY, tipX, tipY, rightX, rightY) {
  return `
  ${leftX} ${leftY},
  ${tipX} ${tipY},
  ${rightX} ${rightY}
    `;
}

function add(n) {
  return function addend(z) {
    return n + z;
  };
}

function subtract(n) {
  return function subtrahend(z) {
    return n - z;
  };
}

function makeArrows(width, height, arrowSize) {
  const widthDividedByTwo = width / 2;
  const heightDividedByTwo = height / 2;
  const pointValueOne = arrowSize;
  const pointValueTwo = subtract(heightDividedByTwo)(arrowSize);
  const pointValueThree = add(heightDividedByTwo)(arrowSize);
  const pointValueFour = subtract(width)(arrowSize);
  const pointValueFive = add(widthDividedByTwo)(arrowSize);
  const pointValueSix = subtract(widthDividedByTwo)(arrowSize);
  const pointValueSeven = subtract(height)(arrowSize);

  const negativeX = pointsValues(
    pointValueOne,
    pointValueTwo,
    0,
    heightDividedByTwo,
    pointValueOne,
    pointValueThree
  );

  const positiveX = pointsValues(
    width,
    heightDividedByTwo,
    pointValueFour,
    pointValueTwo,
    pointValueFour,
    pointValueThree
  );

  const positiveY = pointsValues(
    widthDividedByTwo,
    0,
    pointValueFive,
    pointValueOne,
    pointValueSix,
    pointValueOne
  );

  const negativeY = pointsValues(
    pointValueFive,
    pointValueSeven,
    widthDividedByTwo,
    height,
    pointValueSix,
    pointValueSeven
  );

  const arrows = [negativeX, positiveX, negativeY, positiveY];
  const arrowList = arrows.map(p => <polygon points={p} stroke="black" />);
  return arrowList;
}

export default function Arrows({ width, height, size }) {
  return makeArrows(width, height, size);
}
