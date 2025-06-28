import React from 'react';

export function Logo() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo"
      width={40}
      height={40}
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="spotifyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1ed760" />
          <stop offset="100%" stopColor="#1db954" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="100" fill="url(#spotifyGrad)" />
      <g transform="translate(100, 100)">
        <circle cx="0" cy="0" r="70" fill="black" />
        <circle cx="0" cy="0" r="40" fill="#1db954" />
        <circle cx="0" cy="0" r="20" fill="white" />
        <circle cx="0" cy="0" r="8" fill="black" />
      </g>
    </svg>
  );
}