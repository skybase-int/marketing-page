'use client';
import React, { useState, useEffect } from 'react';

export const SkyLoading = () => {
  const [activePath, setActivePath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePath(prev => (prev + 1) % 6);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  const getPathStyle = (pathIndex: number) => {
    const totalPaths = 6;
    const nextPath = (activePath + 1) % totalPaths;
    const prevPath = (activePath + totalPaths - 1) % totalPaths;

    if (pathIndex === activePath) {
      return { fill: 'none' };
    } else if (pathIndex === nextPath) {
      return { fill: 'white', fillOpacity: '0.5' };
    } else if (pathIndex === prevPath) {
      return { fill: 'white', fillOpacity: '0.4' };
    } else {
      return { fill: 'white' };
    }
  };

  return (
    <svg width="44" height="44" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.9233 10.1182C4.82328 7.5031 7.50237 5.55663 10.5766 4.55775C13.6508 3.55887 16.9624 3.55887 20.0366 4.55775L15.3066 19.1152L2.9233 10.1182Z"
        style={getPathStyle(0)}
      />
      <path
        d="M22.2573 5.47777C25.8742 7.32121 28.6106 10.5259 29.8646 14.387L15.3066 19.1152L22.2573 5.47777Z"
        style={getPathStyle(1)}
      />
      <path
        d="M30.6132 19.1152C30.6132 21.5307 30.0415 23.912 28.9449 26.0642C27.8483 28.2165 26.2578 30.0787 24.3036 31.4985L15.3066 19.1152H30.6132Z"
        style={getPathStyle(2)}
      />
      <path
        d="M20.0366 33.6726C16.9624 34.6715 13.6508 34.6715 10.5766 33.6726L15.3066 19.1152L20.0366 33.6726Z"
        style={getPathStyle(3)}
      />
      <path
        d="M6.30961 31.4985C5.01016 30.5544 3.86741 29.4116 2.9233 28.1122L15.3066 19.1152L6.30961 31.4985Z"
        style={getPathStyle(4)}
      />
      <path
        d="M1.66832 26.0642C0.755758 24.2732 0.204895 22.32 0.0471852 20.3161C-0.110525 18.3122 0.128006 16.2969 0.749158 14.3852L15.3066 19.1152L1.66832 26.0642Z"
        style={getPathStyle(5)}
      />
    </svg>
  );
};
