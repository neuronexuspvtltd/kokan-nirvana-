import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-cyan-tint/30 relative border-t border-brand-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Client Endorsements"
          title="Stories of Trust & Satisfaction"
          subtitle="Read how buyers from Mumbai, Pune, and Kolhapur fulfilled their coastal second-home dreams with Kokan Nirvana."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {TESTIMONIALS_DATA.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white border border-brand-cyan/15 shadow-sm hover:shadow-brand-lg hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-brand-orange">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed font-sans">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-brand-slate text-base">{item.author}</h4>
                  <p className="text-xs text-gray-500 font-medium">{item.role}</p>
                </div>

                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
