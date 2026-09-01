import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] h-screen flex flex-col justify-between items-center pt-24 pb-8 sm:pt-32 sm:pb-12 overflow-hidden bg-slate-950">
      
      {/* High-Res Crystal Ocean Wave & Beach Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=95" 
          alt="Dapoli Coastal Sea Shore Horizons" 
          className="w-full h-full object-cover object-center scale-105 opacity-90 transition-opacity duration-500"
        />
        {/* Soft Balanced Gradient for Crisp Image Visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1522]/60 via-[#0B1522]/25 to-[#0B1522]/70"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-80 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Sleek & Uncluttered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center my-auto">
        
        {/* Coastal Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-white/15 backdrop-blur-md border border-white/25 text-white mb-4 sm:mb-6 shadow-md">
          <Waves className="w-3.5 h-3.5 text-brand-cyan" />
          <span>Kokan Nirvana • Sea-Shore Property</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.1] drop-shadow-xl max-w-3xl">
          Discover a Place <br className="hidden sm:inline" />
          <span className="font-normal italic text-2xl sm:text-5xl md:text-6xl text-brand-cyan-light font-serif block sm:inline mt-1 sm:mt-0">
            Worth Calling Home
          </span>
        </h1>

        {/* Concise 1-Line Subtitle */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-base text-gray-100 font-sans font-normal max-w-xs sm:max-w-xl leading-relaxed drop-shadow font-medium px-2 sm:px-0">
          Collector N.A. plots & luxury sea-view estates along the pristine Dapoli coast.
        </p>

        {/* Primary CTA */}
        <div className="mt-6 sm:mt-8">
          <Link
            to="/properties"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark active:scale-95 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-brand-cyan/40"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="relative z-10 flex flex-col items-center text-white/90 hover:text-brand-cyan transition-colors cursor-pointer"
      >
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold mb-0.5">Scroll to explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-brand-cyan" />
      </a>

      {/* Coastal Ocean Wave SVG Bottom Contour Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-8 sm:h-12 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

    </section>
  );
}
