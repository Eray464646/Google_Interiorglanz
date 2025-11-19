import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3">Premium Leistungen</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-950 mb-6">Fahrzeugpflege in Perfektion</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Vom Interieur bis zum Lack – wir bieten das volle Spektrum der Fahrzeugaufbereitung.
            Qualität, die man sieht und fühlt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group bg-white p-8 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-brand-gold/30 relative overflow-hidden">
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-950 rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-gold transition-colors duration-300 shadow-lg group-hover:scale-110 transform">
                  <service.icon className="text-white" size={32} strokeWidth={1.5} />
                </div>
                
                <h4 className="font-serif text-2xl font-bold text-brand-950 mb-4 group-hover:text-brand-gold transition-colors">{service.title}</h4>
                
                <p className="text-gray-600 mb-8 leading-relaxed h-20">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-brand-gold/20">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Preis ab</span>
                    <span className="text-brand-950 font-bold font-serif text-xl">{service.priceStart}</span>
                  </div>
                  <a 
                    href="#contact" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-brand-950 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300"
                    aria-label={`Termin buchen für ${service.title}`}
                  >
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};