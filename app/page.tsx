import Hero from './components/Hero';
import About from './components/About';
import Logos from './components/Logos'; // The "Bright" bridge
import Gallery from './components/Gallery';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      {/* 1. Light (Muted Moss) */}
      <Hero /> 
      
      {/* 2. Dark (Forest Obsidian) */}
      <About /> 
      
      {/* 3. Light (Muted Moss) - The Bright Logos Section */}
      <Logos /> 
      
      {/* 4. Dark (Forest Obsidian) - Premium Product Archive */}
      <Gallery /> 
      
      {/* 5. Light (Muted Moss) - Final Inquiry */}
      <Contact />
    </main>
  );
}