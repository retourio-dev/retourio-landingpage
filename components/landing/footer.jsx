import { RetourioLogo } from '../Logo';

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <RetourioLogo className="mb-8 opacity-50 grayscale hover:grayscale-0 transition-all" />
        <div className="text-center space-y-4">
          <a
            href="mailto:info@retourio.app"
            className="text-sm font-black text-slate-900 hover:text-blue-600 transition-colors"
          >
            info@retourio.app
          </a>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] leading-loose">
            © 2026 Retourio Technologies <br /> Automating the Loop.
          </p>
        </div>
      </div>
    </footer>
  );
}
