'use client';
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Wie verbinde ich meinen Shop?", a: "Einfach im Portal auf 'Integration' klicken, deinen Shopify-Link eingeben und fertig. Wir ziehen uns alle Bestelldaten automatisch." },
  { q: "Was kostet ein Label?", a: "Du nutzt entweder deine eigenen Verträge oder unsere vergünstigten Konditionen ab 3,90€ pro Paket." },
  { q: "Gibt es versteckte Kosten?", a: "Nein. Du zahlst nur deinen monatlichen Plan. Keine Einrichtungsgebühren, keine Support-Pauschalen." }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-32 px-6 bg-white border-t border-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase italic text-slate-950 leading-[0.8]">
            Noch <br />
            <span className="text-blue-600">Fragen?</span>
          </h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div 
              key={i} 
              className={`rounded-[2.5rem] transition-all duration-300 ${
                active === i ? 'bg-slate-950 text-white shadow-2xl' : 'bg-slate-50 text-slate-900 hover:bg-slate-100'
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-10 flex justify-between items-center text-left"
              >
                <span className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">{f.q}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  active === i ? 'bg-blue-600 rotate-180' : 'bg-white'
                }`}>
                  {active === i ? <Minus size={20} className="text-white"/> : <Plus size={20} className="text-blue-600"/>}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                active === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-10 pb-10 text-lg text-slate-400 font-medium max-w-2xl leading-relaxed">
                  {f.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}