import React from 'react';
import { ChevronRight, MapPin, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Lighter overlay for less "gloomy" feel, but still enough for text contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-20" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
          alt="Mobile Autoreinigung und Autoaufbereitung Nürnberg Innenraum Detailpflege" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="lg:w-2/3 text-white">
          
          {/* Mobile Service Badge - Bright and Clear */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-brand-gold text-brand-950 font-bold mb-8 animate-fade-in-up shadow-[0_0_25px_rgba(255,215,0,0.5)]">
            <MapPin size={18} />
            <span className="tracking-wide uppercase text-sm">100% Mobile Fahrzeugaufbereitung vor Ort</span>
          </div>
          
          {/* SEO Heavy Headline - THE ONLY H1 */}
          <h1 className="font-sans text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            <span className="block text-white">
              Mobile Autoreinigung &
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
              Autoaufbereitung Nürnberg
            </span>
            <span className="block text-2xl md:text-3xl mt-4 font-normal text-gray-200">
              Professionell. Bequem. Direkt bei Ihnen.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl font-light border-l-4 border-brand-gold pl-6 bg-black/20 backdrop-blur-sm py-2 rounded-r-sm">
            Ihr Experte für <strong>mobile Autoaufbereitung in Nürnberg</strong>. Wir bringen Wasser, Strom und Profi-Equipment direkt zu Ihnen nach Hause oder ins Büro. Premium-Pflege ohne Wartezeit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <a 
              href="#contact" 
              className="group bg-brand-gold text-brand-950 px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,215,0,0.4)]"
              title="Jetzt Termin für Autoaufbereitung anfragen"
            >
              Jetzt Termin anfragen
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#pricing" 
              className="px-8 py-4 rounded-sm font-bold text-lg text-white border-2 border-white/30 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-950 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              title="Preise für Autoreinigung Nürnberg ansehen"
            >
              Preise ansehen
            </a>
          </div>

          {/* USP Bar - Clean and High Contrast */}
          <div className="mt-16 flex flex-wrap gap-y-4 gap-x-8 text-white/90 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-gold shrink-0" size={20} />
              <span>Anfahrt inkl. in Nürnberg</span>
            </div>
             <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-gold shrink-0" size={20} />
              <span>Strom & Wasser on board</span>
            </div>
             <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-gold shrink-0" size={20} />
              <span>Versicherter Service</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern Diagonal Slant Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[80px] md:h-[120px] fill-gray-50"
        >
            {/* Sharp diagonal cut rising from bottom-left to top-right */}
            <path d="M1200 0L0 120h1200V0z" />
        </svg>
      </div>
    </div>
  );
};