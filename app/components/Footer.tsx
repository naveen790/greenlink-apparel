'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-cream pt-16 pb-12 md:py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Logo & Back to Top interaction */}
        <motion.button 
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8 group flex flex-col items-center gap-4"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
            <img 
              src="/leaf-logo.png" 
              alt="GreenLink Apparel" 
              className="w-full h-full object-contain" 
            />
          </div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-brand-gold opacity-0 group-hover:opacity-100 transition-all duration-500">
            Back to Top
          </span>
        </motion.button>

        {/* Structural Divider for Mobile */}
        <div className="w-12 h-[1px] bg-brand-gold/20 mb-10" />

        {/* Footer Links - Added for mobile navigation ease */}
        <div className="flex gap-8 mb-12 lg:hidden">
          {['About', 'Collection', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[10px] uppercase tracking-widest text-brand-dark/60 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* The Copyright Line: Adjusted tracking for better small-screen legibility */}
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <p className="text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.8em] text-brand-sage font-light opacity-60">
            © {currentYear} GreenLink Apparel. 
            <span className="hidden md:inline mx-2">|</span>
            <span className="block md:inline mt-2 md:mt-0">All Rights Reserved.</span>
          </p>
        </div>
        
      </div>
    </footer>
  );
}