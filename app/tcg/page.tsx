'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/landing/navbar';
import Footer from '../../components/landing/footer';

export default function TCGPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-slate-900 font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="w-full pt-24 pb-16">
        {/* Hero Section for TCG */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Trading Cards Collection
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Entdecke deine Sammelpassion. Organisiere, tracke und teile deine Trading Cards Sammlung.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🎴</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sammlung verwalten</h3>
              <p className="text-slate-600">Katalogisiere all deine Trading Cards mit allen wichtigen Details.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Wert verfolgen</h3>
              <p className="text-slate-600">Verfolge den aktuellen Wert deiner Sammlung und einzelner Karten.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Tauschen & Verkaufen</h3>
              <p className="text-slate-600">Verbinde dich mit anderen Sammlern und tausche oder verkaufe Karten.</p>
            </div>
          </div>

          {/* Popular Cards Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-black mb-8 text-center">Beliebte Kategorien</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Pokémon', 'Magic: The Gathering', 'Yu-Gi-Oh!', 'NBA'].map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:scale-105 transition-all cursor-pointer">
                  <div className="text-5xl mb-3">
                    {idx === 0 ? '⚡' : idx === 1 ? '🧙' : idx === 2 ? '🎭' : '🏀'}
                  </div>
                  <h4 className="font-bold text-lg">{category}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Bereit, deine Sammlung zu verwalten?</h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Starte noch heute und bringe Ordnung in deine Trading Cards.
            </p>
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
              Jetzt loslegen
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
