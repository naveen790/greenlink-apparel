'use client';
import { motion } from 'framer-motion';

const standards = [
  {
    title: "Global Compliance",
    desc: "We enforce strict US and International labor standards across our entire global manufacturing network, ensuring ethical integrity at every node.",
    tag: "Ethical Sourcing"
  },
  {
    title: "OEKO-TEX® 100",
    desc: "Our materials undergo rigorous testing for harmful substances, guaranteeing textiles that are safe for both the consumer and the environment.",
    tag: "Chemical Safety"
  },
  {
    title: "Material Innovation",
    desc: "From our New York HQ, we scout the world for the latest in circular fibers and recycled textiles to keep your brand at the forefront of sustainability.",
    tag: "Circular Fibers"
  },
  {
    title: "Bespoke Logistics",
    desc: "We navigate the complexities of international trade, managing everything from global factory floors to your domestic distribution center.",
    tag: "Supply Chain"
  }
];

export default function Standards() {
  return (
    <section 
      id="standards" 
      className="py-32 px-6 overflow-hidden !bg-[#1B2721]" 
      style={{ 
        backgroundColor: '#1B2721', 
        scrollMarginTop: '100px', 
        position: 'relative',
        zIndex: 5
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="!text-[#C5A059] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6"
            >
              US-Based Strategic Sourcing
            </motion.span>
            <h2 
               className="font-serif italic text-5xl md:text-8xl leading-tight !text-[#F9F9F7]" 
               style={{ color: '#F9F9F7' }}
            >
              Global Reach. <br />Domestic Ease.
            </h2>
          </div>
          
          <p 
            className="max-w-sm text-sm font-light leading-relaxed border-l border-[#C5A059]/30 pl-8 !text-[#F9F9F7]" 
            style={{ color: '#F9F9F7' }}
          >
            Headquartered in New York, Greenlink acts as your elite bridge to the world's most sophisticated manufacturing clusters, delivering retail-ready excellence directly to your door.
          </p>
        </div>

        {/* Standards Grid */}
        {/* Increased bg opacity of the grid container to make the "lines" more visible */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C5A059]/40 border border-[#C5A059]/40">
          {standards.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 group transition-all duration-500"
              style={{ backgroundColor: '#1B2721' }}
            >
              <div className="flex justify-start items-start mb-12">
                <span 
                  className="text-[9px] uppercase tracking-widest border px-3 py-1 font-bold !text-[#F9F9F7] !border-[#F9F9F7]/50"
                  style={{ color: '#F9F9F7', borderColor: 'rgba(249, 249, 247, 0.5)' }}
                >
                  {item.tag}
                </span>
              </div>
              
              <h3 
                className="text-2xl font-serif italic mb-6 group-hover:!text-[#C5A059] transition-colors !text-[#F9F9F7]" 
                style={{ color: '#F9F9F7' }}
              >
                {item.title}
              </h3>
              
              <p 
                className="text-sm leading-relaxed font-light !text-[#FFFFFF]" 
                style={{ color: '#FFFFFF' }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}