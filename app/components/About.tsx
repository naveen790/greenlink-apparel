'use client';
import { motion } from 'framer-motion';

const productCategories = [
  { id: "01", title: "Basic Knitwear", items: ["T-Shirts (Crew, V-Neck, Oversized)", "Polo Shirts", "Tank Tops & Vests", "Henleys", "Long Sleeve & Raglan Tees"] },
  { id: "02", title: "Ladies Knitwear", items: ["Jersey Tops & Blouses", "Tunics & Crop Tops", "Bodysuits", "Leggings & Jeggings", "Knit Dresses & Skirts"] },
  { id: "03", title: "Bottom Wear", items: ["Joggers & Track Pants", "Lounge Pants", "Shorts & Bermudas", "Pyjama Bottoms"] },
  { id: "04", title: "Outer & Winter", items: ["Sweatshirts & Hoodies", "Cardigans & Pullovers", "Knit Jackets", "Thermal Innerwear", "Fleece Sets"] },
  { id: "05", title: "Night & Lounge", items: ["Pyjama Sets", "Nightgowns", "Sleep T-Shirts", "Lounge Sets", "Robes"] },
  { id: "06", title: "Kids & Babywear", items: ["Rompers & Onesies", "Baby Sets", "T-Shirts & Shorts", "Leggings", "School Polos"] },
  { id: "07", title: "Innerwear", items: ["Briefs & Trunks", "Boxer Shorts", "Camisoles & Slips", "Thermal Sets"] },
  { id: "08", title: "Activewear", items: ["Gym T-Shirts", "Compression Wear", "Yoga Pants", "Sports Bras", "Track Suits"] },
  { id: "09", title: "Fashion Knitwear", items: ["Embellished (Print/Foil)", "Appliqué & Embroidery", "Tie-Dye Styles", "Vintage Washed Garments"] },
  { id: "10", title: "Sustainable", items: ["Organic Cotton Tees", "Bamboo Fabric Garments", "Recycled Polyester", "Eco-Dyed Garments"] },
];

const sustainabilityPillars = [
  { title: "Ethical Sourcing", subtitle: "Integrity", desc: "We mandate uncompromising labor standards across our global manufacturing network, ensuring social responsibility." },
  { title: "Product Safety", subtitle: "Quality", desc: "Rigorous testing and auditing guarantee apparel that honors the quality of product and physical well-being." },
  { title: "On-time Everytime", subtitle: "Punctuality", desc: "We respect your deadlines as much as our fabric quality. Our team ensures every order arrives exactly when promised." },  
  { title: "Eco Friendly", subtitle: "Sustainability", desc: "From regenerative cotton to natural dyes, our manufacturing is incentivized to reduce environmental impact." }
];

const certifications = [
  { name: "GOTS", label: "Organic Textile Standard", icon: "🍃" },
  { name: "OEKO-TEX", label: "Confidence in Textiles", icon: "🛡️" },
  { name: "BSCI", label: "Business Social Compliance", icon: "🤝" },
  { name: "WRAP", label: "Responsible Production", icon: "🌎" }
];

