'use client';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data';

export default function Logos() {
  return (
    <section className="bg-brand-cream py-12 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="w-6 md:w-8 h-[1px] bg-brand-gold/50"></div>
            <p className="text-brand-gold text-[9px] md:text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold">
              Strategic Partners
            </p>
            <div className="w-6 md:w-8 h-[1px] bg-brand-gold/50"></div>
          </motion.div>
          
          <h3 className="font-serif text-3xl md:text-6xl text-brand-dark tracking-tight leading-tight">
            Trusted by the industry
            <span className="italic font-light text-brand-green"> vanguard</span>
          </h3>
        </div>

        {/* Mobile Optimized Grid: 
            - grid-cols-2 for phones (prevents tiny, unreadable logos)
            - md:grid-cols-3 for tablet/desktop
            - Smaller gap on mobile (gap-8) vs desktop (gap-32)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-32 items-center justify-items-center">
          {CLIENT_LOGOS.map((logo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
              className="w-full flex justify-center group"
            >
              <div className="relative py-4 md:py-8 w-full flex justify-center">
                <img 
                  src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`} 
                  alt={logo}
                  className="h-8 md:h-16 w-auto max-w-[140px] md:max-w-[180px] object-contain 
                             saturate-[0.5] opacity-50 transition-all duration-[1s] ease-out
                             group-hover:opacity-100 group-hover:saturate-100 group-hover:scale-105"
                />
                
                {/* Subtle underline detail on hover - hidden on touch devices for cleaner look */}
                <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-gold/30 transition-all duration-700 group-hover:w-1/3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}