'use client';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Pricing() {
  const handleCheckout = async (priceId) => {
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url; // Weiterleitung zu Stripe
      } else {
        console.error('Stripe Error:', data.error);
      }
    } catch (err) {
      console.error('Checkout Fehler:', err);
    }
  };

  const plans = [
    {
      name: 'Seed',
      price: '0€',
      priceId: 'price_1SxwX2Rrzs6xnN0xlSwb6OIm',
      features: ['5 Retouren/Monat', 'Retourio Portal', 'E-Mail Support'],
    },
    {
      name: 'Startup',
      price: '29€',
      priceId: 'price_1SxwXhRrzs6xnN0xDeYkmJBm',
      features: [
        '50 Retouren inklusive',
        'Eigene Automationen',
        'Shipcloud Support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '99€',
      priceId: 'price_1SxwXyRrzs6xnN0xs4O9OXRP',
      features: [
        'Unbegrenzt Retouren',
        'Full White-Label',
        '24/7 Priority Support',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-40 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.4em]">
          Fair & Transparent
        </span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mt-6 mb-24">
          Ready to Scale?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`p-14 rounded-[4rem] relative transition-all duration-500 border-2 ${
                p.popular
                  ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-105 z-10'
                  : 'bg-white border-slate-50'
              }`}
            >
              {p.popular && (
                <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Best Value
                </span>
              )}

              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-6">
                {p.name}
              </h3>

              <div className="flex items-end justify-center gap-1 mb-10">
                <span className="text-7xl font-black tracking-tighter">
                  {p.price}
                </span>
                <span className="text-sm font-bold opacity-40 mb-2">/mt</span>
              </div>

              <ul className="space-y-6 mb-14 text-left">
                {p.features.map((f, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-xs font-bold opacity-80 uppercase tracking-tighter"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-blue-500 flex-shrink-0"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCheckout(p.priceId)}
                className={`w-full py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] transition-all active:scale-95 ${
                  p.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                }`}
              >
                Plan wählen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
