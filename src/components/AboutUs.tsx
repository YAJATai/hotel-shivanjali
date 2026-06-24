import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT = "Hotel Shivanjali & Banquets has been a beloved dining destination in Pashan, Pune for over 20 years. We serve authentic North Indian curries, sizzling tandoori starters, Chinese specialities, and a wide range of vegetarian delights. From our famous veg platter and butter chicken to the crispy cheese corn balls and aromatic biryani — every dish is crafted with tradition and heart. With a spacious rooftop bar, elegant banquet halls, and a warm family-friendly ambience, Shivanjali is where Pune comes to celebrate good food and great company.";

const HIGHLIGHTS = [
  'Butter Chicken', 'Biryani', 'Veg Platter', 'Kung Pao Chicken',
  'Cheese Corn Balls', 'Dal Khichdi', 'Neer Dosa', 'Masala Papad',
  'Mojito', 'Chocolate Brownie', 'Rooftop Bar', 'Banquet Halls'
];

export function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = gsap.utils.toArray('.about-word', textRef.current);

    gsap.fromTo(textRef.current,
      { rotation: 1.5 },
      {
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        }
      }
    );

    gsap.from(words, {
      y: 20,
      stagger: 0.02,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 85%',
        once: true,
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-white py-20 md:py-36 flex flex-col items-center justify-center relative overflow-hidden">
      
      <div className="px-6 md:px-[15%] flex flex-col items-center">
        <span className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold font-manrope mb-3">Our Story</span>
        <h2 className="font-luxurious text-[32px] md:text-[44px] text-center text-black mb-[32px]">
          About Hotel Shivanjali
        </h2>

        <div 
          ref={textRef}
          className="font-manrope text-[20px] leading-[34px] md:text-[34px] md:leading-[52px] text-center text-neutral-800 flex flex-wrap justify-center font-normal tracking-wide max-w-5xl"
        >
          {ABOUT_TEXT.split(' ').map((word, i) => (
            <span key={i} className="about-word inline-block mr-[0.25em] font-manrope">
              {word}
            </span>
          ))}
        </div>

        <a 
          href="#gallery"
          className="mt-12 px-9 py-3 bg-black text-white font-manrope text-xs font-semibold tracking-widest hover:bg-gold transition-colors duration-300 rounded-sm uppercase"
        >
          Explore Menu
        </a>
      </div>

      <div className="w-full mt-20 md:mt-[120px] relative">
        <div className="absolute top-0 left-0 w-[100px] h-full bg-gradient-to-r from-white overscroll-none to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="overflow-hidden flex w-full h-[40px] border-y border-neutral-100 bg-neutral-50/50 py-2.5 items-center">
          <div className="flex gap-16 whitespace-nowrap animate-marquee items-center min-w-full">
            {HIGHLIGHTS.map((highlight, idx) => (
              <span key={`h1-${idx}`} className="font-manrope text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                <span>{highlight}</span>
                <span className="text-gold">•</span>
              </span>
            ))}
            {HIGHLIGHTS.map((highlight, idx) => (
              <span key={`h2-${idx}`} className="font-manrope text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                <span>{highlight}</span>
                <span className="text-gold">•</span>
              </span>
            ))}
            {HIGHLIGHTS.map((highlight, idx) => (
              <span key={`h3-${idx}`} className="font-manrope text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-400 flex items-center gap-2">
                <span>{highlight}</span>
                <span className="text-gold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
