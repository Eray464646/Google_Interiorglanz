import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50 relative">
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-brand-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-3">Termin Vereinbaren</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-950 mb-4">Bereit für neuen Glanz?</h3>
          <p className="text-gray-500">Sichern Sie sich Ihren Termin für eine unverbindliche Beratung.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 shadow-2xl rounded-sm overflow-hidden">
          
          {/* Info Side */}
          <div className="lg:col-span-2 bg-brand-900 text-white p-12 flex flex-col justify-between relative overflow-hidden">
             {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            
            <div className="relative z-10">
              <h4 className="font-serif text-3xl font-bold mb-8">Kontaktieren Sie uns</h4>
              <p className="text-gray-300 mb-10 leading-relaxed">
                Wir sind Ihr Ansprechpartner für Fahrzeugpflege in Nürnberg. Rufen Sie uns an oder schreiben Sie uns.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-950 transition-colors">
                     <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Telefon</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-serif font-medium hover:text-brand-gold transition-colors">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-950 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">E-Mail</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-brand-gold transition-colors">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-gold group-hover:text-brand-950 transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-xs uppercase tracking-wider text-gray-400 mb-1">Werkstatt</p>
                    <p className="text-lg leading-tight">{CONTACT_INFO.address}</p>
                    <p className="text-gray-400 text-sm mt-1">{CONTACT_INFO.city}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
               <div className="flex items-center gap-4">
                  <Clock className="text-brand-gold" />
                  <div>
                    <p className="text-sm font-medium text-white">Mo - Fr: 08:00 - 18:00 Uhr</p>
                    <p className="text-sm text-gray-400">Samstag nach Vereinbarung</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3 bg-white p-12">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Vorname</label>
                  <input type="text" className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 placeholder-gray-300 bg-transparent" placeholder="Max" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Nachname</label>
                  <input type="text" className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 placeholder-gray-300 bg-transparent" placeholder="Mustermann" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Telefon</label>
                  <input type="tel" className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 placeholder-gray-300 bg-transparent" placeholder="Für Rückfragen" />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Fahrzeugmodell</label>
                  <input type="text" className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 placeholder-gray-300 bg-transparent" placeholder="z.B. Audi A6" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Gewünschte Leistung</label>
                <select className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 bg-transparent cursor-pointer" defaultValue="">
                  <option value="" disabled>Bitte auswählen...</option>
                  <option>Komplettaufbereitung (Innen & Außen)</option>
                  <option>Nur Innenraumreinigung</option>
                  <option>Lackpolitur & Korrektur</option>
                  <option>Keramikversiegelung</option>
                  <option>Leasingrückgabe</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">Nachricht</label>
                <textarea rows={3} className="w-full px-0 py-3 border-b-2 border-gray-200 focus:border-brand-gold outline-none transition-all text-gray-900 placeholder-gray-300 bg-transparent resize-none" placeholder="Haben Sie spezielle Wünsche?"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-950 text-white font-bold py-4 rounded-sm hover:bg-brand-900 transition-all shadow-lg flex items-center justify-center gap-2 group">
                <span>Kostenloses Angebot anfordern</span>
                <Send size={16} className="group-hover:translate-x-1 transition-transform text-brand-gold" />
              </button>
              <p className="text-xs text-center text-gray-400">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};