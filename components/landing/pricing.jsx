'use client';
import React, { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

export default function Pricing() {
  const [loadingId, setLoadingId] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(1);

  const plans = [
    { name: 'Seed', price: '0€', priceId: '...', features: ['5 Retouren/Mo', 'Portal', 'Support'] },
    { name: 'Startup', price: '29€', priceId: '...', features: ['50 Retouren', 'Automationen', 'Shipcloud'], popular: true },
    { name: 'Enterprise', price: '99€', priceId: '...', features: ['Unbegrenzt', 'White-Label', '24/7 Priority'] },
  ];

  return (
    <section id="pricing" className="py-20 md:py-40 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.4em]">Fair & Transparent</span>
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mt-6 mb-12 md:mb-24 uppercase italic leading-none">Ready to Scale?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {plans.map((p, i) => {
            const isHovered = i === hoveredIndex;
            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                className={`p-8 md:p-14 rounded-[3rem] md:rounded-[4rem] relative transition-all duration-500 border-2 ${
                  isHovered ? 'bg-slate-900 text-white border-slate-800 shadow-2xl md:scale-105 z-10' : 'bg-white border-slate-50 text-slate-900'
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">Most Popular</span>
                )}
                <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 md:mb-6 ${isHovered ? 'opacity-60' : 'opacity-40'}`}>{p.name}</h3>
                <div className="flex items-end justify-center gap-1 mb-8 md:mb-10">
                  <span className="text-5xl md:text-7xl font-black tracking-tighter">{p.price}</span>
                  <span className="text-sm font-bold opacity-40 mb-2">/mt</span>
                </div>
                <ul className="space-y-4 md:space-y-6 mb-10 md:mb-14 text-left">
                  {p.features.map((f, index) => (
                    <li key={index} className="flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-tighter">
                      <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                      <span className={isHovered ? 'opacity-90' : 'opacity-80'}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all ${isHovered ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-100 text-slate-900'}`}>Plan wählen</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}