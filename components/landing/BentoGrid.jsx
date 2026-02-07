'use client';
import React from 'react';
import { ShieldCheck, Zap, BarChart3, Globe, Smartphone, MousePointerClick } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header passend zum Hero-Stil */}
        <div className="mb-16">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-slate-950">
            Maximale <br />
            <span className="text-blue-600">Kontrolle.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 h-auto md:h-[650px]">
          
          {/* Card 1: Hauptfeature (Breit) */}
          <div className="md:col-span-4 bg-slate-950 rounded-[3rem] p-12 text-white relative overflow-hidden group border border-slate-900 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 blur-[100px] pointer-events-none" />
            <ShieldCheck size={48} className="text-blue-500 mb-8" />
            <h3 className="text-4xl font-black tracking-tighter uppercase italic mb-4">Smart Rules Engine</h3>
            <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
              Vollautomatische Prüfung nach deinen Kriterien. Werden Fristen überschritten, lehnt das System die Retoure sofort ab.
            </p>
          </div>

          {/* Card 2: Analytics (Hoch) */}
          <div className="md:col-span-2 bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col justify-between group relative overflow-hidden">
            <BarChart3 size={48} className="text-white/40 group-hover:scale-125 transition-transform duration-700" />
            <div>
              <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-2 leading-none">Echtzeit Analyse</h3>
              <p className="text-blue-100 font-bold uppercase text-[10px] tracking-widest">Wissen, was zurückkommt.</p>
            </div>
          </div>

          {/* Card 3: Mobile (Klein/Quadratisch) */}
          <div className="md:col-span-2 bg-slate-50 rounded-[3rem] p-12 flex flex-col justify-between border border-slate-100 hover:border-blue-500 transition-colors group">
            <Smartphone size={40} className="text-blue-600 mb-6 group-hover:-rotate-12 transition-transform" />
            <h3 className="text-2xl font-black tracking-tighter uppercase italic text-slate-950">Self-Service Portal</h3>
          </div>

          {/* Card 4: Fast Sync (Breit) */}
          <div className="md:col-span-4 bg-slate-950 rounded-[3rem] p-12 flex items-center gap-12 group border border-slate-900 relative overflow-hidden">
            <div className="flex-1 z-10">
              <h3 className="text-3xl font-black tracking-tighter uppercase italic text-white mb-2">Sync in 5 Minuten</h3>
              <p className="text-slate-500 font-medium">Verbinde deinen Shopify Store ohne eine einzige Zeile Code.</p>
            </div>
            <Zap size={60} className="text-blue-500 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all" />
          </div>

        </div>
      </div>
    </section>
  );
}