'use client';
import React from 'react';

// Wir nutzen hier direkt die SVG-Pfade der Unternehmen für maximale Schärfe
const partners = [
  { 
    name: 'Shopify', 
    hoverColor: 'hover:text-[#95BF47]',
    svg: (
      <path d="M4.222 3.664c.546-.171 1.12-.295 1.708-.363V2.4c0-.663.537-1.2 1.2-1.2h4.8c.663 0 1.2.537 1.2 1.2v.901c.588.068 1.162.192 1.708.363l.261-1.045c.163-.652.825-1.049 1.477-.886.652.163 1.049.825.886 1.477L16.2 9.062c.983.824 1.8 1.954 1.8 3.538 0 2.91-2.4 4.8-6 4.8s-6-1.89-6-4.8c0-1.584.817-2.714 1.8-3.538L6.537 4.254c-.163-.652.234-1.314.886-1.477s1.314.234 1.477.886l.261 1.045c.546-.171 1.12-.295 1.708-.363v-.145h2.4v.145c.588.068 1.162.192 1.708.363l.135-.539a.6.6 0 1 0-1.164-.291l-.135.539c-.198-.061-.4-.117-.604-.165V2.4c0-.331-.269-.6-.6-.6H7.13c-.331 0-.6.269-.6.6v1.046c-.204.048-.406.104-.604.165l-.135-.539a.6.6 0 1 0-1.164.291l.135.539z"/>
    )
  },
  { 
    name: 'DHL', 
    hoverColor: 'hover:text-[#D40511]',
    svg: <path d="M0 4.143h3.504l1.326 5.857h.043l1.326-5.857h3.42l-2.4 10.5h-3.414l-2.4-10.5zm11.238 0h3.51l.857 3.51h.043l.857-3.51h3.51l-2.4 10.5h-3.515l-.857-3.5h-.043l-.857 3.5h-3.515l2.4-10.5zm13.174 0h3.51v7.5h6v3h-9.51v-10.5z"/>
  },
  {
    name: 'Woo',
    hoverColor: 'hover:text-[#96588A]',
    svg: <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.742 16.582h-1.637l-1.313-4.706h-.041l-1.313 4.706h-1.637l-2.227-7.164h1.691l1.365 5.352h.041l1.365-5.352h1.637l1.365 5.352h.041l1.365-5.352h1.691l-2.227 7.164z"/>
  }
];

export default function LogoStrip() {
  return (
    <div className="py-16 border-y border-slate-50 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-center text-slate-300 mb-12">
          Workflows optimiert für
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((p, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-3 transition-all duration-500 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 ${p.hoverColor} group cursor-pointer`}
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110"
              >
                {p.svg}
              </svg>
              <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-slate-900">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}