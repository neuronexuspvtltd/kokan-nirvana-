import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, ChevronDown, Anchor } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] h-screen flex flex-col justify-center items-center pt-20 pb-12 sm:pt-32 sm:pb-20 overflow-hidden bg-slate-950">
      
      {/* High-Res Luxury Oceanfront Villa Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2200&q=95" 
          alt="Luxury Sea-Facing Villa Estate" 
          className="w-full h-full object-cover object-center opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20"></div>
        {/* Ambient Sea Cyan Glow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-3/4 h-72 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Clean Hero Content - 100% Full Screen Landing */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center my-auto">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider sm:tracking-widest uppercase bg-white/15 backdrop-blur-md border border-brand-cyan/40 text-brand-cyan-light mb-4 sm:mb-6 shadow-md">
          <Waves className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
          <span>Kokan Nirvana • Coastal & Sea-Shore Property</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight sm:leading-[1.1] drop-shadow-lg max-w-3xl">
          Discover a Place <br className="hidden sm:inline" />
          <span className="font-normal italic text-2xl sm:text-5xl md:text-6xl text-brand-cyan-light font-serif block sm:inline mt-1 sm:mt-0">
            Worth Calling Home
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-lg text-gray-200 font-sans font-normal max-w-xs sm:max-w-2xl leading-relaxed drop-shadow font-medium px-2 sm:px-0">
          Curated sea-view N.A. plots & luxury coastal estates along the pristine Dapoli shoreline, Maharashtra.
        </p>

        {/* Primary CTA */}
        <div className="mt-6 sm:mt-8 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-md font-bold uppercase text-xs tracking-wider text-white bg-brand-cyan hover:bg-brand-cyan-dark active:scale-95 shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>Explore Sea-View Properties</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>

      {/* Subtle Scroll Down Indicator at bottom edge */}
      <a 
        href="#about"
        className="relative z-10 pb-4 flex flex-col items-center text-white/80 hover:text-brand-cyan transition-colors cursor-pointer"
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
