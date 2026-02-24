'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { PRODUCTS } from '../data';

interface ProductSpecs {
  [key: string]: any;
}

interface PRODUCT {
  id: number;
  name: string;
  category: string;
  image: string | StaticImageData;
  details: string;
  specs?: ProductSpecs; 
}

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState<null | PRODUCT>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // --- FIX 1: Body Scroll Lock ---
  // Prevents the background from scrolling while the specification modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))], 
  []);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // --- FIX 2: Enhanced Inquiry Scroll ---
  const handleInquiry = () => {
    const event = new CustomEvent('productInquiry', { 
      detail: { productName: selectedProduct?.name } 
    });
    window.dispatchEvent(event);
    
    // Close modal first
    setSelectedProduct(null);
    
    // Wait for modal exit animation before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 400);
  };

  return (
    <section id="gallery" className="bg-brand-cream py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter System */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 md:pb-12 border-b border-brand-sand/20">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold block mb-4"
            >
              The Archive
            </motion.span>
            <h3 className="font-serif italic text-4xl md:text-7xl leading-[1.1] text-brand-dark tracking-tighter">
              Curated Collections
            </h3>
          </div>

          <div className="flex flex-nowrap md:flex-wrap gap-6 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 pb-2 border-b-2 ${
                  activeCategory === cat 
                    ? 'border-brand-gold text-brand-dark' 
                    : 'border-transparent text-brand-sage opacity-40 hover:opacity-100 hover:text-brand-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Boutique Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product as PRODUCT)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-linen mb-6 shadow-sm group-hover:shadow-xl transition-all duration-700">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-all duration-[1.5s] group-hover:scale-105" 
                  />
                </div>

                <div className="flex justify-between items-start px-1">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">{product.category}</p>
                    <h3 className="font-serif text-2xl tracking-tight text-brand-dark group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  </div>
                  <div className="h-[1px] w-6 bg-brand-sand mt-4 group-hover:w-10 group-hover:bg-brand-gold transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Premium Specification Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center p-0 md:p-6 lg:p-12"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              // FIX 3: Container uses max-h and flex-col to prevent button burying
              className="bg-brand-cream text-brand-dark max-w-6xl w-full h-full md:h-auto md:max-h-[90vh] flex flex-col lg:grid lg:grid-cols-2 overflow-hidden shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Glassmorphism style for visibility */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-50 p-3 bg-white/20 backdrop-blur-lg border border-white/30 rounded-full text-brand-dark lg:text-white hover:text-brand-gold transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image Section */}
              <div className="relative h-[40vh] lg:h-full w-full bg-brand-linen">
                <Image src={selectedProduct.image} alt={selectedProduct.name} fill priority className="object-cover" />
              </div>

              {/* Modal Content Section - FIX 4: Scrollable content area */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col overflow-y-auto">
                 <span className="text-brand-gold text-[9px] uppercase tracking-[0.6em] font-bold mb-4 block">
                   Technical Archive
                 </span>
                 <h2 className="font-serif italic text-3xl md:text-5xl mb-6 text-brand-dark">
                   {selectedProduct.name}
                 </h2>
                 
                 <p className="text-brand-sage font-light mb-8 text-base leading-relaxed italic">
                    {selectedProduct.details}
                 </p>
                 
                 <div className="space-y-4 mb-10 flex-grow">
                    <div className="flex justify-between items-center border-b border-brand-sand/40 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Category</span>
                        <span className="text-xs font-medium uppercase tracking-tighter">{selectedProduct.category}</span>
                    </div>

                    {selectedProduct.specs && Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-brand-sand/40 pb-2">
                        <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">{key}</span>
                        <span className="text-xs font-medium uppercase tracking-tighter">{value}</span>
                      </div>
                    ))}
                 </div>

                 <button 
                  onClick={handleInquiry}
                  className="btn-premium w-full py-5 shrink-0"
                 >
                    Inquire this Style
                 </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}