'use client';
import React from 'react';
import { Layout, CheckCircle2, Package, ArrowRight } from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-32 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8] text-slate-950">
            Ein Blick ins <br />
            <span className="text-blue-600">Cockpit.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Linke Seite: Das Kundenportal (Self-Service) */}
          <div className="space-y-8">
            <div className="bg-white rounded-[3rem] p-2 shadow-2xl border border-slate-100 overflow-hidden group">
              {/* Browser Header Mockup */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                  <div className="w-3 h-3 rounded-full bg-slate-200" />
                </div>
                <div className="mx-auto bg-white px-4 py-1 rounded-lg text-[10px] font-bold text-slate-400 border border-slate-200">
                  portal.retourio.app
                </div>
              </div>
              {/* Portal UI Mockup */}
              <div className="p-10 bg-white">
                <div className="max-w-xs mx-auto text-center space-y-6">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto text-blue-600">
                    <Package size={32} />
                  </div>
                  <h4 className="text-2xl font-black uppercase italic">Retoure anmelden</h4>
                  <div className="space-y-3 text-left">
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 text-[10px] font-bold text-slate-300">Bestellnummer #12345</div>
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 p-4 text-[10px] font-bold text-slate-300">E-Mail Adresse</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest">Sendung finden</button>
                </div>
              </div>
            </div>
            <div className="px-8">
              <h3 className="text-2xl font-black uppercase italic mb-2 text-slate-950">Customer Portal</h3>
              <p className="text-slate-500 font-medium">Deine Kunden wickeln Retouren eigenständig ab. Ohne eine einzige E-Mail an deinen Support.</p>
            </div>
          </div>

          {/* Rechte Seite: Das Merchant Dashboard */}
          <div className="space-y-8 lg:mt-24">
            <div className="bg-slate-950 rounded-[3rem] p-2 shadow-2xl overflow-hidden group border border-slate-900">
               {/* Dashboard UI Mockup */}
               <div className="p-10 space-y-8">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Analytics</p>
                      <p className="text-2xl font-black italic text-white">Übersicht</p>
                    </div>
                    <div className="bg-blue-600/20 text-blue-500 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Live</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Offen</p>
                      <p className="text-3xl font-black text-white italic">24</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Genehmigt</p>
                      <p className="text-3xl font-black text-green-400 italic">142</p>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Letzte Aktivitäten</p>
                    <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                      <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center"><CheckCircle2 size={16} className="text-white"/></div>
                      <p className="text-xs font-bold text-slate-300">#12345 wurde automatisch genehmigt</p>
                    </div>
                  </div>
               </div>
            </div>
            <div className="px-8">
              <h3 className="text-2xl font-black uppercase italic mb-2 text-slate-950">Merchant Center</h3>
              <p className="text-slate-500 font-medium">Behalte die volle Kontrolle. Genehmige Ausnahmen manuell oder lass die KI alles regeln.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}