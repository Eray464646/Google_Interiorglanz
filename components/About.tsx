import React from 'react';
import { Shield, Users, Award, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-4">Über InteriorGlanz</h2>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-950 mb-8 leading-tight">
              Leidenschaft für Details <br/>
              <span className="text-brand-gold italic">seit über 10 Jahren</span>
            </h3>
            
            <div className="prose prose-lg text-gray-600 mb-10 leading-relaxed">
              <p className="mb-6">
                Als Nürnbergs führende Adresse für <strong>professionelle Autoaufbereitung</strong> verstehen wir, dass Perfektion keine Option, sondern Standard ist. Unser Ziel ist es, den Neuwagenzustand nicht nur wiederherzustellen, sondern zu konservieren.
              </p>
              <p>
                Ob Leasingrückläufer, Liebhaberfahrzeug oder der tägliche Begleiter – wir kombinieren traditionelles Handwerk mit modernster Nano-Technologie und Keramikversiegelungen. Wir behandeln jedes Fahrzeug, als wäre es unser eigenes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-gray-100 pt-8">
              <div className="flex flex-col gap-2">
                <Shield className="w-8 h-8 text-brand-gold mb-2" />
                <h4 className="font-bold text-brand-950 font-serif">Versichert</h4>
                <p className="text-sm text-gray-500">Vollkasko-Schutz während der gesamten Pflege.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-8 h-8 text-brand-gold mb-2" />
                <h4 className="font-bold text-brand-950 font-serif">Erfahren</h4>
                <p className="text-sm text-gray-500">Zertifizierte Detailer mit jahrelanger Erfahrung.</p>
              </div>
              <div className="flex flex-col gap-2">
                <Award className="w-8 h-8 text-brand-gold mb-2" />
                <h4 className="font-bold text-brand-950 font-serif">Premium</h4>
                <p className="text-sm text-gray-500">Verwendung von High-End Markenprodukten.</p>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 order-1 lg:order-2 relative">
            {/* Background blob */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-gold/10 rounded-full blur-3xl z-0"></div>
            
            <img 
              src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop" 
              alt="Professionelle Lackaufbereitung und Politur Nürnberg" 
              className="rounded-sm shadow-2xl w-full h-80 object-cover translate-y-12 z-10 hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="flex flex-col gap-6 z-10">
               <img 
                src="https://images.unsplash.com/photo-1552934526-c820512da507?q=80&w=1000&auto=format&fit=crop" 
                alt="Innenraumreinigung Lederpflege Detail" 
                className="rounded-sm shadow-2xl w-full h-64 object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="bg-brand-950 p-6 rounded-sm text-white shadow-xl">
                <div className="flex text-brand-gold mb-2">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="italic font-serif text-lg">"Mein Auto sah noch nie so gut aus. Unglaubliche Arbeit!"</p>
                <p className="text-brand-gold text-sm mt-4 font-bold uppercase tracking-wide">- Markus S., Nürnberg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};