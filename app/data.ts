// app/data.ts
import teeBlack from '@/public/products/tee-black.jpg';
import mensHoodie from '@/public/products/mens-hoodies.jpg';
import teeWhite from '@/public/products/tee-white.jpg';

// Women's Imports
import womenSan008 from '@/public/products/womens/san_008.png';
import womenSan010 from '@/public/products/womens/san_010.png';
import womenSan001 from '@/public/products/womens/san_001.png';
import womenSc101 from '@/public/products/womens/sc_101.png';

// Kids Imports
import kidsSc501 from '@/public/products/kids/sc_501.jpg';
import kidsSc502 from '@/public/products/kids/sc_502.jpg';
import kidsSc523 from '@/public/products/kids/sc_523.jpg';

// Men's Imports
import mensScm009 from '@/public/products/mens/scm_009.png';
import mensScm005 from '@/public/products/mens/scm_005.png';
import { StaticImageData } from 'next/image';

export const CLIENT_LOGOS = [
  "Five Below", "GAP", "Disney", "Walmart", "Dollarama", "TJ Maxx"
];


// Re-declare the interface here so data.ts knows what a PRODUCT is
interface PRODUCT {
  id: number;
  name: string;
  category: string;
  image: StaticImageData | string;
  details: string;
  specs?: Record<string, string | number>;
}

export const PRODUCTS = [
  /* --- Flagship Collection --- */
  { 
    id: 1, 
    name: "The Signature Heavyweight", 
    category: "Men", 
    image: teeBlack, 
    details: "Premium 220 GSM jersey. Engineered in New York, responsibly sourced through our global network.",
    specs: { "Material": "100% Cotton", "Weight": "220 GSM", "Fit": "Oversized" },
  },
  { 
    id: 2, 
    name: "Architectural Hoodie", 
    category: "Men", 
    image: mensHoodie, 
    details: "Structured silhouettes and hidden seam detailing sourced from specialized knitting clusters.",
    specs: { "Material": "French Terry", "Weight": "400 GSM", "Detail": "Hidden Seams" },
  },

  /* --- Women's Collection --- */
  {
    id: 3,
    name: "French Terry",
    category: "Women",
    image: womenSan008,
    details: "Premium French Terry blend: 62% Cotton, 33% Viscose, 5% Elasthane. 240 GSM for a luxurious, flexible drape.",
    specs: { "Blend": "Cotton/Viscose/Elasthane", "Weight": "240 GSM" },
  },
  {
    id: 4,
    name: "Cotton Single Jersey",
    category: "Women",
    image: womenSan010,
    details: "100% Cotton single jersey, 180 GSM. A soft-touch foundation piece designed for versatility.",
    specs: { "Material": "100% Cotton", "Weight": "180 GSM" },
  },
  {
    id: 5,
    name: "Cotton French Terry",
    category: "Women",
    image: womenSan001,
    details: "100% Cotton French terry, 280 GSM. High-density knit for structured comfort.",
    specs: { "Material": "100% Cotton", "Weight": "280 GSM" },
  },
  {
    id: 6,
    name: "Coordinates Set",
    category: "Women",
    image: womenSc101,
    details: "Matching Top & Shorts set. Crafted from 100% Cotton Single Jersey, 180 GSM for effortless leisure.",
    specs: { "Included": "Top & Shorts", "Material": "100% Cotton" },
  },

  /* --- Kids Collection --- */
  {
    id: 7,
    name: "Organic Slub Jersey",
    category: "Kids",
    image: kidsSc501,
    details: "100% Organic Cotton Slub Jersey, 160 GSM. Features a sophisticated all-over spray effect print.",
    specs: { "Material": "Organic Slub", "Print": "All-over Spray" },
  },
  {
    id: 8,
    name: "Organic Cotton Single Jersey",
    category: "Kids",
    image: kidsSc502,
    details: "100% Organic Cotton Single Jersey, 160 GSM. Sustainable, soft-on-skin essential for junior collections.",
    specs: { "Material": "Organic Cotton", "Certification": "GOTS Standard" },
  },
  {
    id: 9,
    name: "Textured Cotton/Poly Jersey",
    category: "Kids",
    image: kidsSc523,
    details: "Textured Cotton/Poly blend (160 GSM) featuring 3D appliqué pockets and interactive ear detailing.",
    specs: { "Features": "3D Appliqué", "Blend": "Cotton/Poly" },
  },

  /* --- Men's Collection --- */
  {
    id: 10,
    name: "180 GSM Embroidered Tee",
    category: "Men",
    image: mensScm009,
    details: "100% Cotton Single Jersey, 180 GSM. Features precision chest embroidery. Available in Sizes S to XXL.",
    specs: { "Detail": "Chest Embroidery", "Sizes": "S - XXL" },
  },
  {
    id: 11,
    name: "Mens Classic Jersey",
    category: "Men",
    image: mensScm005,
    details: "100% Cotton Single Jersey, 180 GSM. Optimized for durability and high-volume retail distribution.",
    specs: { "Material": "Cotton Jersey", "Durability": "High" },
  },
  { 
    id: 12, 
    name: "Essential Summer Tee", 
    category: "Men", 
    image: teeWhite, 
    details: "160 GSM Lightweight. Breathable, soft-wash finish ideal for high-volume retail distribution.",
    specs: { "Weight": "160 GSM", "Finish": "Soft-Wash" },
  },
];

export const FACTORY_INFO = {
  mainImage: "/factory-floor.jpg", // You can import this too if you want blur on the factory shot
  totalExperience: "15+ Years",
  headquarters: "New York, USA",
  sourcingHubs: ["South Asia", "Southeast Asia", "Americas"],
  specialties: ["End-to-End Supply Chain", "Global Regulatory Compliance", "High-Volume Retail Fulfillment"],
  certifications: ["GOTS", "OEKO-TEX 100", "GRS", "Sedex"]
};