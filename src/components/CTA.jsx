import React from 'react';
import { Phone, ArrowUpRight, Waves } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function CTA({ onOpenInquiry }) {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-950 via-brand-slate to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Ambient Sea Turquoise Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-brand-cyan/15 rounded-full blur-3xl pointer-events-none"></div>

      {/* Coastal Ocean Wave SVG Top Contour Divider */}
      <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none transform rotate-180">
        <svg className="relative block w-full h-8 sm:h-10 text-sand-50" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-brand-cyan/20 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30 w-fit">
              <Waves className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Start Your Sea-Shore Journey Today</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready to find your personal coastal paradise in Konkan?
            </h3>

            <p className="text-gray-300 text-sm sm:text-base font-sans">
              Schedule a personalized beachfront site visit tour in Dapoli or request 7/12 extract title reports for our sea-view N.A. plots.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>Schedule Site Visit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BRAND_INFO.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white border border-white/20 hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call Us Direct</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
