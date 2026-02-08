'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Das neue SVG Design mit 170x40 Viewbox */}
      <svg 
        viewBox="0 0 170 40" 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-full w-auto"
        fill="none"
      >
        <g transform="translate(10, 0)">
          {/* Das Icon-Element */}
          <g transform="translate(0, 6)">
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
            {/* Das unsichtbare Rechteck wurde weggelassen, da opacity=0 */}
          </g>

          {/* Der Retourio Text-Teil */}
          <text 
            x="30" 
            y="28" 
            className="fill-slate-950 font-black italic uppercase"
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              fontSize: '20px', 
              letterSpacing: '-1px' 
            }}
          >
            RETOURIO
          </text>

          {/* Der markante blaue Punkt am Ende */}
          <circle 
            cx="142.5" 
            cy="26.5" 
            r="2.2" 
            className="fill-blue-600" 
          />
        </g>
      </svg>
    </div>
  );
}