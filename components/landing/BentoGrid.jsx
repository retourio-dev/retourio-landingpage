'use client';
import React from 'react';
import { ShieldCheck, Zap, BarChart3, Globe, Smartphone, MousePointerClick } from 'lucide-react';

export default function BentoGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[700px]">
          
          {/* Haupt-Feature: Smart Rules */}
          <div className="md:col-span-2 md:row-span-2 bg-slate-950 rounded-[2.5rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group border border-slate-900">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[120px] pointer-events-none" />
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-4xl font-black tracking-tighter uppercase italic leading-none mb-6">
                Intelligente <br /><span className="text-blue-500">Prüfregeln.</span>
              </h3>
              <p className="text-slate-400 text-lg font-medium max-w-xs leading-relaxed">
                Lehne Retouren automatisch ab, die außerhalb deiner Fristen liegen. 100% Kontrolle, 0% Aufwand.
              </p>
            </div>
          </div>

          {/* Feature: Analytics */}
          <div className="md:col-span-2 bg-blue-600 rounded-[2.5rem] p-10 text-white flex items-center justify-between group overflow-hidden shadow-2xl shadow-blue-500/20">
            <div className="z-10">
              <h3 className="text-2xl font-black uppercase italic mb-2">Live Insights</h3>
              <p className="text-blue-100 font-medium">Alle Quoten in Echtzeit im Blick.</p>
            </div>
            <BarChart3 size={80} className="text-blue-400/30 -mr-4 group-hover:scale-110 transition-transform duration-700" />
          </div>

          {/* Feature: Mobile Portale */}
          <div className="md:col-span-1 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 hover:border-blue-200 transition-colors group">
            <Smartphone size={32} className="text-blue-600 mb-6 group-hover:-rotate-12 transition-transform" />
            <h3 className="text-xl font-black uppercase italic text-slate-950">Mobile First</h3>
            <p className="text-slate-500 text-sm font-bold uppercase mt-2">Optimiert für iOS & Android.</p>
          </div>

          {/* Feature: One-Click Integration */}
          <div className="md:col-span-1 bg-slate-950 rounded-[2.5rem] p-10 flex flex-col justify-between group border border-slate-900">
            <Zap size={32} className="text-blue-500 group-hover:animate-pulse" />
            <div>
              <h3 className="text-xl font-black uppercase italic text-white leading-tight">Fast-Sync</h3>
              <p className="text-slate-500 text-xs font-black uppercase tracking-widest mt-2">Shopify in 5 Min.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}