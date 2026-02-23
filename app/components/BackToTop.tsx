'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const threshold = 400;
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-[9999] group flex flex-col items-center gap-4"
          aria-label="Back to top"
        >
          {/* Vertical Label */}
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#1B2721]/40 [writing-mode:vertical-lr] transition-colors group-hover:text-[#C5A059] duration-500">
            Top
          </span>

          {/* The Needle/Arrow Component */}
          <div className="relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white border border-[#1B2721]/5 shadow-lux overflow-hidden">
            {/* Background Hover Fill */}
            <div className="absolute inset-0 bg-[#1B2721] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            
            <svg 
              className="relative z-10 w-4 h-4 text-[#C5A059] transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-[#F9F9F7]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
            </svg>

            {/* Micro-Interaction: Bottom line reveal */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C5A059] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}