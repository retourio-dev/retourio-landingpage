'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [returnCount, setReturnCount] = useState(60);

  // Berechnungsgrundlagen
  const hoursSaved = (returnCount * 0.25).toFixed(1);
  const moneySaved = (returnCount * 12.5).toLocaleString('de-DE'); 

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] md:rounded-[4rem] p-8 md:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
        
        {/* Subtiler Glow Effekt im Hintergrund */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/10 blur-[120px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center relative z-10">
          
          {/* LINKE SEITE: INPUT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
              <TrendingUp size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">ROI Kalkulator</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-[0.9] italic uppercase">
              Zeit ist Geld. <br /> 
              <span className="text-blue-500">Spare beides.</span>
            </h2>
            
            <p className="text-slate-400 font-medium text-lg mb-12 leading-relaxed max-w-md">
              Stoppe die manuelle Bearbeitung. Automatisiere deinen Loop und skaliere ohne Kopfschmerzen.
            </p>

            <div className="space-y-10">
              <div className="relative">
                <input
                  type="range"
                  min="10"
                  max="5000" // Auf 5000 erhöht, um die Breite zu testen
                  step="10"
                  value={returnCount}
                  onChange={(e) => setReturnCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1">Aktuelles Volumen</span>
                  <span className="text-2xl font-black tabular-nums text-white">
                    {returnCount.toLocaleString('de-DE')} <span className="text-blue-500 text-sm">Retouren / Monat</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RECHTE SEITE: RECHTECKIGE ERGEBNIS-BOXEN */}
          <div className="flex flex-col gap-6">
            
            {/* Zeit-Box (Horizontal Rechteckig) */}
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-blue-500/50 transition-all group w-full">
              <div className="flex items-center gap-6">
                <div className="bg-blue-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <BarChart3 className="text-blue-500" size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Vermeidbarer Aufwand</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums whitespace-nowrap">
                    ~{hoursSaved}h <span className="text-lg text-slate-400 font-bold uppercase tracking-normal">/ Monat</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Geld-Box (Horizontal Rechteckig) */}
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-green-500/50 transition-all group w-full">
              <div className="flex items-center gap-6">
                <div className="bg-green-500/20 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                  <ShieldCheck className="text-green-500" size={32} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Potenzielle Ersparnis</p>
                  <p className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums text-green-400 whitespace-nowrap">
                    {moneySaved}€ <span className="text-lg text-slate-400 font-bold uppercase tracking-normal">/ Jahr</span>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}