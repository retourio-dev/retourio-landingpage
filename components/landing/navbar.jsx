'use client';
import React from 'react';
import { RetourioLogo } from '../Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/"><RetourioLogo /></a>
        
        <div className="flex items-center gap-8">
          <a
            href="/changelog"
            className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            Changelog
          </a>
          <a
            href="#pricing"
            className="hidden md:block text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-colors"
          >
            Preise
          </a>
          
          {/* Link zum externen Kundenportal auf der Subdomain */}
          <a href="https://portal.retourio.app" target="_blank" rel="noopener noreferrer">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all">
              Kundenportal
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}