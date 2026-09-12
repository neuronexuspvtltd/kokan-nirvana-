import React from 'react';
import SectionHeading from './SectionHeading';
import { Sun, Waves, ShieldCheck, Award, Compass } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function TrustIntro({ onExploreServices }) {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Wave Art Motif */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-cyan fill-current">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M40 100 Q100 40 160 100" stroke="currentColor" strokeWidth="4" fill="none" />
          <path d="M40 120 Q100 60 160 120" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      {/* Ambient Sea Turquoise Background Glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="THE KONKAN WAY OF LIVING"
          title="Your Place in Beautiful Dapoli"
          subtitle="Find a peaceful second home, holiday home, or investment property in the heart of Konkan."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mt-8 sm:mt-12">
          
          {/* Left Column Image with Cyan Roof Overlay Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-brand-lg border border-brand-cyan/20 group">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80" 
                alt="Konkan Coastal Property Architecture" 
                className="w-full h-[380px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/85 via-transparent to-transparent"></div>
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md text-brand-slate border border-white/40 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-brand-cyan-light flex items-center justify-center text-brand-cyan flex-shrink-0">
                    <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-brand-slate">Dapoli Beachfront & Hilltop</h4>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-semibold">Collector Sanctioned NA & RERA Clear Titles</p>
                  </div>
                </div>
                <span className="text-lg sm:text-xl font-bold font-serif text-brand-cyan flex-shrink-0">{BRAND_INFO.experienceYears} Yrs</span>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider bg-brand-cyan-light px-3.5 py-1.5 rounded-full w-fit">
              <Waves className="w-4 h-4 text-brand-cyan animate-pulse" />
              <span>More Than a Property. A Place to Belong.</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate leading-snug">
              Helping You Find Your Perfect Place in Konkan.
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-sans">
              At <strong className="text-brand-slate font-bold">Kokan Nirvana Sea Shore Property LLP</strong>, we help you discover carefully selected properties in Dapoli — from peaceful second homes and holiday properties to investment opportunities. With our local experience and end-to-end support, we make property buying simple, clear, and comfortable.
            </p>

            <p className="text-gray-600 leading-relaxed text-xs sm:text-sm font-sans">
              From choosing the right property and arranging site visits to documentation and purchase, our team supports you at every step.
            </p>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-cyan-tint/30 border border-brand-cyan/15">
                <div className="p-2 rounded-xl bg-brand-cyan-light text-brand-cyan flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-xs sm:text-sm">100% Property Support</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug">Clear documentation & guidance</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-brand-orange-tint/30 border border-brand-orange/15">
                <div className="p-2 rounded-xl bg-brand-orange-light text-brand-orange flex-shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-xs sm:text-sm">End-to-End Assistance</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug">From site visit to purchase</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-100 border border-slate-200">
                <div className="p-2 rounded-xl bg-white text-brand-slate flex-shrink-0 shadow-xs mt-0.5">
                  <Compass className="w-4 h-4 text-brand-cyan" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-xs sm:text-sm">10+ Years of Experience</h4>
                  <p className="text-[11px] text-gray-500 font-medium leading-snug">Local knowledge you can trust</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider text-white bg-brand-slate hover:bg-brand-cyan shadow-md transition-all duration-300"
              >
                <span>Explore Coastal Services</span>
                <Compass className="w-4 h-4 text-brand-orange" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