export default function About() {
  return (
    <section id="about" className="bg-brand-cream pt-10 md:pt-20 pb-0 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION 1: OUR PHILOSOPHY */}
        <div>
        {/* HERO SECTION */}
        <header className="mb-10 md:mb-12">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-4 md:mb-6">
            Our Philosophy
          </span>
          <h3 className="font-serif text-4xl md:text-8xl tracking-tighter text-brand-dark leading-[1.1] md:leading-none">
            Strategic Sourcing Excellence
          </h3>
        </header>

        {/* NARRATIVE SECTION */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24"> 
          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square md:aspect-[4/5] bg-white shadow-xl overflow-hidden border-[8px] md:border-[12px] border-white"
            >
              <img src="/factory-floor1.jpg" alt="GreenLink Quality Apparel" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-1"> 
            <motion.div className="space-y-8 text-base md:text-lg text-brand-sage font-light leading-relaxed max-w-2xl">
              <p>
                <span className="font-medium italic text-brand-dark">Greenlink Apparel</span> is a premier strategic sourcing house that has shaped the United States retail landscape for over 15 years. Our reach spans every major U.S. market, delivering a comprehensive portfolio of organic and conventional cotton apparels. 
              </p>
              
              {/* NEW GLOBAL HUB PARAGRAPH */}
              <p>
                We operate a <span className="text-brand-dark font-normal">Global Sourcing Network</span> with strategic hubs located in <span className="text-brand-dark font-normal">India, Bangladesh, China, Vietnam, and across South East Asia</span>. This diversified infrastructure allows us to match specific client needs with the world's most specialized manufacturing regions.
              </p>

              <p>
                We design for <span className="text-brand-dark font-normal">Men, Women, Juniors & Infants</span>—ranging from essential tees and hoodies to specialized infant wear and performance sportswear. Each collection is rooted in our commitment to <span className="text-brand-dark font-normal">environmental friendliness</span>, utilizing organic cotton and sustainable practices to meet global ecological benchmarks.
              </p> 
              <p>
                By maintaining <span className="text-brand-dark font-normal">strict quality control and rigorous compliance</span> protocols, we ensure that every garment honors both craft and conscience. We strive to the highest quality standards, ensuring on-time delivery through a supply chain built on transparency and ethical integrity.
              </p> 
            </motion.div> 
          </div> 
        </div>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
        </div>

        {/* SECTION 2: PRODUCTION SCOPE */}
        <div>
        {/* MANUFACTURING CAPABILITIES GRID */}
        <div>
          <div className="mb-10 md:mb-12">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Production Scope</span>
            <h4 className="font-serif italic text-3xl md:text-5xl text-brand-dark">Manufacturing Portfolio</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-brand-sand/30 border border-brand-sand/30">
            {productCategories.map((cat) => (
              <div key={cat.id} className="bg-brand-cream p-8 group hover:bg-white transition-colors duration-500">
                <span className="text-[10px] font-bold text-brand-gold mb-4 block opacity-50">{cat.id}</span>
                <h5 className="font-serif text-xl mb-6 text-brand-dark group-hover:text-brand-green transition-colors">{cat.title}</h5>
                <ul className="space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="text-[11px] uppercase tracking-wider text-brand-sage leading-tight italic">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
        </div>

        {/* SECTION 3: COMMITMENT */}
        <div>
        {/* PROMISE SECTION */}
        <div className="mb-10 md:mb-12">
            <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Commitment</span>
            <h4 className="font-serif italic text-3xl md:text-5xl text-brand-dark">Our Promise</h4>
        </div>

        {/* PILLARS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {sustainabilityPillars.map((pillar, i) => (
            <motion.div key={i} transition={{ delay: i * 0.1 }} className="flex flex-col group">
              <span className="text-brand-gold text-[9px] uppercase tracking-[0.4em] font-black mb-4">{pillar.subtitle}</span>
              <h5 className="text-xl md:text-2xl font-serif italic mb-4 text-brand-dark">{pillar.title}</h5>
              <p className="text-sm font-light text-brand-sage italic">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
        </div>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
        </div>

        {/* SECTION 4: COMPLIANCE & CERTIFICATIONS */}
        <div>
        {/* CERTIFICATIONS */}
        <div>
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
              Compliance & Certifications
            </p>
            <div className="w-8 md:w-12 h-[1px] bg-brand-gold/40"></div>
          </motion.div>
          
          <h3 className="font-serif text-4xl md:text-7xl text-brand-dark tracking-tighter leading-tight">
            Trusted Quality Assured by
            <span className="italic font-light text-brand-gold/80"> Global Certifications</span>
          </h3>
        </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {certifications.map((cert) => (
              <motion.div 
                key={cert.name} 
                whileHover={{ y: -5 }}
                className="flex flex-col items-center group"
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-brand-sand/20 group-hover:shadow-md transition-shadow">
                  <span className="text-3xl">{cert.icon}</span>
                </div>
                <span className="text-brand-dark font-bold text-xs tracking-widest">{cert.name}</span>
                <span className="text-[9px] text-brand-gold uppercase tracking-tighter mt-1">{cert.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-12 md:mt-20 mb-12 md:mb-20 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-sand/40 to-transparent" />
        </div>

    </section>
  );
}