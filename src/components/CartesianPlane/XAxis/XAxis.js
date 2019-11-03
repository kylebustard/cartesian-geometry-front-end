import React, { useRef, useEffect } from 'react';

export default function XAxis() {
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

    ctx.fillStyle = 'orange';
    ctx.fillRect(100, 100, 150, 100);
  });

  return (
    <canvas ref={canvasRef} width="700px" height="700px">
      X-Axis
    </canvas>
  );
}
