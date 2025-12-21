import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Sparkles, ChevronLeft, ChevronRight, Car, Armchair, Droplets } from 'lucide-react';
import { Logo } from './Logo';
import { FadeIn } from './FadeIn';

const COMPARISONS = [
  {
    id: 1,
    title: "Lackaufbereitung & Glanz",
    description: "Entfernung von Grauschleier und Mikrokratzern für tiefen Spiegelglanz.",
    icon: Car,
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop",
    filterBefore: "sepia(0.2) brightness(0.6) contrast(0.8) grayscale(0.4) blur(1px)"
  },
  {
    id: 2,
    title: "Innenraum Tiefenreinigung",
    description: "Fleckenentfernung und Frische für Leder und Textil.",
    icon: Armchair,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop",
    filterBefore: "sepia(0.4) brightness(0.8) contrast(0.9) saturate(0.5)"
  },
  {
    id: 3,
    title: "Felgen & Details",
    description: "Hartnäckiger Bremsstaub und Straßenschmutz werden restlos beseitigt.",
    icon: Droplets,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=1888&auto=format&fit=crop",
    filterBefore: "grayscale(0.8) brightness(0.5) contrast(0.8) sepia(0.3)"
  }
];

export const BeforeAfter: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentSlide = COMPARISONS[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % COMPARISONS.length);
    setPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + COMPARISONS.length) % COMPARISONS.length);
    setPosition(50);
  };

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleResize = useCallback((clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const newPosition = ((clientX - left) / width) * 100;
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  }, []);

  const handleMouseDown = () => setIsResizing(true);
  const handleTouchStart = () => setIsResizing(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      handleResize(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isResizing) return;
      handleResize(e.touches[0].clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopResizing);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopResizing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopResizing);
    };
  }, [isResizing, handleResize, stopResizing]);

  return (
    <section className="pt-24 pb-0 bg-white relative overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-6xl md:text-[250px] font-extrabold uppercase leading-none">Effect</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-24">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 bg-brand-950 inline-block px-3 py-1 rounded-sm">Ergebnisse, die überzeugen</h2>
            <h3 className="font-sans text-3xl md:text-5xl font-bold text-brand-950 mb-4">
              Der InteriorGlanz Effekt
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
              Verschieben Sie den Regler, um den Unterschied zu sehen.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="hidden md:flex justify-center gap-4 mb-8">
            {COMPARISONS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => { setCurrentIndex(idx); setPosition(50); }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  currentIndex === idx 
                    ? 'bg-brand-950 text-brand-gold shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <item.icon size={18} />
                {item.title}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="md:hidden flex flex-col gap-3 mb-8 px-1">
           {COMPARISONS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => { setCurrentIndex(idx); setPosition(50); }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left font-bold transition-all border ${
                currentIndex === idx 
                  ? 'bg-brand-950 text-brand-gold border-brand-950 shadow-md transform scale-[1.02]' 
                  : 'bg-gray-50 text-gray-600 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                 <item.icon size={20} className={currentIndex === idx ? 'text-brand-gold' : 'text-gray-400'} />
                 <span className="text-sm">{item.title}</span>
              </div>
              {currentIndex === idx && (
                 <div className="text-[10px] uppercase tracking-wider font-extrabold bg-brand-gold text-brand-950 px-2 py-0.5 rounded-sm">
                    Aktiv
                 </div>
              )}
            </button>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="relative w-full max-w-5xl mx-auto">
            
            <button 
              onClick={prevSlide}
              className="absolute -left-2 md:-left-16 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-brand-gold text-brand-950 p-2 md:p-3 rounded-full shadow-xl backdrop-blur-sm transition-all border border-gray-100"
              aria-label="Vorheriges Bild"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute -right-2 md:-right-16 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-brand-gold text-brand-950 p-2 md:p-3 rounded-full shadow-xl backdrop-blur-sm transition-all border border-gray-100"
              aria-label="Nächstes Bild"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white select-none group ring-1 ring-gray-200 bg-gray-100">
              
              <img
                src={currentSlide.image}
                alt={`${currentSlide.title} Nachher`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                draggable={false}
              />
              
              <div className="absolute top-6 right-6 bg-brand-gold px-3 py-1.5 md:px-4 md:py-2 rounded-sm shadow-lg z-20 flex items-center gap-2">
                <Logo className="h-4 md:h-6 w-auto" />
                <span className="text-brand-950 font-bold text-xs md:text-sm tracking-wider">NACHHER</span>
              </div>

              <div
                className="absolute inset-0 h-full overflow-hidden bg-gray-800 border-r-2 border-white"
                style={{ width: `${position}%` }}
              >
                <img
                  src={currentSlide.image}
                  alt={`${currentSlide.title} Vorher`}
                  className="absolute top-0 left-0 h-full max-w-none object-cover"
                  style={{ 
                    width: containerWidth || '100%',
                    filter: currentSlide.filterBefore 
                  }}
                  draggable={false}
                />
                <div className="absolute top-6 left-6 bg-white/90 text-gray-900 px-3 py-1.5 md:px-4 md:py-2 font-bold rounded-sm shadow-lg backdrop-blur-sm text-xs md:text-sm tracking-wider">
                  VORHER
                </div>
              </div>

              <div
                ref={containerRef}
                className="absolute inset-0 w-full h-full cursor-ew-resize z-30 touch-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <div
                  className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  style={{ left: `${position}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform transform hover:scale-110 active:scale-95">
                    <MoveHorizontal size={20} className="text-brand-950" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-gold/20 rounded-lg text-brand-950">
                  <currentSlide.icon size={24} />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-brand-950">{currentSlide.title}</h4>
                  <p className="text-gray-500 text-sm">{currentSlide.description}</p>
                </div>
              </div>
              
              <div className="flex gap-2">
                 {COMPARISONS.map((_, idx) => (
                   <button
                     key={idx}
                     onClick={() => { setCurrentIndex(idx); setPosition(50); }}
                     className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex ? 'bg-brand-gold w-8' : 'bg-gray-300 hover:bg-gray-400'}`}
                     aria-label={`Gehe zu Slide ${idx + 1}`}
                   />
                 ))}
              </div>
            </div>

          </div>
        </FadeIn>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px] fill-brand-950">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};