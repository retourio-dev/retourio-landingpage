'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck } from 'lucide-react';

export default function ROICalculator() {
  const [returnCount, setReturnCount] = useState(60);
  const hoursSaved = (returnCount * 0.25).toFixed(1);
  const moneySaved = (returnCount * 15).toFixed(0); // Realistischerer Wert: 15€/Retoure

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-24 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none" />
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-5xl font-black tracking-tighter mb-8 leading-tight">
              Zeit ist Geld. <br /> Spare beides.
            </h2>
            <div className="space-y-8">
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={returnCount}
                onChange={(e) => setReturnCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between font-black text-blue-500 text-[10px] uppercase tracking-[0.3em]">
                <span>10 Cases</span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs">
                  {returnCount.toLocaleString()} Retouren
                </span>
                <span>5000+ Cases</span>
              </div>
            </div>
          </div>
          {/* Die Boxen mit dem Fix für große Zahlen */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 min-w-0">
              <BarChart3 className="text-blue-500 mb-6" size={32} />
              <p className="text-3xl md:text-5xl font-black tracking-tighter mb-2 truncate">
                ~{hoursSaved}h
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-nowrap">
                Freizeit gewonnen
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 min-w-0">
              <ShieldCheck className="text-green-500 mb-6" size={32} />
              <p className="text-3xl md:text-5xl font-black tracking-tighter mb-2 truncate">
                ~{moneySaved}€
              </p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 text-nowrap">
                Kosten reduziert
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
