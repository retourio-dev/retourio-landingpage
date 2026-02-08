'use client';
import React from 'react';

const partners = [
  { name: 'Shopify', color: 'hover:text-[#95BF47]' },
  { name: 'DHL', color: 'hover:text-[#FFCC00]' },
  { name: 'UPS', color: 'hover:text-[#351C15]' },
  { name: 'Hermes', color: 'hover:text-[#003399]' },
  { name: 'WooCommerce', color: 'hover:text-[#96588A]' },
  { name: 'PostAT', color: 'hover:text-[#FFD700]' }
];

export default function LogoStrip() {
  return (
    <div className="py-12 border-y border-slate-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center text-slate-400 mb-10">
          Nahtlose Integration mit deinem Stack
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40">
          {partners.map((p, i) => (
            <span 
              key={i} 
              className={`text-xl md:text-2xl font-black italic tracking-tighter uppercase cursor-default transition-all duration-300 ${p.color} hover:opacity-100 grayscale hover:grayscale-0`}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}