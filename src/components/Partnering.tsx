import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, MessageSquare } from 'lucide-react';
import { SplitText } from './ui/SplitText';

gsap.registerPlugin(ScrollTrigger);

const REVIEWS = [
  {
    name: 'RaviKiran Garikapati',
    tag: 'Local Guide · 147 reviews',
    rating: 5,
    text: "We have gone for lunch with family, had both veg and non-veg dishes. For vegetarian a must try would be veg platter — they even customised for us. Every item in platter is tasty. Non veg starter we ordered was tasty but little spicy.",
    date: '3 weeks ago'
  },
  {
    name: 'Tushar Suradkar',
    tag: 'Local Guide · 1,151 reviews',
    rating: 5,
    text: "Shivanjali Hotel has been our GoTo place for more than 20 years of living on Pashan-Baner Link road. The entrance is attractive and the interiors are ultra luxurious. The food is best quality in Pashan Baner areas.",
    date: '3 months ago'
  },
  {
    name: 'Sumesh',
    tag: 'Local Guide · 262 reviews',
    rating: 5,
    text: "Been here for dinner at rooftop with covered roof. Good food and service. The rooftop bar vibe is amazing — perfect for evening gatherings with friends.",
    date: '4 months ago'
  },
  {
    name: 'Happy Diner',
    tag: 'Google Review',
    rating: 4,
    text: "Ambience, service, food everything is superb. Must visit place for happy dining. Food quality and quantity is excellent with a great variety of veg and non-veg dishes.",
    date: '1 month ago'
  }
];

export function Partnering() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from('.partner-title-char', {
      y: 20,
      duration: 0.5,
      stagger: 0.03,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      }
    });

    gsap.from('.partner-card', {
      y: 40,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.partner-cardsGrid',
        start: 'top 85%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="relative w-full py-20 md:py-28 bg-neutral-950 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            <span className="text-gold font-bold text-xs">4.2</span>
            <div className="flex items-center text-gold">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-gold text-gold" />
              ))}
              <Star className="w-3 h-3 text-neutral-700" />
            </div>
            <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-bold">3,160 Reviews</span>
          </div>
        </div>

        <h2 className="text-center mb-14 overflow-hidden px-4">
          <SplitText
            text="What Pune Says"
            className="font-luxurious text-[32px] md:text-[44px] leading-[1.3] text-white"
            charClass="partner-title-char"
          />
        </h2>

        <div className="partner-cardsGrid w-[90%] md:w-[65%] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className="partner-card bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 p-6 md:p-8 flex flex-col items-start gap-4 rounded-md transition-all duration-300 hover:border-gold/30 hover:bg-neutral-900/80"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="text-white font-semibold font-manrope text-sm tracking-wide">{review.name}</span>
                  <span className="text-gold/80 text-[10px] tracking-wider uppercase font-semibold mt-0.5">{review.tag}</span>
                </div>
                <div className="flex items-center text-gold gap-0.5">
                  {[...Array(review.rating)].map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                  {review.rating < 5 && (
                    <Star className="w-3.5 h-3.5 text-neutral-700" />
                  )}
                </div>
              </div>

              <div className="relative">
                <MessageSquare className="absolute -top-3 -left-3 w-8 h-8 text-white/5 pointer-events-none" />
                <p className="text-neutral-300 text-xs md:text-sm font-manrope leading-relaxed italic pl-3 relative z-10">
                  "{review.text}"
                </p>
              </div>

              <div className="w-full h-[1px] bg-neutral-800 mt-[10px]" />

              <div className="flex items-center justify-between w-full text-[10px] text-neutral-500 font-manrope font-semibold">
                <span>Verified Google Review</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
