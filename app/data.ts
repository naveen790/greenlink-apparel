// app/data.ts
import { StaticImageData } from 'next/image';

// --- Men's Imports ---
import mens001 from '@/public/products/mens/SAN001.webp';
import mens002 from '@/public/products/mens/SAN002.webp';
import mens003 from '@/public/products/mens/SAN003.webp';
import mens004 from '@/public/products/mens/SAN004.webp';
import mens021 from '@/public/products/mens/SAN021.webp';
import mens022 from '@/public/products/mens/SAN022.webp';

// --- Women's Imports ---
import women005 from '@/public/products/womens/SAN005.webp';
import women006 from '@/public/products/womens/SAN006.webp';
import women007 from '@/public/products/womens/SAN007.webp';
import women008 from '@/public/products/womens/SAN008.webp';
import women009 from '@/public/products/womens/SAN009.webp';
import women010 from '@/public/products/womens/SAN010.webp';
import women011 from '@/public/products/womens/SAN011.webp';
import women012 from '@/public/products/womens/SAN012.webp';

// --- Kids Imports ---
import kids013 from '@/public/products/kids/SAN013.webp';
import kids014 from '@/public/products/kids/SAN014.webp';
import kids015 from '@/public/products/kids/SAN015.webp';
import kids016 from '@/public/products/kids/SAN016.webp';
import kids017 from '@/public/products/kids/SAN017.webp';
import kids018 from '@/public/products/kids/SAN018.webp';
import kids019 from '@/public/products/kids/SAN019.webp';
import kids020 from '@/public/products/kids/SAN020.webp';

export const CLIENT_LOGOS = [
  "Five Below", "Next", "Disney", "Walmart", "Ann Summers", "TJ Maxx", "Pepco", "Nui Organics", "Mothercare", "Dollarama"
];

interface PRODUCT {
  id: string; // Filename ID for manufacturing inquiries
  name: string;
  category: string;
  image: StaticImageData | string;
  details: string;
  specs: {
    Fabric?: string;
    Color: string;
    [key: string]: string | number | undefined;
  };
}

