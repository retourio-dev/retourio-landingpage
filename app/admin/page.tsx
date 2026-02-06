'use client';
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  RefreshCw, 
  Settings, 
  ExternalLink,
  PlusCircle,
  AlertCircle
} from 'lucide-react';
import { RetourioLogo } from '../../components/Logo';

export default function AdminDashboard() {
  const stats = [
    { label: 'Retouren Heute', value: '12', change: '+20%', color: 'text-blue-600' },
    { label: 'Offene Anträge', value: '45', change: 'Aktion nötig', color: 'text-orange-500' },
    { label: 'Geld gespart (MTD)', value: '1.420€', change: 'ROI 12x', color: 'text-green-600' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6">
        <RetourioLogo className="mb-12" />
        
        <nav className="space-y-2 flex-1">
          {[
            { icon: <LayoutDashboard size={18} />, label: 'Übersicht', active: true },
            { icon: <Package size={18} />, label: 'Retouren' },
            { icon: <RefreshCw size={18} />, label: 'Automationen' },
            { icon: <Settings size={18} />, label: 'Einstellungen' },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${item.active ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}>
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="bg-blue-50 p-4 rounded-2xl mt-auto">
          <p className="text-[10px] font-black uppercase text-blue-600 mb-2">Support</p>
          <p className="text-xs text-blue-900 font-bold mb-3">Hilfe beim Setup?</p>
          <button className="text-[10px] font-black uppercase text-white bg-blue-600 px-4 py-2 rounded-lg w-full">Chat starten</button>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">Dashboard</h1>
            <p className="text-slate-500 font-medium">Dein Shop auf einen Blick.</p>
          </div>
          <button className="bg-white border-2 border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition-all">
            <PlusCircle size={20} className="text-slate-900" />
          </button>
        </header>

        {/* --- STATS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100">
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">{stat.label}</p>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-black tracking-tighter text-slate-900">{stat.value}</span>
                <span className={`text-[10px] font-black uppercase ${stat.color}`}>{stat.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* --- ACTION CARD: SHOPIFY CONNECT --- */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" />
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-md text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tighter mb-4">Verbinde deinen Shopify-Store</h2>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Importiere deine Bestellungen automatisch und starte die Retouren-Abwicklung in Echtzeit.
              </p>
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-500 transition-all flex items-center gap-3 mx-auto md:mx-0">
                Jetzt verbinden <ExternalLink size={16} />
              </button>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="text-blue-500" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</p>
              <p className="font-bold text-white uppercase italic">Nicht verbunden</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}