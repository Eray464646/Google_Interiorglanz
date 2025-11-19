import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-brand-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3">Investition in Werterhalt</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Transparente Pakete</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Wählen Sie das Level an Perfektion, das Ihr Fahrzeug verdient. Alle Preise sind Richtwerte und können je nach Fahrzeuggröße und Zustand variieren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 lg:p-10 rounded-sm transition-all duration-500 ${
                pkg.recommended 
                  ? 'bg-brand-900 border-2 border-brand-gold shadow-[0_0_40px_rgba(197,160,89,0.15)] transform md:-translate-y-4 z-10' 
                  : 'bg-brand-900/50 border border-gray-800 hover:border-gray-600 backdrop-blur-sm'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-950 text-xs font-bold px-6 py-2 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
                  <Sparkles size={12} /> Bestseller
                </div>
              )}
              
              <div className="mb-8 border-b border-gray-800 pb-8">
                <h4 className={`text-2xl font-serif font-bold mb-4 ${pkg.recommended ? 'text-white' : 'text-gray-200'}`}>
                  {pkg.name}
                </h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-brand-gold tracking-tight">{pkg.price}</span>
                </div>
                <p className="text-gray-400 text-sm mt-4 leading-relaxed">{pkg.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-0.5 rounded-full ${pkg.recommended ? 'bg-brand-gold text-brand-950' : 'bg-gray-800 text-gray-400'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-sm font-bold text-center tracking-wide transition-all duration-300 uppercase text-sm ${
                  pkg.recommended 
                    ? 'bg-brand-gold text-brand-950 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                    : 'bg-transparent border border-gray-600 text-white hover:border-brand-gold hover:text-brand-gold'
                }`}
              >
                Paket Wählen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};