export const PRODUCTS: PRODUCT[] = [

  /* --- WOMEN'S COLLECTION --- */
  {
    id: "SAN005",
    name: "Luxe Cherry PJ Set",
    category: "Women",
    image: women005,
    details: "Breathable 180 GSM organic cotton jersey with eco-friendly non-PVC chest print.",
    specs: { Fabric: "100% Organic Cotton Single Jersey 180 GSM", Color: "Cherry Pink" },
  },
  {
    id: "SAN006",
    name: "Floral Lounge Set",
    category: "Women",
    image: women006,
    details: "Premium elastane-blended jersey with sophisticated discharge print.",
    specs: { Fabric: "95% Cotton 5% Elasthane 180 GSM", Color: "Mocca Brown" },
  },
  {
    id: "SAN007",
    name: "Classic Shorts PJ",
    category: "Women",
    image: women007,
    details: "Lightweight cotton jersey set featuring elegant tailored sleeve detailing and pigment print.",
    specs: { Fabric: "100% Cotton Single Jersey 180 GSM", Color: "Oatmeal Cream" },
  },
  {
    id: "SAN008",
    name: "Graphic Racerback Tank",
    category: "Women",
    image: women008,
    details: "Structured 200 GSM cotton jersey with high-definition discharge print.",
    specs: { Fabric: "100% Cotton Single Jersey 200 GSM", Color: "Vintage Blue" },
  },
  {
    id: "SAN009",
    name: "Terry Hoodie & Short Set",
    category: "Women",
    image: women009,
    details: "Performance viscose-blend French terry with a plush texture.",
    specs: { Fabric: "62% Cotton 33% Viscose 5% Elasthane 240 GSM", Color: "Dusty Pink & Grey" },
  },
  {
    id: "SAN010",
    name: "Embroided Hoodies Set",
    category: "Women",
    image: women010,
    details: "Hoodie set with detailed embroidery, with a structured and soft silhouette.",
    specs: { Fabric: "62% Cotton 33% Polyester 5% Elasthane 240 GSM", Color: "Olive Green" },
  },
  {
    id: "SAN011",
    name: "Relaxed Terry Set",
    category: "Women",
    image: women011,
    details: "French terry (240 GSM) designed for comfort.",
    specs: { Fabric: "62% Cotton 33% Viscose 5% Elasthane 240 GSM", Color: "Sage Green" },
  },
  {
    id: "SAN012",
    name: "Embroided Fleece Tee",
    category: "Women",
    image: women012,
    details: "Brushed poly-cotton fleece (240 GSM) with elastane and elobaorate embrodiery.",
    specs: { Fabric: "62% Cotton 33% Polyester 5% Elasthane 240 GSM", Color: "Almond" },
  },

  /* --- MEN'S COLLECTION --- */
  {
    id: "SAN001",
    name: "Mens Graphic Tee",
    category: "Men",
    image: mens001,
    details: "Pure organic cotton jersey with a premium chest print finish.",
    specs: { Fabric: "100% Organic Cotton 180 GSM", Color: "Orange" },
  },
  {
    id: "SAN002",
    name: "Premium Pique Polo",
    category: "Men",
    image: mens002,
    details: "Durable cotton pique with a luxury hand-feel, ideal for corporate or refined casual wear.",
    specs: { Fabric: "100% Cotton Pique 240 GSM", Color: "Optic White" },
  },
  {
    id: "SAN003",
    name: "Heavy French Terry Tee",
    category: "Men",
    image: mens003,
    details: " Heavyweight French terry for a structured, boxy urban aesthetic.",
    specs: { Fabric: "100% Cotton French Terry 300 GSM", Color: "Blue" },
  },
  {
    id: "SAN004",
    name: "Architectural Fleece Hoodie",
    category: "Men",
    image: mens004,
    details: "280 GSM cotton fleece with structured hood.",
    specs: { Fabric: "100% Cotton Fleece 280 GSM", Color: "Forest Green" },
  },

  // {
  //   id: "SAN021",
  //   name: "Performance Tech Knit",
  //   category: "Men",
  //   image: mens021,
  //   details: "Moisture-wicking active jersey engineered for high-performance athletic lifestyle brands.",
  //   specs: { Fabric: "Tech-Cotton Blend", Color: "Phantom" },
  // },
  // {
  //   id: "SAN022",
  //   name: "Heritage Box Tee",
  //   category: "Men",
  //   image: mens022,
  //   details: "Oversized 'Box' fit with dropped shoulders, utilizing our sustainable garment-dye process.",
  //   specs: { Fabric: "Heavyweight Jersey", Color: "Emerald Wash" },
  // },

  /* --- KIDS COLLECTION --- */
  {
    id: "SAN013",
    name: "Junior Slub Tee",
    category: "Kids",
    image: kids013,
    details: "GOTS certified slub jersey with a unique spray-effect print, ensuring non-toxic safety for children.",
    specs: { Fabric: "100% Organic Cotton Slub 160 GSM", Color: "Light Pink" },
  },
  {
    id: "SAN014",
    name: "Organic Romper",
    category: "Kids",
    image: kids014,
    details: "Ultra-soft 160 GSM organic cotton romper, tailored for comfort.",
    specs: { Fabric: "100% Organic Cotton 160 GSM", Color: "Grey Marl" },
  },
  {
    id: "SAN015",
    name: "Play-Day 3D Pocket Set",
    category: "Kids",
    image: kids015,
    details: "Feature-rich set with 3D applique ears and pockets on durable 160 GSM poly-cotton jersey.",
    specs: { 
      "Top Fabric": "98% Cotton 2% Poly 160 GSM", 
      "Pant Fabric": "100% Cotton Jersey 160 GSM", 
      Color: "Soft Grey" 
    },
  },
  {
    id: "SAN016",
    name: "Denim-Look Fleece Set",
    category: "Kids",
    image: kids016,
    details: "Gross loop knit pant with a denim look paired with a 220 GSM fleece top.",
    specs: { 
      "Top Fabric": "98% Cotton 2% Poly Fleece 220 GSM",
      "Pant Fabric": "95% Cotton 5% Elastane 180 GSM", 
      Color: "Off White" 
    },
  },
  {
    id: "SAN017",
    name: "Mesh Graphic Tank Tee",
    category: "Kids",
    image: kids017,
    details: "Hybrid design featuring a breathable polyester mesh front and soft cotton jersey back.",
    specs: { 
      "Front Fabric": "100% Polyester Mesh", 
      "Back Fabric": "100% Cotton Jersey 160 GSM", 
      Color: "Candy Pink & White" 
    },
  },
  {
    id: "SAN018",
    name: "Peppa Pig Pajama",
    category: "Kids",
    image: kids018,
    details: "Multi-technique set featuring denim look glitter prints, mesh applique, and cross-loop jersey for high texture.",
    specs: { 
      "Top Fabric": "100% Cotton Jersey 160 GSM", 
      "Bottom Fabric": "95% Cotton 5% Elastane", 
      Color: "Pink & Navy" 
    },
  },
  {
    id: "SAN019",
    name: "Sequin Stripe Tee",
    category: "Kids",
    image: kids019,
    details: "Durable 200 GSM cotton jersey with reinforced sequin application and classic stripes.",
    specs: { Fabric: "100% Cotton Jersey 200 GSM", Color: "Navy & White Stripe" },
  },
  {
    id: "SAN020",
    name: "Melange Printed PJ",
    category: "Kids",
    image: kids020,
    details: "Special melange jersey with All-Over-Print (AOP) and precision CMYK photo print.",
    specs: { 
      "Top Fabric": "56% Cotton 44% Poly 180 GSM", 
      "Bottom Fabric": "100% Cotton 160 GSM", 
      Color: "Blush Pink" 
    },
  },
];


export const FACTORY_INFO = {
  mainImage: "/factory-floor.jpg",
  totalExperience: "15+ Years",
  headquarters: "USA",
  sourcingHubs: ["South Asia", "Southeast Asia", "Americas", "India", "Bangladesh", "China"],
  specialties: ["End-to-End Supply Chain", "Global Regulatory Compliance", "High-Volume Retail Fulfillment", "Ethical Manufacturing", "Sustainable Fabric Sourcing", "Global Compliance"],
  certifications: ["GOTS", "OEKO-TEX 100", "GRS", "Sedex"]
};