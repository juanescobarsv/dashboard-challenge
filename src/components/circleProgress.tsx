import React, { useEffect, useRef } from 'react';

interface CircleProgressProps {
  percentage: number;
  used: number;
  total: number;
}

export const CircleProgress: React.FC<CircleProgressProps> = ({ percentage, used, total }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radius = 60;
  const center = 75;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background track
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 10;
    ctx.stroke();

    // Calculate angles for segments (you'll need to define colors based on usage)
    const percentageAsDecimal = percentage / 100;
    const endAngle = percentageAsDecimal * 2 * Math.PI;

    // Example segmentation (adjust colors and logic as needed)
    const segments = [
      { percentage: Math.min(0.4, percentageAsDecimal), color: '#64B5F6' }, // Up to 40%
      { percentage: Math.max(0, Math.min(0.3, percentageAsDecimal - 0.4)), color: '#A5D6A7' }, // 40% to 70%
      { percentage: Math.max(0, percentageAsDecimal - 0.7), color: '#FFB74D' }, // Above 70%
    ];

    let startAngle = 0;
    segments.forEach(segment => {
      const segmentAngle = segment.percentage * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(center, center, radius, startAngle, startAngle + segmentAngle);
      ctx.strokeStyle = segment.color;
      ctx.lineWidth = 10;
      ctx.stroke();
      startAngle += segmentAngle;
    });

    // Center text
    ctx.font = 'bold 24px sans-serif';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${percentage}%`, center, center - 10);

    ctx.font = '14px sans-serif';
    ctx.fillStyle = '#777';
    ctx.fillText('Used', center, center + 10);

  }, [percentage]);

  return (
    <canvas ref={canvasRef} width={150} height={150}></canvas>
  );
};