'use client';
import React, { useState, useEffect } from 'react';
import { Layout, CheckCircle2, Package, ArrowRight, Activity } from 'lucide-react';

// Kleine Hilfskomponente für den Hochzähl-Effekt
const CountUp = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function ProductShowcase() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 bg-slate-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] text-slate-950">
            Ein Blick ins <br />
            <span className="text-blue-600">Cockpit.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          
          {/* Linke Seite: Das Kundenportal (Self-Service) */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl border border-slate-100 overflow-hidden group">
              {/* Browser Header Mockup */}
              <div className="bg-slate-50 px-4 md:px-6 py-3 md:py-4 border-b border-slate-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                </div>
                <div className="mx-auto bg-white px-3 md:px-4 py-1 rounded-lg text-[9px] md:text-[10px] font-bold text-slate-400 border border-slate-200 uppercase tracking-tighter">
                  portal.retourio.app
                </div>
              </div>
              {/* Portal UI Mockup */}
              <div className="p-8 md:p-12 bg-white">
                <div className="max-w-xs mx-auto text-center space-y-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600 group-hover:scale-110 transition-transform">
                    <Package size={28} className="md:w-8 md:h-8" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-slate-900">Retoure anmelden</h4>
                  <div className="space-y-3 text-left">
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 text-[10px] font-bold text-slate-300">Bestellnummer #12345</div>
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 text-[10px] font-bold text-slate-300">E-Mail Adresse</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-colors">Sendung finden</button>
                </div>
              </div>
            </div>
            <div className="px-4 md:px-8">
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-2 text-slate-950">Customer Portal</h3>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Deine Kunden wickeln Retouren eigenständig ab. Ohne eine einzige E-Mail an deinen Support.
              </p>
            </div>
          </div>

          {/* Rechte Seite: Das Merchant Dashboard */}
          <div className="space-y-6 md:space-y-8 lg:mt-24">
            <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-2 shadow-2xl overflow-hidden group border border-slate-900 relative">
               {/* Dashboard UI Mockup */}
               <div className="p-8 md:p-12 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">Analytics</p>
                      <p className="text-xl md:text-2xl font-black italic text-white uppercase tracking-tighter">Live Übersicht</p>
                    </div>
                    <div className="bg-blue-600/20 text-blue-500 px-3 md:px-4 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest animate-pulse">
                      Live
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4 text-center sm:text-left">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-blue-500/50 transition-colors">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Offen</p>
                      <p className="text-2xl md:text-4xl font-black text-white italic tabular-nums">
                        <CountUp end={24} />
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 hover:border-green-500/50 transition-colors">
                      <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Erledigt</p>
                      <p className="text-2xl md:text-4xl font-black text-green-400 italic tabular-nums">
                        <CountUp end={142} />
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4">
                    <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-500">Letzte Aktivitäten</p>
                    <div className="flex items-center gap-3 md:gap-4 border-b border-white/5 pb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={16} className="text-white"/>
                      </div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-300 leading-tight">#12345 wurde automatisch genehmigt</p>
                    </div>
                    <div className="flex items-center gap-3 md:gap-4 opacity-50">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                        <Activity size={16} className="text-slate-400"/>
                      </div>
                      <p className="text-[10px] md:text-xs font-bold text-slate-500 leading-tight">Label generiert für Bestellung #12342</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="px-4 md:px-8">
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-2 text-slate-950">Merchant Center</h3>
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
                Behalte die volle Kontrolle. Genehmige Ausnahmen manuell oder lass die KI alles regeln.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}