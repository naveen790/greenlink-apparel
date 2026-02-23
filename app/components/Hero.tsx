'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    /* 1. Reduced min-height to 85vh for better mobile "peeking" of the next section
       2. Adjusted padding: removed heavy py-32 on mobile to tighten the gap */
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center surface-modern pt-28 pb-12 md:py-32 px-6 lg:px-16 overflow-hidden">
      
      <div className="max-w-[1800px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Editorial Text */}
        <div className="lg:col-span-7 z-10 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
  
          {/* Main Tagline: Scaled down text-5xl for mobile to prevent overflow */}
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-serif text-5xl sm:text-6xl md:text-[8.5rem] leading-[1.1] md:leading-[0.8] tracking-tighter text-brand-dark mb-8 md:mb-12"
          >
            The Art of 
            <span className="italic font-light text-brand-green block md:inline"> Apparel</span>
          </motion.h1>

          {/* Subtext Hook */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="w-full flex flex-col items-center lg:items-start"
          >
            <div className="h-[1px] w-16 md:w-24 bg-brand-gold/30 mb-6 md:mb-8" /> 
            
            <p className="max-w-xs md:max-w-md text-brand-sage text-lg md:text-2xl font-light leading-relaxed italic">
              Curate your vision
              <span className="text-brand-gold/40 not-italic mx-2 hidden md:inline">|</span> 
              <span className="block md:inline">Build your collection</span>
            </p>
            
            {/* CTA Button: Full width on very small screens, auto on desktop */}
            <div className="mt-10 md:mt-12 w-full md:w-auto px-4 md:px-0">
              <a href="#gallery" className="btn-premium block md:inline-block text-center">
                View Collection
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image - Placed first on mobile for visual impact */}
        <div className="lg:col-span-5 relative order-1 lg:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[3/4] overflow-hidden shadow-lux border-[8px] md:border-[12px] border-white max-w-[400px] lg:max-w-none mx-auto"
          >
            <img 
              src="/hero-apparel.jpg" 
              alt="Premium Fabric Detail" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}