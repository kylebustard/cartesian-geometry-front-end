import React from 'react';

export default function Point({ cx, cy }) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r="2"
      stroke="red"
      fill="transparent"
      stroke-width="2"
    />
  );
}
