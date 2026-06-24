import React from 'react';
import { Phone, Clock, MapPin, Compass, Globe } from 'lucide-react';

export function Footer() {
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Hotel+Shivanjali+Kokate+Nagar+Pashan+Pune";
  const websiteUrl = "https://hotelshivanjali.com";

  return (
    <footer className="bg-white w-full border-t border-neutral-100">
      <div className="px-6 md:px-10 lg:px-16 pt-16 md:pt-24 pb-12 flex flex-col gap-12">
        
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          <div className="flex flex-col items-start gap-4 max-w-sm">
            <h3 className="font-luxurious text-2xl tracking-wide text-black">
              Hotel Shivanjali & Banquets
            </h3>
            <p className="text-sm text-neutral-500 font-manrope leading-relaxed">
              Pashan's beloved family restaurant since two decades — serving authentic North Indian curries, sizzling tandoori starters, Chinese specialities, and a warm rooftop dining experience.
            </p>
            <div className="flex items-center gap-2 mt-2 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full font-manrope">
              <Clock className="w-3.5 h-3.5" />
              <span>Open • Closes 11:30 PM Daily</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 font-body min-w-[280px]">
             
             <div className="flex flex-col gap-4">
                <h4 className="text-[12px] text-neutral-400 uppercase tracking-widest font-bold font-manrope">Get in Touch</h4>
                <div className="flex flex-col gap-3 font-manrope">
                  <a 
                    href="tel:9422058124" 
                    className="flex items-center gap-2 text-sm font-bold text-black hover:text-gold transition-colors group"
                  >
                    <Phone className="w-4 h-4 text-neutral-400 group-hover:text-gold" />
                    <span>094220 58124</span>
                  </a>
                  <a 
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-black hover:text-gold transition-colors"
                  >
                    <Globe className="w-4 h-4 text-neutral-400 group-hover:text-gold" />
                    <span>hotelshivanjali.com</span>
                  </a>
                  <div className="flex items-start gap-2 text-sm text-neutral-600 leading-relaxed max-w-[300px]">
                    <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>Survey 120/1, Kokate Nagar, Pashan - Sus Rd, near Lenyadri Housing Society, Pashan, Pune - 411021</span>
                  </div>
                </div>
             </div>

             <div className="flex flex-col gap-4">
                <h4 className="text-[12px] text-neutral-400 uppercase tracking-widest font-bold font-manrope">Explore</h4>
                <div className="flex flex-col gap-3 font-manrope">
                  <a href="#hero" className="text-sm font-medium text-black hover:text-gold transition-colors">Video Tour</a>
                  <a href="#gallery" className="text-sm font-medium text-black hover:text-gold transition-colors">Menu Highlights</a>
                  <a href="#about" className="text-sm font-medium text-black hover:text-gold transition-colors">Our Story</a>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-bold text-gold hover:underline">
                    <Compass className="w-4 h-4" />
                    <span>Get Live Directions</span>
                  </a>
                </div>
             </div>

          </div>
        </div>

        <div className="w-full h-[200px] md:h-[260px] rounded-sm overflow-hidden relative border border-neutral-100 group shadow-sm bg-neutral-100">
          <iframe 
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDREZBeBTO6wZ5ox6JQ2wDvCiZt5TSPFZc&q=Hotel+Shivanjali+Pune&center=18.55,73.78&zoom=15"
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-[600ms]"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hotel Shivanjali location"
          />
          <div className="absolute inset-0 bg-black/5 pointer-events-none group-hover:bg-transparent transition-all duration-[600ms]" />
          
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="absolute bottom-4 right-4 bg-black hover:bg-gold text-white font-manrope text-xs font-semibold tracking-wider uppercase py-2.5 px-5 rounded-sm shadow-lg flex items-center gap-2 transition-colors duration-300 pointer-events-auto"
          >
            <Compass className="w-3.5 h-3.5" />
            <span>Open in Google Maps</span>
          </a>
        </div>

      </div>

      <div className="bg-black px-6 md:px-10 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 font-manrope">
        <div className="text-[11px] text-white/40 tracking-wider">
          © {new Date().getFullYear()} Hotel Shivanjali & Banquets, Pune. Since two decades of flavour.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-[11px] text-white/40 hover:text-white transition-colors tracking-wider">Privacy Policy</a>
          <a href="#" className="text-[11px] text-white/40 hover:text-white transition-colors tracking-wider">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
