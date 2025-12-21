import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Calendar, CheckSquare, TrendingUp } from 'lucide-react';
import { CONTACT_INFO, SERVICES, PRICING_PACKAGES } from '../constants';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  const [urgencyMessage, setUrgencyMessage] = useState('');

  useEffect(() => {
    const today = new Date();
    const dayOfWeek = today.getDay(); 

    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
      const targetDate = new Date(today);
      targetDate.setDate(today.getDate() + 3);
      const formattedDate = targetDate.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });
      setUrgencyMessage(`Aktuell hohe Nachfrage: Nächste Termine ab ${formattedDate} verfügbar.`);
    } else {
      setUrgencyMessage("Aktuell hohe Nachfrage");
    }
  }, []);

  return (
    <section id="contact" className="py-24 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 bg-gray-900 inline-block px-3 py-1 rounded-sm">Kontakt & Buchung</h2>
            <h3 className="font-sans text-4xl md:text-5xl font-bold text-brand-950 mb-4">Termin für Autoaufbereitung anfragen</h3>
            <p className="text-gray-500 text-lg">Sichern Sie sich Ihren Wunschtermin für eine professionelle Autoreinigung in Nürnberg.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
          
          <div className="lg:col-span-2 bg-gray-900 text-white p-10 flex flex-col justify-between relative overflow-hidden border-r border-gray-800">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold opacity-5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <FadeIn delay={0.2}>
                <h4 className="font-sans text-3xl font-bold mb-8 text-white">Kontaktieren Sie uns</h4>
                <p className="text-gray-400 mb-10 leading-relaxed">
                  Sie haben Fragen zur <strong>mobilen Autoaufbereitung</strong> oder spezielle Wünsche? Wir beraten Sie gerne persönlich.
                </p>
              </FadeIn>
              
              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <div className="flex items-start gap-5 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-gray-900 transition-all">
                       <Phone size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-1">Telefon</p>
                      <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-xl font-medium text-white hover:text-brand-gold transition-colors">
                        {CONTACT_INFO.phone}
                      </a>
                    </div>
                  </div>
                </FadeIn>
                
                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-gray-900 transition-all">
                      <Mail size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-1">E-Mail</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium text-white hover:text-brand-gold transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex items-start gap-5 group">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-brand-gold border border-white/10 group-hover:bg-brand-gold group-hover:text-gray-900 transition-all">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-1">Einsatzgebiet</p>
                      <p className="text-lg leading-tight text-white">Nürnberg & Region</p>
                      <p className="text-brand-gold text-sm mt-1">Kostenlose Anfahrt im Stadtgebiet</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
               <p className="text-sm text-gray-500">Wir antworten in der Regel innerhalb von 2 Stunden.</p>
            </div>
          </div>

          <div className="lg:col-span-3 bg-white p-10 md:p-12">
            
            <FadeIn direction="left" delay={0.2}>
              <div className="mb-8 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-md flex items-start gap-4 shadow-sm">
                 <div className="bg-amber-100 p-2 rounded-full text-amber-600 shrink-0">
                    <TrendingUp size={20} />
                 </div>
                 <div>
                    <p className="text-amber-900 font-bold text-xs uppercase tracking-wide mb-0.5">Buchungslage</p>
                    <p className="text-amber-900 font-semibold text-sm md:text-base leading-tight">
                      {urgencyMessage}
                    </p>
                 </div>
              </div>
            </FadeIn>

            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">Vorname</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-gray-900 rounded-lg" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">Nachname</label>
                  <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-gray-900 rounded-lg" placeholder="Mustermann" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">Telefon</label>
                  <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-gray-900 rounded-lg" placeholder="0123 4567890" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">Fahrzeugmodell</label>
                  <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-gray-900 rounded-lg" placeholder="z.B. Audi A6, VW Golf" />
                </div>
              </div>

              <div className="p-8 bg-gray-50 border border-gray-100 rounded-xl space-y-8">
                
                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">
                    Gewünschtes Paket (Optional)
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-brand-gold outline-none text-gray-900 appearance-none rounded-lg cursor-pointer" defaultValue="">
                      <option value="">-- Bitte wählen --</option>
                      {PRICING_PACKAGES.map((pkg) => (
                        <option key={pkg.name} value={pkg.name}>
                          {pkg.name} - {pkg.price}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <CheckSquare size={18} className="text-brand-gold" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">
                    Zusatzleistungen (Mehrfachauswahl)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((service) => (
                      <label key={service.id} className="flex items-center space-x-3 p-3 bg-white border border-gray-200 rounded-lg hover:border-brand-gold hover:shadow-sm cursor-pointer transition-all">
                        <input type="checkbox" className="w-4 h-4 text-brand-gold border-gray-300 rounded focus:ring-brand-gold accent-brand-gold" />
                        <span className="text-sm text-gray-700 font-medium">{service.title}</span>
                      </label>
                    ))}
                  </div>
                </div>

                 <div className="space-y-3">
                   <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">
                    Wunschtermin
                  </label>
                  <div className="relative">
                    <input type="datetime-local" className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-brand-gold outline-none text-gray-900 rounded-lg" />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-brand-950">Nachricht (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all text-gray-900 rounded-lg resize-none" placeholder="Ihre Nachricht an uns..."></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-gold text-brand-950 font-bold text-lg py-4 rounded-lg hover:bg-brand-gold-light transition-all shadow-lg flex items-center justify-center gap-2 group transform hover:-translate-y-1">
                <span>Termin jetzt anfragen</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">Ihre Daten werden vertraulich behandelt. Antwort innerhalb von 24h.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};