import React, { useRef, useEffect } from 'react';

export default function Grid() {
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
  console.log(points);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    points.forEach(([u, v]) => {
      const x = u * canvas.width;
      const y = v * canvas.height;

      ctx.beginPath();
      ctx.arc(x, y, 50, 0, Math.PI * 2, false);
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 20;
      ctx.stroke();
    });
  });

  return (
    <canvas id="Grid" ref={canvasRef} width="700px" height="700px">
      Cartesian Plane Grid
    </canvas>
  );
}
