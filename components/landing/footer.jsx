import React from 'react';
import { RetourioLogo } from '../Logo';

export default function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <RetourioLogo className="mb-8 md:mb-10 opacity-50 grayscale hover:grayscale-0 transition-all" />
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
          <a href="mailto:info@retourio.app" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600">Kontakt</a>
          <a href="/changelog" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600">Changelog</a>
          {/* FIX: Absolute Pfadangabe */}
          <a href="/#pricing" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600">Preise</a>
          <a href="https://portal.retourio.app" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600">Portal</a>
        </div>

        <p className="text-slate-300 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] leading-loose">
          © 2026 Retourio Technologies <br />
          Automating the Loop.
        </p>
      </div>
    </footer>
  );
}