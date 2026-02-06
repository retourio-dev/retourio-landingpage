export default function Features() {
  const features = [
    {
      title: 'Seamless Portal',
      desc: 'Ein Retouren-Erlebnis, das deine Kunden lieben werden.',
      icon: '✨',
    },
    {
      title: 'ERP Sync',
      desc: 'Direkte Anbindung an Xentral, Weclapp & Shopify.',
      icon: '🔄',
    },
    {
      title: 'Foto-Beweis',
      desc: 'Weniger Betrug durch verpflichtende Zustand-Fotos.',
      icon: '📸',
    },
    {
      title: 'Auto-Labels',
      desc: 'Automatischer Versand von DHL & DPD Labels.',
      icon: '🏷️',
    },
  ];

  return (
    <section className="py-24 px-6 bg-slate-50" id="features">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-4xl mb-6">{f.icon}</div>
            <h3 className="text-xl font-black mb-2 tracking-tight">
              {f.title}
            </h3>
            <p className="text-slate-500 font-medium leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
