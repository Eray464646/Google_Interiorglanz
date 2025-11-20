import React from 'react';
import { Truck, Users, Award, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-gold relative overflow-hidden">
      {/* Subtle Pattern for texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "24px 24px" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-brand-950 font-bold tracking-widest uppercase text-sm mb-4 bg-white/30 inline-block px-3 py-1 rounded-sm border border-brand-950/10">Über InteriorGlanz</h2>
            <h3 className="font-sans text-4xl md:text-5xl font-extrabold text-brand-950 mb-8 leading-tight">
              Wir bringen den Glanz <br/>
              <span className="text-white drop-shadow-md">direkt zu Ihnen nach Nürnberg.</span>
            </h3>
            
            <div className="prose prose-lg text-brand-950 mb-10 leading-relaxed font-medium">
              <p className="mb-6">
                Als spezialisierter Anbieter für <strong>mobile Autoreinigung Nürnberg</strong> haben wir den Servicegedanken für Fahrzeugpflege neu definiert. Schluss mit langen Wartezeiten an der Waschanlage oder der aufwendigen Organisation von Abholungen.
              </p>
              <p>
                Unser voll ausgestattetes Service-Fahrzeug ist eine mobile Werkstatt für die <strong>professionelle Autoaufbereitung</strong>. Wir arbeiten autark, sauber und diskret bei Ihnen vor Ort – für maximale Zeitersparnis und ein perfektes Ergebnis, das Sie begeistern wird.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-brand-950/20 pt-8">
              <div className="flex flex-col gap-2">
                <div className="bg-brand-950/10 w-12 h-12 rounded-full flex items-center justify-center mb-1">
                   <Truck className="w-6 h-6 text-brand-950" />
                </div>
                <h4 className="font-bold text-brand-950 text-lg">Mobil vor Ort</h4>
                <p className="text-sm text-brand-950/80 font-medium">Kostenlose Anfahrt in Nürnberg</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-brand-950/10 w-12 h-12 rounded-full flex items-center justify-center mb-1">
                   <Users className="w-6 h-6 text-brand-950" />
                </div>
                <h4 className="font-bold text-brand-950 text-lg">Erfahren</h4>
                <p className="text-sm text-brand-950/80 font-medium">Mit 3 Jahren Erfahrung</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="bg-brand-950/10 w-12 h-12 rounded-full flex items-center justify-center mb-1">
                   <Award className="w-6 h-6 text-brand-950" />
                </div>
                <h4 className="font-bold text-brand-950 text-lg">Premium</h4>
                <p className="text-sm text-brand-950/80 font-medium">Markenprodukte & Qualität</p>
              </div>
            </div>
          </div>

          {/* Image Grid with SEO Alt Tags */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 order-1 lg:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop" 
              alt="Professionelle Lackaufbereitung und Politur Nürnberg durch InteriorGlanz" 
              className="rounded-2xl shadow-2xl w-full h-80 object-cover translate-y-12 z-10 border-4 border-white"
            />
            <div className="flex flex-col gap-6 z-10">
               <img 
                src="https://images.unsplash.com/photo-1552934526-c820512da507?q=80&w=1000&auto=format&fit=crop" 
                alt="Mobile Innenraumreinigung Lederpflege und Detailarbeit" 
                className="rounded-2xl shadow-2xl w-full h-64 object-cover border-4 border-white"
              />
              <div className="bg-brand-950 p-6 rounded-2xl text-white shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
                <div className="flex text-brand-gold mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FFD700" />)}
                </div>
                <p className="italic font-serif text-lg text-gray-200">"Das Auto sieht aus wie neu! Und ich musste nicht mal das Haus verlassen. Genial."</p>
                <p className="text-brand-gold text-sm mt-4 font-bold uppercase tracking-wide">- Markus Weber, Kunde aus Nürnberg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};