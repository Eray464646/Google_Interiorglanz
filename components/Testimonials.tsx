import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import { FadeIn } from './FadeIn';

const TESTIMONIALS = [
  {
    id: 1,
    initials: "M. S.",
    quote: "Super gründliche Reinigung, mein Auto sah aus wie neu. Der Service war pünktlich und sehr professionell.",
    location: "Innenreinigung – Nürnberg",
    rating: 5
  },
  {
    id: 2,
    initials: "K. L.",
    quote: "Schnell, zuverlässig und sehr freundlich – klare Empfehlung. Ich spare mir so viel Zeit!",
    location: "Komplettpaket – Fürth",
    rating: 5
  },
  {
    id: 3,
    initials: "T. B.",
    quote: "Flexible Terminvergabe und top Ergebnis, absolut zufrieden. Werde ich definitiv wieder buchen.",
    location: "Lackaufbereitung – Erlangen",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 bg-brand-950 inline-block px-3 py-1 rounded-sm">Referenzen</h2>
            <h3 className="font-sans text-3xl md:text-5xl font-bold text-brand-950 mb-6">
              Kundenstimmen & Vertrauen
            </h3>
            <div className="flex items-center justify-center gap-2 mb-4">
               <div className="flex text-brand-gold">
                 {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#FFD700" />)}
               </div>
               <span className="text-brand-950 font-bold text-lg">5,0 / 5,0 Zufriedenheit</span>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.2}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-brand-gold/30 transition-all duration-300 h-full flex flex-col relative group">
                <Quote className="absolute top-6 right-6 text-gray-100 w-16 h-16 -rotate-12 group-hover:text-brand-gold/10 transition-colors" />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-brand-950 rounded-full flex items-center justify-center text-brand-gold font-bold text-lg border-2 border-brand-gold/50">
                    {item.initials}
                  </div>
                  <div>
                    {/* Dynamic Star Rating */}
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < item.rating ? "text-brand-gold" : "text-gray-300"} 
                          fill={i < item.rating ? "#FFD700" : "none"} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{item.location}</p>
                  </div>
                </div>

                <p className="text-gray-600 italic leading-relaxed flex-grow relative z-10">
                  "{item.quote}"
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};