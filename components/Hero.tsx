import React from 'react';
import { ChevronRight, Star, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-950/80 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-900/80 to-transparent z-20" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
          alt="Professionelle Autoaufbereitung Nürnberg Innenraum Detailing" 
          className="w-full h-full object-cover scale-105 animate-[kenburns_20s_infinite_alternate]"
          style={{ animation: 'kenburns 30s ease-in-out infinite alternate' }}
        />
      </div>

      {/* Custom Keyframes for Ken Burns effect if not in Tailwind */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-3/5 text-white">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <div className="flex text-brand-gold">
              {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className="drop-shadow-md" />)}
            </div>
            <span className="text-xs font-bold tracking-wider uppercase text-white">Nürnbergs Premium Autopflege</span>
          </div>
          
          {/* SEO Heavy Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              Autoreinigung
            </span>
            <span className="block text-brand-gold italic pr-4">
              & Autoaufbereitung
            </span>
            <span className="block text-3xl md:text-5xl mt-2 font-sans font-light tracking-wide text-gray-200">
              in Nürnberg
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl font-light border-l-2 border-brand-gold pl-6">
            Erleben Sie den Unterschied von echtem Detailing. Wir verwandeln Fahrzeuge in Kunstwerke – durch präzise Innenreinigung, Lackkorrektur und High-End Keramikversiegelung.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              className="group bg-brand-gold text-brand-950 px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.4)]"
            >
              Termin vereinbaren
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="px-8 py-4 rounded-sm font-bold text-lg text-white border border-white/30 hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <ShieldCheck size={20} />
              Leistungen ansehen
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>Versichert</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>Zertifiziert</span>
            </div>
             <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-gold rounded-full"></div>
              <span>Vor Ort Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};