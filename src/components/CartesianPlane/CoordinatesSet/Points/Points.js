import React from 'react';
import Point from './Point';

export default function Points({ set }) {
  return set.map((point, index) => <Point cx={point[0]} cy={point[1]} />);
}
