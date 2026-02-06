'use client';
import Link from 'next/link';
import { RetourioLogo } from '../Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <RetourioLogo />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/changelog"
            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600"
          >
            Changelog
          </Link>
          <Link
            href="/portal"
            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600"
          >
            Kundenportal
          </Link>
          <Link
            href="/#pricing"
            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-600"
          >
            Preise
          </Link>
          <Link href="/admin">
            <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-xl hover:scale-105 transition-all">
              Händler Dashboard
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
