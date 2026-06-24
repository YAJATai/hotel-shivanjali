import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const SECTIONS = [
  { id: 'hero', label: 'Tour' },
  { id: 'gallery', label: 'Highlights' },
  { id: 'full-menu', label: 'Full Menu' },
  { id: 'about', label: 'Our Story' },
  { id: 'partnering', label: 'Reviews' },
  { id: 'footer', label: 'Connect' },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }

      const viewportCenter = window.innerHeight / 2;
      let currentSection = 'hero';
      let minDistance = Infinity;

      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.5 });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const activeIndex = SECTIONS.findIndex(s => s.id === activeSection);

  return (
    <div className="fixed right-6 md:right-8 top-[65%] -translate-y-1/2 z-40 flex flex-col items-center gap-5 select-none hidden sm:flex">
      <div className="relative w-[2px] h-[160px] bg-white/10 rounded-full flex flex-col justify-between items-center py-2">
        <div 
          className="absolute top-0 left-0 w-full bg-gold/40 transition-all duration-300 rounded-full"
          style={{ height: `${scrollProgress * 100}%` }}
        />

        <div 
          className="absolute w-1 bg-gold rounded-full transition-all duration-500 ease-out"
          style={{
            height: '24px',
            top: `${(activeIndex / (SECTIONS.length - 1)) * 128 + 8}px`
          }}
        />

        {SECTIONS.map((section, idx) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className="group relative z-10 w-4 h-4 flex items-center justify-center focus:outline-none cursor-pointer"
              aria-label={`Scroll to ${section.label}`}
            >
              <div 
                className={cn(
                  "w-2.5 h-2.5 rounded-full border transition-all duration-300 flex items-center justify-center",
                  isActive 
                    ? "border-gold bg-gold scale-125 shadow-[0_0_10px_rgba(212,160,23,0.5)]" 
                    : "border-white/40 bg-zinc-900 group-hover:border-white group-hover:scale-110"
                )}
              >
                <div 
                  className={cn(
                    "w-1 h-1 rounded-full bg-white transition-opacity duration-300",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}
                />
              </div>

              <div 
                className={cn(
                  "absolute right-7 py-1 px-3 rounded bg-black/85 backdrop-blur-md border border-white/10 shadow-lg text-[10px] tracking-[0.2em] font-manrope font-semibold text-white/90 uppercase whitespace-nowrap opacity-0 pointer-events-none translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0",
                  isActive && "opacity-60 bg-gold/10 border-gold/20"
                )}
              >
                {section.label}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
