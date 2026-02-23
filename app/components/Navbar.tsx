'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Collection', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-[1000] transition-all duration-700 ease-in-out px-4 md:px-16 ${
        scrolled || isOpen 
          ? 'py-4 md:py-5 bg-brand-cream/95 backdrop-blur-xl' 
          : 'py-8 md:py-12 bg-transparent'
      }`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          
          <Link 
            href="/" 
            onClick={scrollToTop}
            className="flex items-center gap-3 md:gap-4 z-[1001] group"
          >
            <div className="relative w-7 h-7 md:w-9 md:h-9">
               <img 
                 src="/leaf-logo.png" 
                 alt="GreenLink Apparel" 
                 className="w-full h-full object-contain" 
               />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline">
              <span className="font-serif text-lg md:text-2xl text-brand-dark tracking-[0.2em] md:tracking-[0.3em] uppercase font-light leading-tight group-hover:text-brand-gold transition-colors duration-500">
                GreenLink
                <span className="hidden md:inline">&nbsp;</span>
                <span className="block md:inline">Apparel</span>
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV: Updated hover:text-brand-gold and underline color */}
          <div className="hidden lg:flex gap-16">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link 
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.7em] font-bold text-brand-dark/60 hover:text-brand-gold transition-all duration-500 relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Underline now matches gold */}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-[1001] flex items-center gap-3 p-2 touch-manipulation"
            aria-label="Toggle Menu"
          >
            <span className="text-[9px] uppercase tracking-widest font-bold text-brand-gold">
              {isOpen ? 'Close' : 'Menu'}
            </span>
            <div className="flex flex-col items-end gap-1.5">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }}
                className="h-[1.5px] bg-brand-dark block origin-center"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, width: "0px" } : { opacity: 1, width: "14px" }}
                className="h-[1.5px] bg-brand-dark block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7, width: "22px" } : { rotate: 0, y: 0, width: "22px" }}
                className="h-[1.5px] bg-brand-dark block origin-center"
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-[999] flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none surface-fiber" />

            <div className="flex flex-col gap-8 md:gap-12 text-center relative z-10">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name} 
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ delay: 0.2 + (i * 0.1) }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    /* Mobile Overlay links: Updated hover color to brand-gold */
                    className="font-serif italic text-5xl md:text-7xl text-brand-dark hover:text-brand-gold transition-colors active:scale-95 block"
                  >
                    {link.name.toLowerCase()}.
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="absolute bottom-12 flex flex-col items-center gap-6">
              <div className="h-[1px] w-12 bg-brand-gold/30" />
              <p className="text-[10px] uppercase tracking-[0.8em] text-brand-gold font-bold">New York • Global</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}