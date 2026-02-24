'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Handle auto-reset after success
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        setStatus('idle');
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [status]);

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      fax_number: formData.get('fax_number'), // Honeypot
      message: message,
    };

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-brand-cream py-16 md:py-32 px-6 relative overflow-hidden">
      {/* Structural Watermark */}
      <div className="hidden lg:block absolute top-1/2 -left-20 -translate-y-1/2 text-[15vw] font-serif italic text-brand-dark/[0.02] select-none pointer-events-none whitespace-nowrap -rotate-90">
        Connectivity
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 items-stretch">
        
        {/* LEFT: BRANDING */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold mb-6 block">Apparel Inquiries</span>
            <h3 className="font-serif text-4xl md:text-8xl tracking-tighter leading-[1.1] mb-8 text-brand-dark">
              Let's build <span className="italic font-light text-brand-green"> your collection</span>
            </h3>
          </motion.div>
          <div className="space-y-8 border-t border-brand-sand/40 pt-8">
            <a href="mailto:info@greenlinkapparel.com" className="font-serif italic text-lg md:text-xl text-brand-dark underline decoration-brand-gold/20 hover:text-brand-green transition-colors">
              info@greenlinkapparel.com
            </a>
          </div>
        </div>

        {/* RIGHT: THE FORM CARD */}
        <motion.div 
          className="lg:col-span-7 bg-white p-6 md:p-16 lg:p-20 shadow-lux border border-brand-sand/10 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="h-full flex flex-col justify-center items-center text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-serif italic text-3xl text-brand-dark mb-4">Inquiry Received</h4>
                <p className="text-brand-sage font-light max-w-xs mx-auto">
                  Our sourcing team has been notified and will contact you shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-[10px] uppercase tracking-[0.2em] text-brand-gold hover:text-brand-dark transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit} 
                className="space-y-10 md:space-y-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <div className="relative group">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Full Name</label>
                    <input name="name" type="text" placeholder="Your name" className="w-full bg-transparent border-b border-brand-sand py-2 outline-none font-light" autoComplete="off" required />
                  </div>

                  <div className="relative group">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Email</label>
                    <input name="email" type="email" placeholder="email@brand.com" className="w-full bg-transparent border-b border-brand-sand py-2 outline-none font-light" autoComplete="off" required />
                  </div>

                  <div className="relative group md:col-span-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Phone Number (Optional)</label>
                    <input name="phone" type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-brand-sand py-2 outline-none font-light" autoComplete="off" />
                  </div>

                  {/* Honeypot */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <input type="text" name="fax_number" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="relative group md:col-span-2">
                    <label className="text-[9px] uppercase tracking-[0.4em] font-bold text-brand-gold block mb-2">Message</label>
                    <textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell us about your project..." className="w-full bg-transparent border-b border-brand-sand py-2 outline-none font-light resize-none" required />
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" disabled={status === 'loading'} className="btn-premium w-full md:w-auto min-w-[240px] py-4 disabled:opacity-50">
                    {status === 'loading' ? 'Processing...' : 'Send Inquiry'}
                  </button>
                  {status === 'error' && <p className="mt-4 text-red-500 italic text-sm">Something went wrong. Please try again.</p>}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}