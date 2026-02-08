'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck, TrendingUp } from 'lucide-react';

export default function ROICalculator() {
  const [returnCount, setReturnCount] = useState(60);
  const hoursSaved = (returnCount * 0.25).toFixed(1);
  const moneySaved = (returnCount * 12.5).toLocaleString('de-DE'); 

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
        
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6">
              <TrendingUp size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">ROI Kalkulator</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.95] italic uppercase">
              Zeit ist Geld. <br /> 
              <span className="text-blue-500">Spare beides.</span>
            </h2>
            
            <p className="text-slate-400 font-medium text-base md:text-lg mb-10 leading-relaxed max-w-md">
              Stoppe die manuelle Bearbeitung. Automatisiere deinen Loop.
            </p>

            <div className="space-y-8">
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={returnCount}
                onChange={(e) => setReturnCount(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex flex-col">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-1 text-center md:text-left">Aktuelles Volumen</span>
                <span className="text-xl md:text-2xl font-black tabular-nums text-white text-center md:text-left">
                  {returnCount.toLocaleString('de-DE')} <span className="text-blue-500 text-sm">Retouren / Mo</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 group w-full">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                <div className="bg-blue-500/20 p-4 rounded-2xl"><BarChart3 className="text-blue-500" size={28} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Vermeidbarer Aufwand</p>
                  <p className="text-3xl md:text-5xl font-black tracking-tighter tabular-nums">~{hoursSaved}h <span className="text-xs md:text-lg text-slate-400 font-bold uppercase tracking-normal">/ Monat</span></p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 group w-full">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                <div className="bg-green-500/20 p-4 rounded-2xl"><ShieldCheck className="text-green-500" size={28} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Potenzielle Ersparnis</p>
                  <p className="text-3xl md:text-5xl font-black tracking-tighter tabular-nums text-green-400">{moneySaved}€ <span className="text-xs md:text-lg text-slate-400 font-bold uppercase tracking-normal">/ Jahr</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}