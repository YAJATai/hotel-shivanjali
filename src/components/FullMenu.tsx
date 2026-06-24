import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const FILTERS = [
  { id: 'all', label: 'All Items' },
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'beverages', label: 'Beverages & Desserts' },
];

const MENU_CATEGORIES = [
  {
    id: "starters",
    title: "Starters & Appetizers",
    description: "Crispy, flavourful starters to begin your meal.",
    items: [
      { name: "Veg Platter", price: "450", desc: "Assorted vegetarian appetizers — paneer, corn balls & more" },
      { name: "Cheese Corn Balls", price: "299", desc: "Crispy golden-fried balls with melted cheese & sweet corn filling" },
      { name: "Masala Papad", price: "99", desc: "Crispy papad topped with fresh onions, tomatoes & spices" },
      { name: "Chicken Tikka", price: "399", desc: "Tender chicken marinated in yoghurt & spices, grilled in tandoor" },
      { name: "Paneer Tikka", price: "349", desc: "Marinated paneer chunks roasted in tandoor with bell peppers" }
    ]
  },
  {
    id: "mains",
    title: "Main Course",
    description: "Hearty curries, biryanis & classic North Indian dishes.",
    items: [
      { name: "Butter Chicken", price: "499", desc: "Rich & creamy tomato gravy with tender tandoori chicken" },
      { name: "Chicken Biryani", price: "399", desc: "Fragrant basmati layered with spiced chicken & aromatic herbs" },
      { name: "Veg Biryani", price: "329", desc: "Aromatic rice with mixed vegetables & rich spice blend" },
      { name: "Dal Khichdi", price: "249", desc: "Comforting rice & lentil porridge, served with pickle & papad" },
      { name: "Neer Dosa", price: "199", desc: "Soft, lacy rice crepes from coastal Karnataka, served with chutney" }
    ]
  },
  {
    id: "chinese",
    title: "Chinese Specialities",
    description: "Indo-Chinese favourites with bold flavours.",
    items: [
      { name: "Kung Pao Chicken", price: "449", desc: "Spicy stir-fried chicken with peanuts, chillies & Sichuan sauce" },
      { name: "Veg Manchurian", price: "329", desc: "Fried vegetable balls in a tangy soy-based gravy" },
      { name: "Chilli Chicken", price: "399", desc: "Crispy boneless chicken tossed in spicy chilli sauce" },
      { name: "Fried Rice", price: "299", desc: "Wok-tossed rice with vegetables, egg or your choice of meat" }
    ]
  },
  {
    id: "beverages",
    title: "Beverages & Desserts",
    description: "Refreshing drinks & sweet treats to end your meal.",
    items: [
      { name: "Virgin Mojito", price: "199", desc: "Refreshing mint & lime cooler with soda and a hint of sweetness" },
      { name: "Chocolate Brownie", price: "249", desc: "Warm fudgy brownie served with vanilla ice cream" },
      { name: "Gulab Jamun", price: "149", desc: "Soft milk dumplings soaked in rose-scented sugar syrup" },
      { name: "Ice Cream", price: "149", desc: "Creamy vanilla or chocolate ice cream" }
    ]
  }
];

export function FullMenu() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = MENU_CATEGORIES.filter(cat => 
    activeFilter === 'all' || cat.id === activeFilter
  );

  return (
    <div className="bg-[#fcfbf9] w-full py-24 md:py-32 flex justify-center border-t border-neutral-100">
      <div className="w-[90%] md:w-[70%] max-w-5xl">
        
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
           <span className="text-gold uppercase tracking-[0.25em] text-[11px] font-bold font-manrope">North Indian & Chinese</span>
           <h2 className="font-luxurious text-4xl md:text-[52px] text-black mt-3 mb-6">
             Full Menu
           </h2>
           <div className="w-16 h-[1px] bg-gold/50 mb-10" />

           <div className="flex flex-wrap justify-center gap-3">
             {FILTERS.map(filter => (
               <button
                 key={filter.id}
                 onClick={() => setActiveFilter(filter.id)}
                 className={`font-manrope text-xs font-bold uppercase tracking-widest px-6 py-2.5 rounded-full transition-all duration-300 ${
                   activeFilter === filter.id 
                    ? 'bg-neutral-900 text-gold shadow-md' 
                    : 'bg-white text-neutral-500 border border-neutral-200 hover:border-gold/50 hover:text-neutral-900'
                 }`}
               >
                 {filter.label}
               </button>
             ))}
           </div>
        </div>

        <motion.div layout className="flex flex-col gap-20">
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div 
                key={category.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col md:flex-row gap-8 md:gap-16"
              >
                
                <div className="md:w-[35%] flex flex-col gap-2 shrink-0">
                  <motion.h3 layout className="font-luxurious text-2xl md:text-[28px] text-black">
                    {category.title}
                  </motion.h3>
                  <motion.p layout className="font-manrope text-sm text-neutral-500 leading-relaxed italic pr-4">
                    {category.description}
                  </motion.p>
                </div>

                <motion.div layout className="md:w-[65%] flex flex-col gap-8">
                  {category.items.map((item, itemIdx) => (
                    <motion.div key={itemIdx} layout className="flex flex-col">
                      <div className="flex justify-between items-baseline gap-4 w-full">
                        <h4 className="font-manrope font-bold text-[15px] text-neutral-900 tracking-wide uppercase">
                          {item.name}
                        </h4>
                        <div className="flex-grow border-b border-dotted border-neutral-300 relative -top-1" />
                        {item.price && (
                          <span className="font-manrope font-bold text-[15px] text-gold shrink-0">
                            ₹{item.price}
                          </span>
                        )}
                      </div>
                      {item.desc && (
                        <p className="font-manrope text-[13px] text-neutral-500 mt-2 leading-relaxed max-w-[90%]">
                          {item.desc}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 pt-10 border-t border-neutral-200 text-center">
          <p className="font-manrope text-[10px] text-neutral-400 uppercase tracking-wider">
            ₹400–1,200 per person • Dine-in • Takeaway • No-contact delivery • Reserve a table • Order online
          </p>
          <p className="font-manrope text-[11px] text-gold font-semibold mt-2">
            हॉटेल शिवांजली 💯
          </p>
        </div>

      </div>
    </div>
  );
}
