'use client';
import React from 'react';
import { RetourioLogo } from '../Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo-Größe auf h-12 für Desktop und h-10 für Mobile erhöht */}
        <a href="/" className="transition-transform hover:opacity-80">
          <RetourioLogo className="h-10 md:h-12" />
        </a>
        
        <div className="flex items-center gap-4 md:gap-8">
          <a
            href="/changelog"
            className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            Changelog
          </a>
          <a
            href="/#pricing"
            className="hidden sm:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            Preise
          </a>
          
          <a href="https://portal.retourio.app" target="_blank" rel="noopener noreferrer">
            <button className="bg-slate-900 text-white px-4 md:px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
              Portal
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}