'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { PRODUCTS } from '../data';

// Define the structure for Product Specifications
interface ProductSpecs {
  [key: string]: string | number;
}

// Strictly define the Product interface
interface PRODUCT {
  id: number;
  name: string;
  category: string;
  image: string;
  details: string;
  specs?: ProductSpecs; 
}

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState<null | PRODUCT>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories derived from data.ts
  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))], 
  []);

  // Filtering Logic
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  // Cross-component communication for the Contact Form
  const handleInquiry = () => {
    const event = new CustomEvent('productInquiry', { 
      detail: { productName: selectedProduct?.name } 
    });
    window.dispatchEvent(event);
    setSelectedProduct(null);
    
    // Smooth scroll to contact form after modal closes
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 450);
  };

  return (
    <section id="gallery" className="bg-brand-cream py-16 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header & Filter System */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8 md:pb-12">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold block mb-4"
            >
              The Archive
            </motion.span>
            <h3 className="font-serif italic text-4xl md:text-7xl leading-[1.1] md:leading-[0.9] text-brand-dark tracking-tighter">
              Curated Collections
            </h3>
          </div>

          {/* Filter Bar */}
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
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-12 gap-y-12 md:gap-y-20"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group cursor-pointer"
                onClick={() => setSelectedProduct(product as PRODUCT)}
              >
                {/* Image Card */}
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-linen mb-6 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-[2s] ease-out group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-700" />
                </div>

                {/* Card Labels */}
                <div className="flex justify-between items-start px-1">
                  <div className="space-y-1">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-bold">
                      {product.category}
                    </p>
                    <h3 className="font-serif text-2xl tracking-tight text-brand-dark group-hover:text-brand-gold transition-all">
                      {product.name}
                    </h3>
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
            className="fixed inset-0 z-[10000] bg-brand-dark/70 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              /* MOBILE FIX: Changed overflow-hidden to overflow-y-auto to allow scrolling */
              className="bg-brand-cream text-brand-dark max-w-6xl w-full flex flex-col lg:grid lg:grid-cols-2 max-h-[90vh] lg:max-h-[85vh] overflow-y-auto lg:overflow-hidden shadow-2xl relative rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button: Added background for mobile visibility over images */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 bg-brand-cream/80 backdrop-blur rounded-full lg:bg-transparent text-brand-dark hover:text-brand-gold hover:rotate-90 transition-all duration-500"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image Section: Increased mobile height to 50vh to show more of the garment */}
              <div className="relative h-[50vh] sm:h-[60vh] lg:h-full w-full bg-brand-linen flex-shrink-0">
                <Image 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  fill 
                  priority
                  className="object-cover object-center" 
                />
              </div>

              {/* Modal Content Section */}
              <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">
                 <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-4 block">
                   Ref: {selectedProduct.id.toString().padStart(3, '0')}
                 </span>
                 <h2 className="font-serif italic text-3xl md:text-5xl mb-6 leading-tight text-brand-dark">
                   {selectedProduct.name}
                 </h2>
                 
                 <div className="h-[1px] w-12 bg-brand-gold/40 mb-8"></div>
                 
                 <p className="text-brand-sage font-light mb-10 text-base md:text-lg leading-relaxed italic">
                    {selectedProduct.details}
                 </p>
                 
                 {/* Specifications Logic */}
                 <div className="space-y-4 mb-12">
                    <div className="flex justify-between items-center border-b border-brand-sand/40 pb-3">
                        <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">Category</span>
                        <span className="text-sm font-medium">{selectedProduct.category}</span>
                    </div>

                    {selectedProduct.specs && Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center border-b border-brand-sand/40 pb-3">
                        <span className="text-[10px] uppercase tracking-widest text-brand-dark/40 font-bold">{key}</span>
                        <span className="text-sm font-medium">{value}</span>
                      </div>
                    ))}
                 </div>

                 <button 
                  onClick={handleInquiry}
                  className="btn-premium w-full py-4 md:py-6 mb-6 lg:mb-0"
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