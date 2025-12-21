import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white relative pb-24">
      
      <FadeIn direction="down" fullWidth>
        <div className="relative w-full bg-brand-gold overflow-hidden py-24 shadow-2xl z-20 -mt-6 transform skew-y-0">
           <div className="absolute inset-0 opacity-15 mix-blend-multiply" 
                style={{ backgroundImage: "radial-gradient(circle at 2px 2px, black 1px, transparent 0)", backgroundSize: "32px 32px" }}>
           </div>
           <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-white/20 to-brand-gold mix-blend-overlay"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="flex-1 text-center lg:text-left">
                 <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="bg-brand-950 p-2.5 rounded-full text-brand-gold animate-pulse shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <span className="font-bold text-brand-950 uppercase tracking-widest text-sm border-b-2 border-brand-950 pb-1">Mobile Autoreinigung Nürnberg</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-extrabold text-brand-950 mb-6 leading-tight tracking-tight">
                   Wir kommen zu Ihnen <br/>
                   <span className="text-white drop-shadow-md stroke-black">nach Nürnberg & Umgebung</span>
                 </h2>
                 <p className="text-brand-950 text-xl md:text-2xl font-medium max-w-2xl leading-relaxed">
                   Egal ob Büro, Zuhause oder Garage. Wir benötigen nur Zugang zum Fahrzeug. <br className="hidden md:block"/>
                   <span className="font-bold border-b-2 border-brand-950/20">Strom & Wasser haben wir dabei!</span>
                 </p>
              </div>
              
              <div className="shrink-0 transform transition-transform hover:scale-105 duration-300">
                 <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-brand-950 text-brand-gold hover:text-white hover:bg-gray-900 text-xl font-extrabold py-5 px-12 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] border-2 border-brand-950 transition-all group">
                    <Zap size={24} className="text-brand-gold group-hover:animate-bounce" />
                    Verfügbarkeit prüfen
                 </a>
              </div>
           </div>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-gray-400 font-bold tracking-widest uppercase text-sm mb-3">Individuell & Flexibel</h2>
            <h3 className="font-sans text-4xl md:text-5xl font-bold text-brand-950 mb-6">
              Fahrzeugaufbereitung Nürnberg – Einzelleistungen
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Stellen Sie sich Ihr Wunschprogramm für die <strong>Autoaufbereitung</strong> zusammen oder buchen Sie gezielte Extras zu unseren Paketen.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-gold/30 relative overflow-hidden h-full">
                
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 rounded-bl-full -mr-12 -mt-12 group-hover:bg-brand-gold/20 transition-colors"></div>

                <div className="flex items-start justify-between mb-6 relative">
                  <div className="w-14 h-14 bg-gray-50 text-brand-950 border border-gray-100 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-brand-gold group-hover:text-brand-950 transition-all duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-brand-950 mb-3 group-hover:text-brand-gold-dark transition-colors">{service.title}</h4>
                
                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                  <span className="text-brand-950 font-bold text-lg bg-gray-50 px-3 py-1 rounded-md">{service.priceStart}</span>
                  <a 
                    href="#contact" 
                    className="flex items-center gap-2 text-sm font-bold text-brand-950 hover:text-brand-gold transition-colors"
                    title={`${service.title} in Nürnberg buchen`}
                  >
                    Dazu buchen <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};