import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Startseite', href: '#home' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Leistungen', href: '#services' },
    { name: 'Über uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isOpen 
        ? 'bg-brand-900 py-2' 
        : scrolled 
          ? 'bg-black/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center cursor-pointer z-50 relative">
            <a href="#home" className="block" aria-label="InteriorGlanz Startseite" onClick={() => setIsOpen(false)}>
              {/* Dynamic Logo Size */}
              <Logo className={`${scrolled || isOpen ? 'h-10 md:h-16' : 'h-12 md:h-20'} w-auto transition-all duration-300`} />
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
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brand-gold focus:outline-none transition-colors p-2"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-brand-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 pb-8 pt-20">
          
          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-gold text-2xl font-medium text-center transition-colors uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            ))}
          </div>

          {/* Bottom Action Area */}
          <div className="mt-12 w-full flex flex-col items-center">
            <div className="w-12 h-0.5 bg-white/10 mb-8"></div>
            
            <a
              href="tel:+491709095730"
              className="flex w-full max-w-xs items-center justify-center gap-3 bg-brand-gold text-brand-950 font-bold py-3.5 rounded-sm text-lg shadow-[0_0_20px_rgba(255,215,0,0.15)] active:scale-95 transition-transform hover:bg-white"
            >
              <Phone size={20} />
              Jetzt Anrufen
            </a>
            
            <div className="mt-6 flex items-center gap-2 text-gray-500 justify-center text-xs font-bold uppercase tracking-widest">
              <MapPin size={14} />
              <span>Nürnberg & Umgebung</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};