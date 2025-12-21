import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div>
            <a href="#home" className="block mb-6" aria-label="InteriorGlanz Home">
              {/* Footer Logo - etwas kleiner als Header */}
              <Logo className="h-12 md:h-14 w-auto transition-all duration-300" />
            </a>
            <p className="text-gray-400 mb-6">
              Ihr Spezialist für professionelle Autoaufbereitung und Autoreinigung in Nürnberg. Wir bringen den Glanz zurück.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-gold transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links (SEO) */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Leistungen</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Autoaufbereitung Nürnberg</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Innenraumreinigung</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Lackpolitur & Versiegelung</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Geruchsentfernung Ozon</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Leasingrückgabe Aufbereitung</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Kontakt</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{CONTACT_INFO.address}</li>
              <li>{CONTACT_INFO.city}</li>
              <li><a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-brand-gold">{CONTACT_INFO.phone}</a></li>
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-gold">{CONTACT_INFO.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} InteriorGlanz. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#impressum" className="hover:text-white">Impressum</a>
            <a href="#datenschutz" className="hover:text-white">Datenschutz</a>
            <a href="#agb" className="hover:text-white">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};