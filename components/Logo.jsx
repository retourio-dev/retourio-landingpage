'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-10' }) {
  return (
    <div className={`inline-flex items-center group shrink-0 ${className}`}>
      <svg 
        // Wir nutzen eine kompaktere ViewBox (160x40), damit kein unnötiger Leerraum entsteht
        viewBox="0 0 160 40" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* Der blaue Pfeil - jetzt fest positioniert */}
        <g className="stroke-blue-600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M5 16H18.5C20.9853 16 23 18.0147 23 20.5C23 22.9853 20.9853 25 18.5 25H14" />
          <path d="M9 12L5 16L9 20" />
        </g>

        {/* Der Text RETOURIO - Näher am Icon (x="30") und vertikal perfekt zentriert (y="26") */}
        <text 
          x="30" 
          y="26" 
          className="fill-slate-950 font-black italic uppercase"
          style={{ 
            fontFamily: 'Arial, sans-serif', 
            fontSize: '19px', 
            letterSpacing: '-1px',
            fontWeight: 900
          }}
        >
          RETOURIO
        </text>

        {/* Der blaue Punkt - direkt hinter dem O platziert */}
        <circle 
          cx="140" 
          cy="24" 
          r="2.5" 
          className="fill-blue-600 transition-transform duration-300 group-hover:scale-150"
          style={{ transformOrigin: '140px 24px' }}
        />
      </svg>
    </div>
  );
}