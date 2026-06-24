import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { 
    label: 'Butter Chicken', 
    category: 'Signature', 
    description: 'Rich, creamy tomato-based curry with tender tandoori chicken pieces.',
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800' 
  },
  { 
    label: 'Biryani', 
    category: 'Popular', 
    description: 'Aromatic basmati rice layered with spiced meat or vegetables, slow-cooked to perfection.',
    img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800' 
  },
  { 
    label: 'Veg Platter', 
    category: 'Starters', 
    description: 'Assorted vegetarian appetizers featuring crispy corn balls, paneer, and more.',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800' 
  },
  { 
    label: 'Kung Pao Chicken', 
    category: 'Chinese', 
    description: 'Spicy stir-fried chicken with peanuts, vegetables & bold Sichuan flavours.',
    img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=800' 
  },
  { 
    label: 'Rooftop Dining', 
    category: 'The Vibe', 
    description: 'Elegant rooftop bar with covered seating — perfect for dinner under the stars with your favourite mojito.',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200', 
    wide: true 
  },
  { 
    label: 'Cheese Corn Balls', 
    category: 'Starters', 
    description: 'Crispy golden balls filled with melted cheese and sweet corn.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800' 
  },
  { 
    label: 'Chocolate Brownie', 
    category: 'Desserts', 
    description: 'Warm fudgy brownie served with ice cream — the perfect sweet ending.',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800' 
  },
];

export function ProductGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const items = gsap.utils.toArray('.gallery-item');
    gsap.from(items, {
      y: 40,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        once: true
      }
    });
  }, { scope: containerRef });

  return (
    <div className="bg-white py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden" ref={containerRef}>
      <div className="w-[90%] md:w-[65%]">
        
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold font-manrope">North Indian & More</span>
          <h2 className="font-luxurious text-4xl md:text-5xl text-black mt-2">
            Menu Highlights
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto my-4" />
          <p className="text-neutral-500 font-manrope text-sm max-w-lg mx-auto leading-relaxed">
            From sizzling tandoori starters and aromatic biryanis to Chinese classics and indulgent desserts — discover Pune's beloved dining destination.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 md:gap-x-6">
          {ITEMS.slice(0, 4).map((item) => (
            <GalleryCard key={item.label} item={item} />
          ))}

          <GalleryCard item={ITEMS[4]} extraClasses="col-span-2" />
          <GalleryCard item={ITEMS[5]} />
          <GalleryCard item={ITEMS[6]} />
        </div>

      </div>
    </div>
  );
}

function GalleryCard({ item, extraClasses = '' }: { key?: string; item: any; extraClasses?: string }) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className={`p-1 gallery-item flex flex-col group ${extraClasses}`}>
      <div 
        className="overflow-hidden rounded-sm relative bg-neutral-100 shadow-sm" 
        style={{ aspectRatio: item.wide ? '8/3' : '3/4' }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-100 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 -translate-x-full animate-[shimmer_1.5s_infinite]" />
            <div className="w-6 h-6 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
          </div>
        )}

        <img 
          src={item.img}
          alt={item.label}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover object-center transition-all duration-[4000ms] group-hover:scale-[1.15] group-hover:ease-[cubic-bezier(0.22,0.61,0.36,1)] ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } transition-opacity duration-700 ease-out`}
        />
        
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[9px] uppercase tracking-wider text-white font-manrope font-semibold">
          {item.category}
        </div>
      </div>

      <div className="text-left mt-3">
        <h3 className="text-black text-[15px] font-manrope font-semibold tracking-wide">
          {item.label}
        </h3>
        <p className="text-neutral-500 text-xs font-manrope mt-1.5 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
