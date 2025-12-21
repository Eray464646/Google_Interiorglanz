import React from 'react';
import { CalendarCheck, Truck, Armchair, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      icon: CalendarCheck,
      title: "Termin vereinbaren",
      subtitle: "Flexibel & Einfach",
      description: "Buchen Sie Ihren Wunschtermin online oder rufen Sie uns kurz an. Wir richten uns nach Ihrem Kalender."
    },
    {
      id: "02",
      icon: Truck,
      title: "Wir kommen zu Ihnen",
      subtitle: "100% Autark",
      description: "Egal ob Büro oder Zuhause. Wir bringen Wasser, Strom und alles Nötige mit. Sie müssen nichts vorbereiten."
    },
    {
      id: "03",
      icon: Armchair,
      title: "Lehnen Sie sich zurück",
      subtitle: "Null Zeitverlust",
      description: "Nutzen Sie Ihre Zeit für Wichtigeres. Wir arbeiten diskret, sauber und professionell direkt vor Ort."
    },
    {
      id: "04",
      icon: Sparkles,
      title: "Neuwagen-Gefühl",
      subtitle: "Zufriedenheitsgarantie",
      description: "Sie prüfen das Ergebnis. Erst wenn Sie begeistert sind, ist unsere Arbeit getan. Bezahlung bequem vor Ort."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-950 text-white relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full px-4 py-1.5 mb-4">
              <CheckCircle2 size={16} className="text-brand-gold" />
              <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Einfacher geht's nicht</span>
            </div>
            <h3 className="font-sans text-3xl md:text-5xl font-bold text-white mb-4">
              Ihr Weg zum <span className="text-brand-gold">perfekten Glanz</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Vergessen Sie Anfahrten zur Waschanlage. Wir haben den Prozess für Sie so einfach wie möglich gemacht.
            </p>
          </div>
        </FadeIn>

        <div className="hidden md:grid grid-cols-4 gap-8 relative">
          <div className="absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
          
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2} direction="up" className="relative flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full bg-brand-900 border-4 border-brand-950 flex items-center justify-center relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-brand-gold/10 rounded-full animate-pulse"></div>
                <div className="w-20 h-20 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-950">
                   <step.icon className="text-brand-gold w-8 h-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-gold text-brand-950 rounded-full flex items-center justify-center font-bold text-sm border-2 border-brand-950">
                  {step.id}
                </div>
              </div>

              <div className="mt-8 px-2">
                <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">{step.title}</h4>
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-3 block">{step.subtitle}</span>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="md:hidden relative pl-4">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="left">
                <div className="relative flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-brand-900 border-4 border-brand-950 flex items-center justify-center relative z-10 shadow-lg">
                     <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center bg-brand-950">
                        <step.icon className="text-brand-gold w-6 h-6" />
                     </div>
                  </div>

                  <div className="pt-1 pb-4 border-b border-gray-800 last:border-0 w-full pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-brand-gold font-bold text-sm">{step.id}</span>
                      <h4 className="text-lg font-bold text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{step.subtitle}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
             <div className="inline-block p-1 rounded-full bg-gradient-to-r from-brand-gold/0 via-brand-gold/50 to-brand-gold/0">
               <a href="#contact" className="flex items-center gap-3 bg-brand-gold hover:bg-white text-brand-950 font-bold py-4 px-8 rounded-full transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
                  <Phone size={20} />
                  <span>Kostenloses Angebot anfordern</span>
               </a>
             </div>
             <p className="mt-6 mb-8 md:mb-0 text-sm font-medium text-gray-500 uppercase tracking-wider">Unverbindlich & Schnell</p>
          </div>
        </FadeIn>

      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] md:h-[80px] fill-gray-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};