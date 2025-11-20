import React from 'react';
import { Check, Star, Clock, Info, ShieldCheck, Zap, Sparkles, Droplets, Car } from 'lucide-react';
import { PRICING_PACKAGES, ADDONS } from '../constants';

export const Pricing: React.FC = () => {
  // 1. The Ultimate Hero Package
  const highlightPackage = PRICING_PACKAGES[0];
  
  // 2. The Exterior Highlight
  const exteriorPackage = PRICING_PACKAGES[1];
  
  // 3. The Interior Grid
  const interiorPackages = PRICING_PACKAGES.slice(2);

  return (
    <section id="pricing" className="relative pt-16 pb-24 bg-gray-50 overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-brand-950 font-bold tracking-widest uppercase text-sm mb-3 bg-brand-gold inline-block px-3 py-1 rounded-sm">Transparent & Fair</h2>
          <h3 className="font-sans text-4xl md:text-5xl font-bold mb-6 text-brand-950">Preise Autoaufbereitung Nürnberg</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Wählen Sie das passende Paket für Ihr Fahrzeug. Vom schnellen Glanz bis zur intensiven <strong>Fahrzeugaufbereitung</strong> vor Ort.
          </p>
        </div>

        {/* ========================================== */}
        {/* LEVEL 1: KOMPLETTPAKET (THE HERO)          */}
        {/* ========================================== */}
        <div className="w-full max-w-5xl mx-auto mb-12">
           <div className="relative bg-brand-950 text-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-brand-900 overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 group">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
              
              <div className="absolute top-6 right-6 md:right-12 bg-brand-gold text-brand-950 text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1 animate-pulse">
                 <Star size={12} fill="black" /> Bestseller
              </div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:items-center">
                 <div className="lg:w-1/2">
                    <h4 className="text-3xl md:text-4xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">
                       {highlightPackage.name}
                    </h4>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                       {highlightPackage.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-8">
                       <span className="bg-white/10 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 text-brand-gold">
                          <Clock size={14} /> {highlightPackage.duration}
                       </span>
                       <span className="bg-white/10 px-3 py-1 rounded-md text-sm font-medium flex items-center gap-2 text-brand-gold">
                          <Sparkles size={14} /> Rundum-Sorglos
                       </span>
                    </div>

                    <div className="flex items-baseline gap-4">
                       <span className="text-5xl font-extrabold text-brand-gold">{highlightPackage.price}</span>
                       {highlightPackage.originalPrice && (
                          <span className="text-xl text-gray-500 line-through decoration-red-500/70 decoration-2">{highlightPackage.originalPrice}</span>
                       )}
                    </div>
                 </div>

                 <div className="lg:w-1/2 lg:border-l lg:border-white/10 lg:pl-10">
                    <ul className="grid grid-cols-1 gap-3 mb-8">
                       {highlightPackage.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                             <div className="mt-1 p-0.5 rounded-full bg-brand-gold text-brand-950 flex-shrink-0">
                                <Check size={12} strokeWidth={4} />
                             </div>
                             <span className="text-gray-200 text-lg">{feature}</span>
                          </li>
                       ))}
                    </ul>
                    <a href="#contact" className="block w-full bg-brand-gold text-brand-950 text-center font-bold text-lg py-4 rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-brand-gold/20">
                       Dieses Paket wählen
                    </a>
                 </div>
              </div>
           </div>
        </div>

        {/* ========================================== */}
        {/* LEVEL 2: EXTERIOR HIGHLIGHT (WIDE CARD)    */}
        {/* ========================================== */}
        <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden relative group hover:border-brand-gold/30 transition-all duration-300 hover:shadow-2xl">
                
                {/* Visual Badge */}
                <div className="absolute top-0 left-8 px-4 py-1 bg-gray-900 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-b-lg shadow-sm z-10">
                    Außenpflege Spezial
                </div>

                <div className="flex flex-col md:flex-row">
                    {/* Left Side: Info & Price */}
                    <div className="p-8 md:w-2/5 bg-gray-50 flex flex-col justify-center border-b md:border-b-0 md:border-r border-gray-100 relative">
                         {/* Watermark Icon */}
                         <Droplets className="absolute right-4 bottom-4 text-gray-200/50 w-32 h-32 -rotate-12 pointer-events-none" />
                         
                         <div className="relative z-10 pt-4">
                             <h4 className="text-2xl font-bold text-brand-950 mb-2 group-hover:text-brand-gold-dark transition-colors">
                                {exteriorPackage.name}
                             </h4>
                             <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                {exteriorPackage.description}
                             </p>
                             <div className="flex items-baseline gap-2 mb-4">
                                <span className="text-4xl font-extrabold text-brand-950">{exteriorPackage.price}</span>
                             </div>
                             <a href="#contact" className="inline-flex items-center justify-center gap-2 w-full bg-white border-2 border-brand-950 text-brand-950 font-bold py-3 rounded-lg hover:bg-brand-950 hover:text-brand-gold transition-all uppercase tracking-wider text-sm">
                                <span>Außenwäsche wählen</span>
                             </a>
                         </div>
                    </div>

                    {/* Right Side: Features Grid */}
                    <div className="p-8 md:w-3/5 flex items-center">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 w-full">
                             {exteriorPackage.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="mt-0.5 flex-shrink-0 text-brand-gold">
                                   <Check size={18} strokeWidth={3} />
                                </div>
                                <span className="text-sm text-gray-700 font-medium leading-tight">{feature}</span>
                              </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* ========================================== */}
        {/* LEVEL 3: INTERIOR PACKAGES (GRID)          */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-24">
          {interiorPackages.map((pkg, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white text-brand-950 rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-gray-400 text-xs font-bold uppercase tracking-wider">
                    <Car size={14} />
                    <span>Innenraum</span>
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-brand-gold-dark transition-colors min-h-[56px] flex items-end">
                  {pkg.name}
                </h4>
                <div className="flex items-baseline gap-2">
                   <span className="text-3xl font-extrabold text-brand-950">{pkg.price}</span>
                </div>
                <p className="text-sm mt-4 font-medium text-gray-500 min-h-[40px]">
                  {pkg.description}
                </p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-gray-100 text-brand-950 flex-shrink-0 group-hover:bg-brand-gold transition-colors">
                       <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="w-full py-3 rounded-lg font-bold text-center uppercase tracking-wider transition-all duration-300 bg-gray-100 text-brand-950 hover:bg-brand-gold hover:text-brand-950 shadow-sm hover:shadow-md text-sm"
              >
                Paket wählen
              </a>
            </div>
          ))}
        </div>

        {/* ========================================== */}
        {/* LEVEL 4: ADD-ONS                           */}
        {/* ========================================== */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
             <h3 className="text-3xl font-bold text-brand-950 mb-3">Upgrade Ihr Erlebnis</h3>
             <p className="text-gray-500">Perfekte Ergänzungen für maximalen Schutz und Frische.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {ADDONS.map((addon, index) => (
                <div key={index} className="relative bg-brand-900 text-white rounded-2xl p-8 overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 shadow-xl border border-brand-800 group">
                   {/* Accent Line */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
                   
                   <div className="flex justify-between items-start mb-4 relative z-10">
                      <div className="p-3 bg-white/10 rounded-lg text-brand-gold group-hover:scale-110 transition-transform">
                         {index === 0 ? <ShieldCheck size={28} /> : <Zap size={28} />}
                      </div>
                      <span className="font-extrabold text-2xl text-brand-gold">{addon.price}</span>
                   </div>
                   
                   <h4 className="text-xl font-bold mb-3">{addon.title}</h4>
                   <p className="text-gray-400 mb-6 text-sm leading-relaxed border-b border-white/10 pb-6">
                      {addon.description}
                   </p>
                   
                   <div className="space-y-2">
                      {addon.duration && (
                         <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <Clock size={16} className="text-brand-gold" />
                            <span>Dauer: {addon.duration}</span>
                         </div>
                      )}
                      {addon.note && (
                         <div className="flex items-start gap-2 text-xs text-gray-400 italic">
                            <Info size={14} className="text-brand-gold shrink-0 mt-0.5" />
                            <span>{addon.note}</span>
                         </div>
                      )}
                   </div>
                </div>
             ))}
          </div>
          
          <div className="mt-12 p-6 bg-white border-l-4 border-brand-gold shadow-sm rounded-r-xl">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                   <h4 className="text-brand-950 font-bold text-lg">Individuelle Wünsche?</h4>
                   <p className="text-gray-600 text-sm max-w-xl">
                      Extreme Verschmutzung, Tierhaare oder spezielle Anforderungen? Wir finden eine Lösung.
                   </p>
                </div>
                <a href="#contact" className="whitespace-nowrap text-brand-950 font-bold hover:text-brand-gold transition-colors flex items-center gap-2">
                   Kontakt aufnehmen <Sparkles size={18} />
                </a>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};