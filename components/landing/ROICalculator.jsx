'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck, TrendingUp, Settings2, X, Sparkles } from 'lucide-react';

export default function ROICalculator() {
  // Realistischere Startwerte (30 Retouren)
  const [returnCount, setReturnCount] = useState(30); 
  const [showSettings, setShowSettings] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(40); 
  const [minutesPerReturn, setMinutesPerReturn] = useState(15); 

  // Berechnungen
  const timeInHours = minutesPerReturn / 60;
  const hoursSaved = (returnCount * timeInHours).toFixed(1);
  const monthlySavings = returnCount * timeInHours * hourlyRate;
  const moneySavedYear = (monthlySavings * 12).toLocaleString('de-DE'); 

  // Break-Even Kalkulation für den 29€ Plan
  const savingsPerReturn = timeInHours * hourlyRate;
  const breakEvenReturns = Math.ceil(29 / savingsPerReturn);

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
        
        {/* Glow Effekt im Hintergrund */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10">
          {/* HEADER: Badge und Button Flex-Layout für Mobile */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full self-start">
              <TrendingUp size={14} />
              <span className="text-[10px] font-black uppercase tracking-widest">ROI Kalkulator</span>
            </div>

            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-all border border-white/10 group self-start md:self-auto"
            >
              {showSettings ? <X size={12} /> : <Settings2 size={12} className="group-hover:rotate-90 transition-transform" />}
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-300">
                {showSettings ? 'Schließen' : 'Berechnung anpassen'}
              </span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-[0.95] italic uppercase">
                Zeit ist Geld. <br /> 
                <span className="text-blue-500">Spare beides.</span>
              </h2>
              
              {showSettings ? (
                <div className="bg-white/5 border border-white/10 p-5 rounded-3xl mb-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div>
                    <label className="text-[9px] font-black uppercase text-slate-500 block mb-3 tracking-widest">Stundensatz Mitarbeiter (€)</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="range" min="15" max="150" step="5"
                        value={hourlyRate}
                        onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <span className="text-lg font-black w-10 text-right">{hourlyRate}€</span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase text-slate-500 block mb-3 tracking-widest">Minuten pro Retoure</label>
                    <div className="flex items-center gap-4">
                      <input 
                        type="range" min="5" max="60" step="1"
                        value={minutesPerReturn}
                        onChange={(e) => setMinutesPerReturn(parseInt(e.target.value))}
                        className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                      <span className="text-lg font-black w-10 text-right">{minutesPerReturn}m</span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-slate-400 font-medium text-base md:text-lg mb-10 leading-relaxed max-w-md hidden md:block">
                  Automatisiere deinen gesamten Rücksendeprozess und reduziere den manuellen Aufwand auf ein Minimum.
                </p>
              )}

              <div className="space-y-8 mt-4">
                <input
                  type="range" min="10" max="1000" step="10"
                  value={returnCount}
                  onChange={(e) => setReturnCount(parseInt(e.target.value))}
                  className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-1">Aktuelles Volumen</span>
                  <span className="text-xl md:text-2xl font-black tabular-nums text-white">
                    {returnCount.toLocaleString('de-DE')} <span className="text-blue-500 text-sm italic">Retouren / Monat</span>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              {/* Aufwand-Box */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-white/10 w-full transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                  <div className="bg-blue-500/20 p-4 rounded-2xl shrink-0"><BarChart3 className="text-blue-500" size={28} /></div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Vermeidbarer Aufwand</p>
                    <p className="text-3xl md:text-5xl font-black tracking-tighter tabular-nums">~{hoursSaved}h <span className="text-xs md:text-lg text-slate-400 font-bold tracking-normal italic">/ Monat</span></p>
                  </div>
                </div>
              </div>

              {/* Ersparnis-Box */}
              <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-[2rem] border border-white/10 w-full transition-all">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 md:gap-6 text-center sm:text-left">
                  <div className="bg-green-500/20 p-4 rounded-2xl shrink-0"><ShieldCheck className="text-green-500" size={28} /></div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Potenzielle Ersparnis</p>
                    <p className="text-3xl md:text-5xl font-black tracking-tighter tabular-nums text-green-400">{moneySavedYear}€ <span className="text-xs md:text-lg text-slate-400 font-bold tracking-normal italic">/ Jahr</span></p>
                  </div>
                </div>
              </div>

              {/* Dezenter Marketing Kicker */}
              <div className="bg-white/[0.03] border border-blue-500/20 rounded-[2rem] p-6 flex items-center justify-between transition-all hover:bg-white/[0.05]">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0">
                    <Sparkles size={18} fill="currentColor" />
                  </div>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-tight leading-tight text-slate-300">
                    Startup-Plan lohnt sich ab <br />
                    nur <span className="text-white border-b border-blue-500/50">{breakEvenReturns} Retouren/Monat</span>.
                  </p>
                </div>
                <a href="/#pricing" className="hidden sm:block text-blue-400 text-[9px] font-black uppercase tracking-widest hover:text-white transition-colors">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}