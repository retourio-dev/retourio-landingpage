'use client';
import React from 'react';

export function RetourioLogo({ className = '' }) {
  return (
    /* Der Container hält alles in einer Zeile (flex) und verhindert Umbrüche (whitespace-nowrap) */
    <div className={`inline-flex items-center gap-1.5 group shrink-0 select-none ${className}`}>
      
      {/* 1. Das Icon: Ein kleines, festes SVG nur für den Pfeil */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="text-blue-600 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M3 10H14.5C16.9853 10 19 12.0147 19 14.5C19 16.9853 16.9853 19 14.5 19H11" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M7 6L3 10L7 14" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>

      {/* 2. Der Text: Echtes HTML für maximale Stabilität auf Mobile */}
      <span 
        className="text-slate-950 font-[900] italic uppercase tracking-tighter leading-none"
        style={{ 
          fontFamily: 'Arial, sans-serif', 
          fontSize: '1.25rem' // Entspricht ca. 20px
        }}
      >
        RETOURIO
      </span>

      {/* 3. Der Punkt: Ein CSS-Element, das IMMER direkt hinter dem Text bleibt */}
      <span className="w-[5px] h-[5px] bg-blue-600 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
      
    </div>
  );
}