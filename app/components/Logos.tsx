'use client';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../data';

export default function Logos() {
  return (
    <section className="bg-brand-cream pt-0 pb-0 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Heading */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4 md:mb-6"
          >
            <div className="w-8 md:w-12 h-[1px] bg-brand-gold/40"></div>
            <p className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold">
              Strategic Partners
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-brand-gold/40"></div>
          </motion.div>
          
          <h3 className="font-serif text-4xl md:text-7xl text-brand-dark tracking-tighter leading-tight">
            Trusted by the industry
            <span className="italic font-light text-brand-gold/80"> vanguard</span>
          </h3>
        </div>

        {/* Grid Logic:
            - grid-cols-2: Large logos for mobile (2 per row)
            - sm:grid-cols-3: Tablet view
            - lg:grid-cols-5: Exact 5 per row for Desktop
        */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-12 items-center justify-items-center">
  {CLIENT_LOGOS.map((logo, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0.6, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.05 }}
      className="w-full flex justify-center items-center group"
    >
      {/* rectangular tile with reduced height */}
      <div className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[240px] h-12 sm:h-14 md:h-16 flex items-center justify-center overflow-hidden rounded-md">
        <img
          src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`}
          alt={logo}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-95"
        />
      </div>
    </motion.div>
  ))}
</div>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
      </div>
    </section>
  );
}