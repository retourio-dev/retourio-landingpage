'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    /* Wir nutzen inline-flex und verhindern das Schrumpfen des Logos im Header */
    <div className={`inline-flex items-center group cursor-pointer shrink-0 ${className}`}>
      <svg 
        // Wir entfernen feste width/height und nutzen nur die viewBox für perfekte Skalierung
        viewBox="0 0 170 40" 
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // preserveAspectRatio garantiert, dass das Logo nicht verzerrt wird
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-auto overflow-visible"
      >
        <g transform="translate(10, 0)">
          {/* Blaues Pfeil-Icon - Position 0, 7 für exakte Zentrierung */}
          <g transform="translate(0, 7)">
            <path 
              d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12" 
              className="stroke-blue-600 transition-all duration-500 group-hover:stroke-blue-500" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
            <path 
              d="M7 5L3 9L7 13" 
              className="stroke-blue-600 transition-all duration-500 group-hover:stroke-blue-500" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </g>

          {/* RETOURIO Text - dominant-baseline hilft bei der konsistenten Ausrichtung auf Handys */}
          <text 
            x="32" 
            y="27" 
            dominantBaseline="middle"
            className="fill-slate-950 transition-colors duration-500 group-hover:fill-slate-800"
            style={{ 
              fontFamily: 'Arial, sans-serif', 
              fontSize: '20px', 
              fontWeight: 900, 
              fontStyle: 'italic', 
              textTransform: 'uppercase', 
              letterSpacing: '-1px',
              WebkitFontSmoothing: 'antialiased' // Besseres Rendering auf iPhones
            }}
          >
            RETOURIO
          </text>

          {/* Der blaue Punkt am Ende */}
          <circle 
            cx="145" 
            cy="24.5" 
            r="2.5" 
            className="fill-blue-600 transition-all duration-500 group-hover:scale-[1.8] group-hover:fill-blue-500"
            style={{ 
              transformOrigin: '145px 24.5px'
            }}
          />
        </g>
      </svg>
    </div>
  );
}