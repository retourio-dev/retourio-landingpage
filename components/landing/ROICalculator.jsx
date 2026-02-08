'use client';
import React, { useState } from 'react';
import { BarChart3, ShieldCheck, TrendingUp, Settings2, X } from 'lucide-react';

export default function ROICalculator() {
  const [returnCount, setReturnCount] = useState(60);
  
  // Neue States für die individuelle Berechnung
  const [showSettings, setShowSettings] = useState(false);
  const [hourlyRate, setHourlyRate] = useState(50); // Standard 50€/h
  const [minutesPerReturn, setMinutesPerReturn] = useState(15); // Standard 15 Min (0.25h)

  // Dynamische Berechnung basierend auf den Einstellungen
  const timeInHours = minutesPerReturn / 60;
  const hoursSaved = (returnCount * timeInHours).toFixed(1);
  
  // Kostenersparnis = Stunden gespart * Stundensatz * 12 Monate
  const moneySaved = (returnCount * timeInHours * hourlyRate * 12).toLocaleString('de-DE'); 

  return (
    <section className="py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-20 text-white shadow-2xl relative overflow-hidden border border-white/5">
        
        {/* Button: Berechnung anpassen oben rechts */}
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-6 right-6 md:top-10 md:right-10 z-20 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/10 group"
        >
          {showSettings ? <X size={14} /> : <Settings2 size={14} className="group-hover:rotate-90 transition-transform" />}
          <span className="text-[10px] font-black uppercase tracking-widest">
            {showSettings ? 'Schließen' : 'Berechnung anpassen'}
          </span>
        </button>

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
            
            {/* Einstellungs-Panel (wird eingeblendet) */}
            {showSettings ? (
              <div className="bg-white/5 border border-white/10 p-6 rounded-3xl mb-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 block mb-3 tracking-widest">Stundensatz Mitarbeiter (€)</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" min="15" max="150" step="5"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <span className="text-xl font-black w-12 text-right">{hourlyRate}€</span>
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 block mb-3 tracking-widest">Zeit pro Retoure (Minuten)</label>
                  <div className="flex items-center gap-4">
                    <input 
                      type="range" min="5" max="60" step="1"
                      value={minutesPerReturn}
                      onChange={(e) => setMinutesPerReturn(parseInt(e.target.value))}
                      className="flex-1 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                    <span className="text-xl font-black w-12 text-right">{minutesPerReturn}m</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-slate-400 font-medium text-base md:text-lg mb-10 leading-relaxed max-w-md">
                Stoppe die manuelle Bearbeitung. Automatisiere deinen Loop und skaliere ohne Kopfschmerzen.
              </p>
            )}

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