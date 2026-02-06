'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck } from 'lucide-react';

export default function ROICalculator() {
  const [returnCount, setReturnCount] = useState(60);

  // Berechnungsgrundlagen
  const hoursSaved = (returnCount * 0.25).toFixed(1);
  const moneySaved = (returnCount * 12.5).toLocaleString('de-DE'); // 12.50€ Ersparnis pro Fall

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-8 md:p-24 text-white shadow-2xl relative overflow-hidden">
        {/* Glow Effekt */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight italic uppercase">
              Zeit ist Geld. <br /> <span className="text-blue-500">Spare beides.</span>
            </h2>
            <p className="text-slate-400 font-medium text-lg mb-12 leading-relaxed max-w-md">
              Bewege den Regler und sieh, wie viel Potenzial in deiner Automatisierung steckt.
            </p>

            <div className="space-y-8">
              <input
                type="range"
                min="10"
                max="2000"
                step="10"
                value={returnCount}
                onChange={(e) => setReturnCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between font-black text-blue-500 text-[10px] uppercase tracking-[0.3em]">
                <span>10 Cases</span>
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs animate-pulse">
                  {returnCount} Retouren
                </span>
                <span>2000+ Cases</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Zeit-Box */}
            <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 hover:border-blue-500/50 transition-colors group">
              <BarChart3 className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <div className="overflow-hidden">
                <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-2 tabular-nums">
                  ~{hoursSaved}h
                </p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Zeit gewonnen
              </p>
            </div>

            {/* Geld-Box */}
            <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] border border-white/10 hover:border-green-500/50 transition-colors group">
              <ShieldCheck className="text-green-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <div className="overflow-hidden">
                <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-2 tabular-nums text-green-400">
                  {moneySaved}€
                </p>
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Kosten gesenkt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}