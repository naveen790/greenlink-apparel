'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleInquiryEvent = (event: any) => {
      const pName = event.detail.productName;
      const template = `I am interested in discussing production for the ${pName}. Please provide more information regarding MOQs and customization options.`;
      setMessage(template);
      
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
    };

    window.addEventListener('productInquiry', handleInquiryEvent);
    return () => window.removeEventListener('productInquiry', handleInquiryEvent);
  }, []);

  return (
    <section id="contact" className="bg-brand-cream py-16 md:py-32 px-6 relative overflow-hidden">
      
      {/* Structural Watermark - Hidden on small mobile to prevent overflow issues */}
      <div className="hidden lg:block absolute top-1/2 -left-20 -translate-y-1/2 text-[15vw] font-serif italic text-brand-dark/[0.02] select-none pointer-events-none whitespace-nowrap -rotate-90">
        Connectivity
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-stretch">
        
        {/* LEFT: BRANDING & LOGISTICS INFO */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] font-bold mb-6 md:mb-10 block">
              Apparel Inquiries
            </span>
            <h3 className="font-serif text-4xl md:text-8xl tracking-tighter leading-[1.1] md:leading-[0.8] mb-8 md:mb-12 text-brand-dark">
              Let's build 
              <span className="italic font-light text-brand-green"> your collection</span>
            </h3>
            <p className="max-w-md text-base md:text-lg text-brand-sage font-light leading-relaxed italic mb-10 md:mb-16">
              Connect with our sourcing experts to scale your brand globally.
            </p>
          </motion.div>
          
          <div className="space-y-8 border-t border-brand-sand/40 pt-8">
            <div>
              <p className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold mb-3">Direct Inquiries</p>
              <a 
                href="mailto:production@greenlinkapparel.com" 
                className="font-serif italic text-lg md:text-xl text-brand-dark leading-tight underline decoration-brand-gold/20 hover:text-brand-green transition-colors"
              >
                production@greenlinkapparel.com
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: THE ELEVATED FORM CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="lg:col-span-7 bg-white p-6 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-brand-sand/10 relative"
        >
          <form className="space-y-10 md:space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16">
              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your name"
                  className="w-full bg-transparent border-b border-brand-sand py-2 focus:border-brand-dark outline-none transition-all font-light text-base md:text-lg placeholder:text-brand-sage/20 rounded-none appearance-none"
                  required
                />
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="email@brand.com"
                  className="w-full bg-transparent border-b border-brand-sand py-2 focus:border-brand-dark outline-none transition-all font-light text-base md:text-lg placeholder:text-brand-sage/20 rounded-none appearance-none"
                  required
                />
              </div>

              <div className="relative group md:col-span-2">
                <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Message</label>
                <textarea 
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-b border-brand-sand py-2 focus:border-brand-dark outline-none transition-all font-light text-base md:text-lg resize-none placeholder:text-brand-sage/20 rounded-none appearance-none"
                  required
                />
              </div>
            </div>

            <div className="pt-4 md:pt-8">
              <button 
                type="submit" 
                className="btn-premium w-full md:w-auto min-w-[240px] py-4"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}