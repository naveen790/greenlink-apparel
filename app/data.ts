// app/data.ts

export const CLIENT_LOGOS = [
  "Five Below",
  "GAP",
  "Disney",
  "Walmart",
  "Dollarama",
  "TJ Maxx"
];

export const PRODUCTS = [
  /* --- Flagship Collection --- */
  { 
    id: 1, 
    name: "The Signature Heavyweight", 
    category: "Men", 
    image: "/products/tee-black.jpg", 
    details: "Premium 220 GSM jersey. Engineered in New York, responsibly sourced through our global network.",
    specs:"",
  },
  { 
    id: 2, 
    name: "Architectural Hoodie", 
    category: "Men", 
    image: "/products/mens-hoodies.jpg", 
    details: "Structured silhouettes and hidden seam detailing sourced from specialized knitting clusters.",
    specs:"",
  },

  /* --- Women's Collection --- */
  {
    id: 3,
    name: "French Terry",
    category: "Women",
    image: "/products/womens/san_008.png",
    details: "Premium French Terry blend: 62% Cotton, 33% Viscose, 5% Elasthane. 240 GSM for a luxurious, flexible drape.",
    specs:"",
  },
  {
    id: 4,
    name: "Cotton Single Jersey",
    category: "Women",
    image: "/products/womens/san_010.png",
    details: "100% Cotton single jersey, 180 GSM. A soft-touch foundation piece designed for versatility.",
    specs:"",
  },
  {
    id: 5,
    name: "Cotton French Terry",
    category: "Women",
    image: "/products/womens/san_001.png",
    details: "100% Cotton French terry, 280 GSM. High-density knit for structured comfort.",
    specs:"",
  },
  {
    id: 6,
    name: "Coordinates Set",
    category: "Women",
    image: "/products/womens/sc_101.png",
    details: "Matching Top & Shorts set. Crafted from 100% Cotton Single Jersey, 180 GSM for effortless leisure.",
    specs:"",
  },

  /* --- Kids Collection --- */
  {
    id: 7,
    name: "Organic Slub Jersey",
    category: "Kids",
    image: "/products/kids/sc_501.jpg",
    details: "100% Organic Cotton Slub Jersey, 160 GSM. Features a sophisticated all-over spray effect print.",
    specs:"",
  },
  {
    id: 8,
    name: "Organic Cotton Single Jersey",
    category: "Kids",
    image: "/products/kids/sc_502.jpg",
    details: "100% Organic Cotton Single Jersey, 160 GSM. Sustainable, soft-on-skin essential for junior collections.",
    specs:"",
  },
  {
    id: 9,
    name: "Textured Cotton/Poly Jersey",
    category: "Kids",
    image: "/products/kids/sc_523.jpg",
    details: "Textured Cotton/Poly blend (160 GSM) featuring 3D appliqué pockets and interactive ear detailing.",
    specs:"",
  },

  /* --- Men's Collection --- */
  {
    id: 10,
    name: "180 GSM Embroidered Tee",
    category: "Men",
    image: "/products/mens/scm_009.png",
    details: "100% Cotton Single Jersey, 180 GSM. Features precision chest embroidery. Available in Sizes S to XXL.",
    specs:"",
  },
  {
    id: 11,
    name: "Mens Classic Jersey",
    category: "Men",
    image: "/products/mens/scm_005.png",
    details: "100% Cotton Single Jersey, 180 GSM. Optimized for durability and high-volume retail distribution.",
    specs:"",
  },
  { 
    id: 12, 
    name: "Essential Summer Tee", 
    category: "Men", 
    image: "/products/tee-white.jpg", 
    details: "160 GSM Lightweight. Breathable, soft-wash finish ideal for high-volume retail distribution.",
    specs:"",
  },
];

export const FACTORY_INFO = {
  mainImage: "/factory-floor.jpg",
  totalExperience: "15+ Years",
  headquarters: "New York, USA",
  sourcingHubs: [
    "South Asia", 
    "Southeast Asia", 
    "Americas"
  ],
  specialties: [
    "End-to-End Supply Chain", 
    "Global Regulatory Compliance", 
    "High-Volume Retail Fulfillment"
  ],
  certifications: [
    "GOTS", 
    "OEKO-TEX 100", 
    "GRS",
    "Sedex"
  ]
};