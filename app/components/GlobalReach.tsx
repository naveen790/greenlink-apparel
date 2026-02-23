'use client';
import { motion } from 'framer-motion';

export default function GlobalReach() {
  return (
    <section className="bg-[#1B2721] py-32 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-4"
          >
            Logistical Infrastructure
          </motion.span>
          <h2 className="font-serif italic text-4xl md:text-6xl text-[#F9F9F7]">
            Global Hubs. Universal Delivery.
          </h2>
        </div>

        {/* The Map Canvas */}
        <div className="relative aspect-[16/9] w-full bg-[#1B2721] rounded-sm border border-white/5 overflow-hidden group">
          
          {/* Abstract World Map Silhouette (SVG) */}
          <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20 grayscale transition-opacity duration-700 group-hover:opacity-30">
             <path 
               fill="#F9F9F7" 
               d="M200,150 Q220,120 280,130 T350,160 T420,140 T500,180 T600,150 T750,180 T850,250 T700,450 T500,400 T300,420 T150,300 Z" 
               className="opacity-10"
             />
             {/* This is a simplified path; in production, you would use a high-quality World GeoJSON path */}
          </svg>

          {/* Connection Lines (Animated) */}
          <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
            {/* New York to SE Asia */}
            <motion.path
              d="M 240,180 Q 500,50 780,280"
              stroke="#C5A059"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
            {/* Europe to South Asia */}
            <motion.path
              d="M 480,140 Q 600,200 720,280"
              stroke="#C5A059"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2.5, delay: 0.5 }}
            />
            {/* Australia to South Asia */}
            <motion.path
              d="M 850,420 Q 800,350 720,280"
              stroke="#C5A059"
              strokeWidth="0.5"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.4 }}
              transition={{ duration: 2, delay: 1 }}
            />
          </svg>

          {/* New York (HQ) */}
          <div className="absolute top-[36%] left-[24%] z-20">
            <div className="relative">
              <div className="w-3 h-3 bg-[#C5A059] rounded-full animate-ping absolute opacity-75"></div>
              <div className="w-3 h-3 bg-[#C5A059] rounded-full relative"></div>
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-widest text-[#F9F9F7] font-bold whitespace-nowrap bg-[#1B2721] px-2 py-1 border border-white/10">
                New York HQ
              </span>
            </div>
          </div>

          {/* Manufacturing Nodes (S. Asia / SE Asia) */}
          <div className="absolute top-[56%] left-[72%] z-20">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span className="absolute top-4 left-0 text-[8px] uppercase tracking-widest text-white/50 whitespace-nowrap">
              South Asia Node
            </span>
          </div>

          <div className="absolute top-[62%] left-[80%] z-20">
            <div className="w-2 h-2 bg-white/40 rounded-full"></div>
            <span className="absolute top-4 left-0 text-[8px] uppercase tracking-widest text-white/50 whitespace-nowrap">
              SE Asia Node
            </span>
          </div>

          {/* Distribution Markets (Europe / Australia) */}
          <div className="absolute top-[28%] left-[48%] z-20">
            <div className="w-1.5 h-1.5 border border-white/50 rounded-full"></div>
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-white/50">Europe</span>
          </div>

          <div className="absolute top-[84%] left-[85%] z-20">
            <div className="w-1.5 h-1.5 border border-white/50 rounded-full"></div>
            <span className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-white/50">Australia</span>
          </div>

        </div>

        {/* Legend / Metrics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {[
            { label: 'Network Reach', val: '24 Countries' },
            { label: 'Lead Logistics', val: 'Door-to-Door' },
            { label: 'Design Origin', val: 'New York, USA' },
            { label: 'Quality Control', val: 'Dual-Audit System' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span className="text-[8px] uppercase tracking-widest text-white/30">{stat.label}</span>
              <span className="font-mono text-sm text-[#F9F9F7] uppercase tracking-wider">{stat.val}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}