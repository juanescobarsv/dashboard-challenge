import React, { useEffect, useRef } from 'react';

interface CircleProgressProps {
  percentage: number;
  used: number;
  total: number;
  categoriesData: { sizeGB: number; color: string }[];
}

export const CircleProgress: React.FC<CircleProgressProps> = ({
  percentage,
  used,
  total,
  categoriesData,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radius = 60;
  const center = 75;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background track (full gray circle)
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 10;
    ctx.stroke();

    let startAngle = 0;
    const totalUsedGB = categoriesData.reduce((sum, cat) => sum + cat.sizeGB, 0);
    const totalGBAsNumber = parseFloat(total.toString()); // Ensure total is a number

    categoriesData.forEach((category) => {
      const fraction = category.sizeGB / totalGBAsNumber; // Calculate fraction of the total
      const angle = fraction * 2 * Math.PI;
      const endAngle = startAngle + angle;

      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, endAngle);
      ctx.strokeStyle = category.color;
      ctx.lineWidth = 10;
      ctx.lineCap = 'round'; // Optional: round the ends
      ctx.stroke();

      startAngle = endAngle;
    });

    // Center text
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, center, center - 10);

    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#777';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Used', center, center + 10);
  }, [percentage, total, categoriesData]);

  return <canvas ref={canvasRef} width={150} height={150}></canvas>;
};