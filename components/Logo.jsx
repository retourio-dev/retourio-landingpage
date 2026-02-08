'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    /* Die Klasse 'group' erlaubt es uns, Effekte auf Kinder anzuwenden, wenn der Container gehovert wird */
    <div className={`flex items-center group cursor-pointer ${className}`}>
      <svg 
        width="170" 
        height="40" 
        viewBox="0 0 170 40" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto overflow-visible"
      >
        <g transform="translate(10, 0)">
          {/* Blaues Pfeil-Icon */}
          <g transform="translate(0, 7)">
            <path 
              d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12" 
              className="stroke-blue-600 transition-all duration-500 group-hover:stroke-blue-500" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              fill="none"
            />
            <path 
              d="M7 5L3 9L7 13" 
              className="stroke-blue-600 transition-all duration-500 group-hover:stroke-blue-500" 
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
            className="fill-slate-950 transition-colors duration-500 group-hover:fill-slate-800"
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

          {/* Der pulsierende blaue Punkt */}
          <circle 
            cx="145" 
            cy="24.5" 
            r="2.5" 
            className="fill-blue-600 transition-all duration-500 group-hover:scale-[1.8] group-hover:fill-blue-500"
            style={{ 
              transformOrigin: '145px 24.5px',
              filter: 'drop-shadow(0 0 0px rgba(37, 99, 235, 0))'
            }}
            /* Wir fügen einen Inline-Style für den Glow hinzu, da Tailwind drop-shadow bei SVGs manchmal zickt */
            onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(37, 99, 235, 0.6))'}
            onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(37, 99, 235, 0))'}
          />
        </g>
      </svg>
    </div>
  );
}