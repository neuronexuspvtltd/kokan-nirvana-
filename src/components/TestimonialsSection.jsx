import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-sand-50 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Client Stories & Trust"
          title="What Our Property Owners Say"
          subtitle="Real experiences from investors, homestay owners, and villa buyers in Dapoli."
        />

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard Grid */}
        <div className="mt-8 sm:mt-12 flex md:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center h-full">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-cyan/15 shadow-sm space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed font-serif">
                    "{t.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-slate">{t.name}</h4>
                    <span className="text-[11px] text-gray-400 font-medium block">{t.role}</span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified Buyer</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
