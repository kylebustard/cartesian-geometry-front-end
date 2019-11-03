import React, { useRef, useEffect } from 'react';

export default function YAxis() {
  const canvasRef = useRef();

  function createGrid() {
    const points = [];
    const count = 5;

    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = x / count;
        const v = y / count;
        points.push([u, v]);
      }
    }

    return points;
  }

  const points = createGrid();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'lightcoral';
    ctx.fillRect(100, 100, 150, 100);
  });

  return (
    <canvas ref={canvasRef} style={{ width: '300px', height: '300px' }}>
      Y-Axis
    </canvas>
  );
}
