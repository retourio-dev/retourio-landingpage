'use client';
import React from 'react';
import { Zap } from 'lucide-react';

export default function Hero() {
  return (
    <header className="pt-48 pb-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-5 py-2 rounded-full mb-10">
          <Zap size={14} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            SaaS für E-Commerce Startups
          </span>
        </div>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85] text-slate-950">
          Retouren sind <br />
          <span className="text-blue-600">Vergangenheit.</span>
        </h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-14 leading-relaxed">
          Stoppe das manuelle E-Mail-Chaos. Automatisiere deinen gesamten
          Rücksendeprozess in unter 5 Minuten.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] shadow-2xl shadow-blue-500/40 hover:bg-blue-500 hover:-translate-y-1 transition-all">
            Kostenlos Starten
          </button>
          <button className="bg-white border-2 border-slate-100 text-slate-900 px-12 py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-50 transition-all">
            Demo Video
          </button>
        </div>
      </div>
    </header>
  );
}
