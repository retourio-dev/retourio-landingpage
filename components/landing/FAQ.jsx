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
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-black tracking-tighter uppercase italic text-center mb-16">Noch Fragen?</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-3xl border border-slate-100 overflow-hidden transition-all hover:border-blue-200">
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="font-black uppercase tracking-tight text-slate-900">{f.q}</span>
                {active === i ? <Minus size={18}/> : <Plus size={18} className="text-blue-600"/>}
              </button>
              {active === i && (
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}