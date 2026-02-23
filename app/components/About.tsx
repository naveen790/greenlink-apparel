'use client';
import { motion } from 'framer-motion';

const sustainabilityPillars = [
  { title: "Ethical Sourcing", subtitle: "Integrity", desc: "We mandate uncompromising labor standards across our global manufacturing network, ensuring social responsibility." },
  { title: "Product Safety", subtitle: "Quality", desc: "Rigorous testing and auditing guarantee apparel that honors the quality of product and physical well-being." },
  { title: "On-time Everytime", subtitle: "Punctuality", desc: "We respect your deadlines as much as our fabric quality. Our team ensures every order arrives exactly when promised." },  
  { title: "Eco Friendly", subtitle: "Sustainability", desc: "From regenerative cotton to natural dyes, our manufacturing is incentivized to reduce environmental impact." }
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream pt-10 md:pt-20 pb-20 md:pb-48 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Balanced leading for mobile readability */}
        <header className="mb-12 md:mb-24">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-4 md:mb-6">
            Our Philosophy
          </span>
          <h3 className="font-serif text-4xl md:text-8xl tracking-tighter text-brand-dark leading-[1.1] md:leading-none">
            Strategic Sourcing Excellence
          </h3>
        </header>

        {/* NARRATIVE SECTION */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 mb-20 md:mb-40"> 
          
          {/* IMAGE SECTION: Appears first on mobile for visual engagement */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-white shadow-xl overflow-hidden border-[8px] md:border-[12px] border-white"
            >
              <img 
                src="/factory-floor1.jpg" 
                alt="GreenLink Quality Apparel" 
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105" 
              />
              <div className="absolute inset-0 bg-brand-dark/5"></div>
            </motion.div>
          </div>

          {/* TEXT CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1"> 
            <motion.div  
              initial={{ opacity: 0, y: 15 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.8 }} 
              className="space-y-6 md:space-y-12"
            > 
              <div className="space-y-6 text-base md:text-lg text-brand-sage font-light leading-relaxed max-w-2xl">
                <p>
                  <span className="font-medium italic text-brand-dark">Greenlink Apparel</span> is a premier strategic sourcing house that has shaped the United States retail landscape for over 15 years.
                </p>
                <p>
                  Our reach spans every major U.S. market, delivering a comprehensive portfolio of organic and conventional cotton apparels. We design for <span className="text-brand-dark/80 font-normal">Men, Women, Juniors & Infants</span>—ranging from essential tees and hoodies to specialized infant wear and performance sportswear.
                </p> 
                <p>
                  We fuse innovation with price-conscious luxury, establishing Greenlink as a primary partner to the world’s most discerning retailers. 
                </p> 
              </div>

              {/* Minimalist Quote */}
              <div className="border-l-2 border-brand-gold pl-6 md:pl-8 py-1 md:py-2 mt-8 md:mt-12">
                <p className="text-brand-dark/70 text-base md:text-lg italic font-serif leading-relaxed">
                  "We manage the lifecycle of the garment from yarn selection to final retail distribution."
                </p>
              </div>
            </motion.div> 
          </div> 
        </div> 

        {/* PERMANENT PILLARS: Responsive grid scaling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-brand-sand/40 pt-16 md:pt-20">
          {sustainabilityPillars.map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col group"
            >
              <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-black mb-4 md:mb-6">
                {pillar.subtitle}
              </span>
              <h5 className="text-xl md:text-2xl font-serif italic mb-4 text-brand-dark leading-tight group-hover:text-brand-green transition-colors">
                {pillar.title}
              </h5>
              <p className="text-sm font-light leading-relaxed text-brand-sage italic">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}