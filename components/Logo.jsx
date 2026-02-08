'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        width="170" 
        height="40" 
        viewBox="0 0 170 40" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        <g transform="translate(10, 0)">
          {/* Blaues Pfeil-Icon */}
          <g transform="translate(0, 7)">
            <path 
              d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12" 
              className="stroke-blue-600" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            />
            <path 
              d="M7 5L3 9L7 13" 
              className="stroke-blue-600" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            />
          </g>

          {/* RETOURIO Text */}
          <text 
            x="32" 
            y="27" 
            className="fill-slate-950"
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              fontSize: '20px', 
              fontWeight: 900, 
              fontStyle: 'italic', 
              textTransform: 'uppercase', 
              letterSpacing: '-1px' 
            }}
          >
            RETOURIO
          </text>

          {/* Der blaue Punkt am Ende */}
          <circle 
            cx="145" 
            cy="24.5" 
            r="2.5" 
            className="fill-blue-600" 
          />
        </g>
      </svg>
    </div>
  );
}