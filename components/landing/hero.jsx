'use client';
import React from 'react';
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    /* Abstände für Mobile (pt-32) und Desktop (md:pt-48) optimiert */
    <header className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full mb-8 md:mb-10 transition-transform hover:scale-105">
          <Zap size={14} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            SaaS für E-Commerce Startups
          </span>
        </div>
        
        {/* Responsive Schriftgröße: text-5xl (Mobile) bis text-9xl (Desktop) */}
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9] text-slate-950">
          Retouren sind <br />
          <span className="text-blue-600">Vergangenheit.</span>
        </h1>
        
        {/* Max-width sorgt dafür, dass der Text auf Mobile nicht an den Rand klatscht */}
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 md:mb-14 leading-relaxed px-4">
          Stoppe das manuelle E-Mail-Chaos. Automatisiere deinen gesamten
          Rücksendeprozess in unter 5 Minuten.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6 sm:px-0">
          <button className="bg-blue-600 text-white px-10 md:px-12 py-5 md:py-6 rounded-[2rem] font-black uppercase text-[10px] md:text-xs tracking-[0.2em] shadow-2xl shadow-blue-500/40 hover:bg-blue-500 hover:-translate-y-1 transition-all">
            Kostenlos Starten
          </button>
          <button className="bg-white border-2 border-slate-100 text-slate-900 px-10 md:px-12 py-5 md:py-6 rounded-[2rem] font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-slate-50 transition-all">
            Demo Video
          </button>
        </div>
      </div>
    </header>
  );
}