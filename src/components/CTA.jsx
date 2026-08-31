import React from 'react';
import { Phone, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function CTA({ onOpenInquiry }) {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-slate via-slate-900 to-brand-slate text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
              Start Your Coastal Journey Today
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
              Ready to find your personal paradise in Konkan?
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Schedule a personalized site visit tour in Dapoli or request legal title reports for our sea-view N.A. plots.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <button
              onClick={onOpenInquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-gradient-to-r from-brand-orange to-brand-orange-bright hover:from-brand-cyan hover:to-brand-cyan-dark shadow-orange-glow transition-all transform hover:-translate-y-0.5"
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
