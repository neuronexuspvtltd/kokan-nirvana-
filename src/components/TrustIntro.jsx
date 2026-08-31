import React from 'react';
import SectionHeading from './SectionHeading';
import { Sun, Waves, ShieldCheck, Award, Compass, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function TrustIntro({ onExploreServices }) {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      
      {/* Background Subtle Line Art Motif */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
        <svg viewBox="0 0 200 200" className="w-full h-full text-brand-cyan fill-current">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M40 100 L100 40 L160 100" stroke="currentColor" strokeWidth="4" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="Brand Identity & Heritage"
          title="Where the Konkan Meets Your Future"
          subtitle="Combining coastal serenity with unyielding legal transparency and deep regional mastery in Dapoli."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
          
          {/* Left Column Image with Cyan Roof Overlay Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-brand-lg border border-brand-cyan/20 group">
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80" 
                alt="Konkan Coastal Property Architecture" 
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/85 via-transparent to-transparent"></div>
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/90 backdrop-blur-md text-brand-slate border border-white/40 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-cyan-light flex items-center justify-center text-brand-cyan">
                    <Sun className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-slate">Dapoli Beachfront & Hilltop</h4>
                    <p className="text-xs text-gray-500 font-semibold">Collector Sanctioned NA & RERA Clear Titles</p>
                  </div>
                </div>
                <span className="text-xl font-bold font-serif text-brand-cyan">{BRAND_INFO.experienceYears} Yrs</span>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider bg-brand-cyan-light px-3.5 py-1.5 rounded-full w-fit">
              <Waves className="w-4 h-4 text-brand-cyan" />
              <span>Boutique Coastal Real Estate Partner</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate leading-snug">
              Transforming your dream of owning a coastal retreat into a secure, clear-title reality.
            </h3>

            <p className="text-gray-600 leading-relaxed text-base">
              At <strong className="text-brand-slate font-bold">Kokan Nirvana</strong>, we specialize in thoughtfully selected sea-shore properties, Collector Sanctioned N.A. land parcels, ready terrace cottages, and agricultural farm lands across the serene Dapoli region of Ratnagiri.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm">
              With over 8 years of dedicated regional presence, we ensure every transaction is backed by crystal-clear 7/12 extract documentation, transparent pricing, and complete legal support from site visit to key handover.
            </p>

            {/* Core Values Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-cyan-light text-brand-cyan mt-1">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-sm">100% Legal Certainty</h4>
                  <p className="text-xs text-gray-500">Verified 7/12 extracts & Collector NA sanctions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-orange-light text-brand-orange mt-1">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-slate text-sm">Turnkey Construction</h4>
                  <p className="text-xs text-gray-500">Architectural design, gardens & key handover</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider text-white bg-brand-slate hover:bg-brand-cyan shadow-md transition-all duration-300"
              >
                <span>Explore Services</span>
                <Compass className="w-4 h-4 text-brand-orange" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
