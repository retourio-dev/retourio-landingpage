'use client';
import React from 'react';
import Link from 'next/link';
import { PartyPopper, ArrowRight } from 'lucide-react';
import { RetourioLogo } from '../components/Logo';

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-12">
          <RetourioLogo />
        </div>

        <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600">
          <PartyPopper size={40} />
        </div>

        <h1 className="text-4xl font-black tracking-tighter mb-4 text-slate-900 uppercase italic">
          Willkommen an Bord!
        </h1>

        <p className="text-slate-500 font-medium mb-12 leading-relaxed">
          Deine Zahlung war erfolgreich. Dein Retourio-Dashboard ist jetzt
          freigeschaltet. Lass uns deinen Shop verbinden.
        </p>

        <Link href="/admin">
          <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-xl active:scale-95">
            Zum Dashboard <ArrowRight size={16} />
          </button>
        </Link>

        <p className="mt-8 text-[10px] font-black uppercase tracking-widest text-slate-300">
          Eine Bestätigung wurde an deine E-Mail gesendet.
        </p>
      </div>
    </div>
  );
}
