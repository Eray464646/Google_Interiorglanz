import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoveHorizontal, Sparkles } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Stop resizing when mouse/touch is released
  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  // Handle the resizing logic
  const handleResize = useCallback((clientX: number) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const newPosition = ((clientX - left) / width) * 100;
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  }, []);

  const handleMouseDown = () => setIsResizing(true);
  const handleTouchStart = () => setIsResizing(true);

  // Robustly track container width to prevent image squishing during window resize
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

  // Global event listeners for dragging
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
       {/* Background Title Element */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center opacity-[0.03] pointer-events-none select-none">
        <span className="text-[150px] md:text-[250px] font-extrabold uppercase leading-none">Effect</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3 bg-brand-950 inline-block px-3 py-1 rounded-sm">Ergebnisse, die überzeugen</h2>
          <h3 className="font-sans text-4xl md:text-5xl font-bold text-brand-950 mb-6">
            Der InteriorGlanz Effekt
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Verschieben Sie den Regler, um den Unterschied zu sehen. Wir entfernen tiefsitzenden Schmutz und bringen den Neuwagen-Charakter zurück.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white select-none group ring-1 ring-gray-200">
          
          {/* AFTER Image (Background) - The Clean Version */}
          <img
            src="https://images.unsplash.com/photo-1562920616-06df4a663715?q=80&w=2000&auto=format&fit=crop"
            alt="Autoaufbereitung Nachher Sauber"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          
          {/* Label After */}
          <div className="absolute top-6 right-6 bg-brand-gold text-brand-950 px-4 py-2 font-bold rounded-sm shadow-lg z-20 text-sm tracking-wider">
            NACHHER
          </div>

          {/* BEFORE Image (Clipped Foreground) - The "Dirty" Version */}
          <div
            className="absolute inset-0 h-full overflow-hidden bg-gray-200 border-r-2 border-white"
            style={{ width: `${position}%` }}
          >
            <img
              src="https://images.unsplash.com/photo-1562920616-06df4a663715?q=80&w=2000&auto=format&fit=crop"
              alt="Autoaufbereitung Vorher Schmutzig"
              className="absolute top-0 left-0 h-full max-w-none object-cover"
              style={{ 
                width: containerWidth || '100%', // Uses calculated width to prevent squishing
                filter: 'sepia(0.4) brightness(0.7) contrast(1.1) grayscale(0.4)' 
              }}
              draggable={false}
            />
             {/* Label Before */}
            <div className="absolute top-6 left-6 bg-white/90 text-gray-900 px-4 py-2 font-bold rounded-sm shadow-lg backdrop-blur-sm text-sm tracking-wider">
              VORHER
            </div>
          </div>

          {/* Slider Handle */}
          <div
            ref={containerRef}
            className="absolute inset-0 w-full h-full cursor-ew-resize z-30"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div
              className="absolute top-0 bottom-0 w-1 bg-brand-gold shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform transform group-hover:scale-110 active:scale-95">
                <MoveHorizontal size={24} className="text-brand-950" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-10">
           <div className="inline-flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-100 animate-fade-in">
              <Sparkles size={16} className="text-brand-gold" />
              <span>Interaktiver Vergleich: Ziehen Sie den Schieberegler</span>
           </div>
        </div>
      </div>

      {/* Smooth Gold Wave Transition to Next Section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px] fill-brand-gold">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};