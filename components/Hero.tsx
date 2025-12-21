import React from 'react';
import { ChevronRight, MapPin, CheckCircle } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-[100svh] flex items-center overflow-hidden bg-brand-950">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 z-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-20" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop" 
          alt="Mobile Autoreinigung und Autoaufbereitung Nürnberg - Premium Fahrzeugpflege" 
          className="w-full h-full object-cover object-center md:object-[center_40%]"
        />
      </div>

      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20 md:py-20">
        <div className="w-full lg:w-3/4 text-white">
          
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-sm bg-brand-gold text-brand-950 font-bold mb-6 md:mb-8 shadow-[0_0_25px_rgba(255,215,0,0.5)]">
              <MapPin size={16} className="md:w-[18px] md:h-[18px]" />
              <span className="tracking-wide uppercase text-xs md:text-sm">100% Mobile Fahrzeugaufbereitung</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-8 md:mb-10 drop-shadow-lg">
              <span className="block text-white mb-2">
                Mobile Autoreinigung &
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200 pb-3 md:pb-4">
                Autoaufbereitung Nürnberg
              </span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 md:mb-12 leading-relaxed max-w-2xl font-light border-l-4 border-brand-gold pl-4 md:pl-6 bg-black/30 backdrop-blur-sm py-4 rounded-r-sm">
              Ihr Experte für <strong>mobile Autoaufbereitung in Nürnberg</strong>. Wir bringen Wasser, Strom und Profi-Equipment direkt zu Ihnen nach Hause oder ins Büro. Premium-Pflege ohne Wartezeit.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <a 
                href="#contact" 
                className="group bg-brand-gold text-brand-950 px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,215,0,0.4)] w-full sm:w-auto"
                title="Jetzt Termin für Autoaufbereitung anfragen"
              >
                Jetzt Termin anfragen
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pricing" 
                className="px-8 py-4 rounded-sm font-bold text-lg text-white border-2 border-white/30 hover:border-brand-gold hover:bg-brand-gold hover:text-brand-950 transition-all flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
                title="Preise für Autoreinigung Nürnberg ansehen"
              >
                Preise ansehen
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row flex-wrap gap-y-4 gap-x-8 text-white/90 font-medium text-sm md:text-base">
              <div className="flex items-center gap-3 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-gold shrink-0" size={18} />
                <span>Anfahrt inkl. in Nürnberg</span>
              </div>
               <div className="flex items-center gap-3 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-gold shrink-0" size={18} />
                <span>Strom & Wasser on board</span>
              </div>
               <div className="flex items-center gap-3 bg-black/20 px-3 py-2 rounded-full backdrop-blur-sm border border-white/10">
                <CheckCircle className="text-brand-gold shrink-0" size={18} />
                <span>Erstklassiger Service</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20 translate-y-[1px]">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[50px] md:h-[120px] fill-white"
        >
            <path d="M1200 0L0 120h1200V0z" />
        </svg>
      </div>
    </div>
  );
};