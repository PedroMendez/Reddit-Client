import React from 'react'
import LoadingGradient from './LoadingGradient'

const definitions = [
  { x: 0, y: 60, start: 0.5, end: 0 },
  { x: 0, y: 0, start: 0.5, end: 0.75 },
  { x: 60, y: 0, start: 0.75, end: 0.9 },
  { x: 60, y: 60, start: 0.9, end: 1 },
];

const LoadingSpinner = () => {
  return (
    <svg className="relative left-37" viewBox="0 0 500 500" fill="transparent">
      <circle
        r={42}
        cx={60}
        cy={60}
        stroke="#133C99"
        strokeWidth={6}
        strokeDasharray="2 9.5"
      />
      <LoadingGradient definitions={definitions} />
      <linearGradient id="arc-gradient">
        <stop offset="0%" stopOpacity="0" />
        <stop offset="49.99%" stopOpacity="0" />
        <stop offset="50%" stopColor="#133C99" />
        <stop offset="100%" stopColor="#133C99" />
      </linearGradient>
    </svg>
  );
};

export default LoadingSpinner;
