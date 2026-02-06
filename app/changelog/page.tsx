'use client';
import React from 'react';
import Navbar from '../../components/landing/navbar';
import Footer from '../../components/landing/footer';

export default function Changelog() {
  const logs = [
    {
      version: "v0.2.0",
      date: "06. Februar 2026",
      title: "Modularer Umbau & Stripe Integration",
      changes: [
        "Landing Page in Module zerlegt (Hero, ROI, Pricing, etc.)",
        "Stripe Checkout für Startup & Enterprise Pläne aktiviert",
        "Fehlerbehebung bei ROI-Rechner (Zahlen-Overflow gefixt)",
        "Vercel Deployment Pfade optimiert"
      ]
    },
    {
      version: "v0.1.0",
      date: "01. Februar 2026",
      title: "Initial Launch",
      changes: [
        "Retouren-Portal Grundgerüst",
        "Supabase Datenbank-Anbindung",
        "ROI-Rechner Logik implementiert"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-4xl mx-auto py-32 px-6">
        <h1 className="text-5xl font-black mb-4 tracking-tight uppercase italic">Changelog</h1>
        <p className="text-slate-500 font-medium mb-16 text-xl">
          Updates und Verbesserungen von retourio.app auf einen Blick.
        </p>

        <div className="space-y-16 text-slate-900">
          {logs.map((log, i) => (
            <div key={i} className="relative pl-12 border-l-4 border-slate-100 text-left">
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
              <div className="flex items-center gap-4 mb-2">
                <span className="bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
                  {log.version}
                </span>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">
                  {log.date}
                </span>
              </div>
              <h2 className="text-2xl font-black mb-4">{log.title}</h2>
              <ul className="space-y-3">
                {log.changes.map((change, j) => (
                  <li key={j} className="text-slate-600 font-medium flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span> {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}