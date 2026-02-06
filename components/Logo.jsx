'use client';
import React from 'react';

export function RetourioLogo({ className = 'h-8' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="w-8 h-8 text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 5L3 9L7 13"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="11"
          y="15"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.3"
        />
      </svg>
      <span className="text-xl font-black tracking-tighter text-slate-900 uppercase italic transition-colors">
        retourio<span className="text-blue-600">.</span>
      </span>
    </div>
  );
}
