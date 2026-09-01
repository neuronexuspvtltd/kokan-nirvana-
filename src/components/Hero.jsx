import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Waves, ChevronDown, Compass, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen min-h-[100dvh] h-screen flex flex-col justify-between items-center pt-24 pb-8 sm:pt-32 sm:pb-12 overflow-hidden bg-slate-950">
      
      {/* High-Res Crystal Ocean Wave & Beach Backdrop */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2200&q=95" 
          alt="Dapoli Coastal Sea Shore Horizons" 
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Ocean Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1522]/90 via-[#0B1522]/50 to-[#0B1522]/90"></div>
        {/* Vibrant Sea Turquoise Radial Light Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-brand-cyan/25 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center justify-center my-auto">
        
        {/* Coastal Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-brand-cyan/20 backdrop-blur-md border border-brand-cyan/50 text-white mb-4 sm:mb-6 shadow-lg">
          <Waves className="w-4 h-4 text-brand-cyan animate-bounce" />
          <span>Dapoli Sea-Shore & Coastal Property Specialist</span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.1] drop-shadow-2xl max-w-4xl">
          Own Your Private Sanctuary <br className="hidden sm:inline" />
          <span className="font-normal italic text-2xl sm:text-5xl md:text-6xl text-brand-cyan-light font-serif block sm:inline mt-1 sm:mt-0">
            Where the Sea Meets the Shore
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-xs sm:text-lg text-gray-200 font-sans font-normal max-w-xs sm:max-w-2xl leading-relaxed drop-shadow-md font-medium px-2 sm:px-0">
          Hand-selected Collector N.A. plots, panoramic ocean-view terrace cottages, and luxury beachside estates along the Maharashtra Konkan coastline.
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <Link
            to="/properties"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark active:scale-95 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 border border-brand-cyan/40"
          >
            <span>Explore Sea-View Properties</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all"
          >
            <Compass className="w-4 h-4 text-brand-cyan" />
            <span>Book Coastal Site Visit</span>
          </Link>
        </div>

        {/* Floating Coastal Highlights Bar */}
        <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-2 sm:gap-6 w-full max-w-2xl px-2 sm:px-0">
          <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider block">Beachfront</span>
            <span className="text-xs sm:text-sm font-serif font-bold text-white">Dapoli Coastline</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider block">7/12 Clear</span>
            <span className="text-xs sm:text-sm font-serif font-bold text-white">Collector NA Plots</span>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-2.5 sm:p-3.5 rounded-2xl border border-white/15 text-center">
            <span className="text-[10px] sm:text-xs font-bold text-brand-cyan uppercase tracking-wider block">Sea Horizon</span>
            <span className="text-xs sm:text-sm font-serif font-bold text-white">180° Ocean Views</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <a 
        href="#about"
        className="relative z-10 flex flex-col items-center text-white/80 hover:text-brand-cyan transition-colors cursor-pointer"
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
