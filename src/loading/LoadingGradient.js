import React from 'react'

const animation = 'spin 1.6s linear infinite';

const LoadingGradient = props => {
  return props.definitions.map(({ x, y, start, end, transformOrigin }) => [
    <linearGradient 
      id={`gradient-${x}-${y}`} 
      key="gradient"
    >
      <stop 
        offset="0%" 
        stopColor="#fff" 
        stopOpacity={start} 
      />
      <stop 
        offset="100%" 
        stopColor="#fff" 
        stopOpacity={end} 
      />
    </linearGradient>,
    <rect
      key="rectangle"
      x={x}
      y={y}
      width={60}
      height={60}
      fill={`url(#gradient-${x}-${y})`}
      style={{
        animation: `${animation} reverse -0.2s`,
        transformOrigin: `60px 60px`,
      }}
    />,
  ]);
};

export default LoadingGradient;