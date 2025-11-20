import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Direct path to the logo in the public/root directory
  const logoSrc = "/logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section with Fallback */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <a href="#" className="block">
              {!logoError ? (
                <img 
                  src={logoSrc} 
                  alt="InteriorGlanz Mobile Autoreinigung Nürnberg" 
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Try logo.png.png fallback just in case user file naming issue persists
                    if (target.src.endsWith('/logo.png')) {
                      target.src = '/logo.png.png';
                    } else {
                      setLogoError(true);
                    }
                  }}
                />
              ) : (
                /* Fallback Text Logo if Image is missing */
                <div className="flex flex-col">
                  <span className={`font-sans text-2xl md:text-3xl font-extrabold tracking-tighter ${scrolled ? 'text-white' : 'text-white'}`}>
                    INTERIOR<span className="text-brand-gold">GLANZ</span>
                  </span>
                  <span className="text-[10px] md:text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
                    Mobile Autopflege
                  </span>
                </div>
              )}
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-brand-gold transition-colors text-sm font-bold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pl-4 border-l border-gray-700 ml-4">
              <a 
                href="tel:+491709095730" 
                className="bg-brand-gold text-brand-950 px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <Phone size={16} className="fill-current" />
                0170 909 57 30
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold focus:outline-none transition-colors"
              aria-label="Menü öffnen"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} pt-24`}>
        <div className="px-4 pt-2 pb-3 space-y-2 flex flex-col h-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-brand-gold block px-3 py-4 text-xl font-bold border-b border-gray-900 transition-colors uppercase tracking-wider"
            >
              {link.name}
            </a>
          ))}
          
          <div className="mt-8 space-y-4 px-3">
             <a 
               href="tel:+491709095730"
               className="flex w-full items-center justify-center gap-2 bg-brand-gold text-brand-950 font-bold py-4 rounded-sm text-lg"
            >
              <Phone size={20} />
              Jetzt Anrufen
            </a>
            <div className="flex items-center gap-3 text-gray-400 justify-center mt-8">
              <MapPin size={18} />
              <span>Nürnberg & Umgebung</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};