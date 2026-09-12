import React from 'react';
import SectionHeading from './SectionHeading';
import { TESTIMONIALS_DATA } from '../data/websiteData';
import { Star, ShieldCheck, PlayCircle } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-sand-50 relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Client Stories & Trust"
          title="What Our Property Owners Say"
          subtitle="Real experiences and video reviews from investors, homestay owners, and villa buyers in Dapoli."
        />

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: 4-Column Grid */}
        <div className="mt-8 sm:mt-12 flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="w-[82vw] max-w-[300px] md:w-auto flex-shrink-0 snap-center h-full">
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-brand-cyan/15 shadow-sm space-y-4 flex flex-col justify-between h-full hover:shadow-brand-md transition-all">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Verified Buyer</span>
                    </span>
                  </div>

                  <p className="text-xs text-gray-600 italic leading-relaxed font-serif">
                    "{t.text}"
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-gray-100">
                  <div>
                    <h4 className="font-serif font-bold text-sm text-brand-slate">{t.name}</h4>
                    <span className="text-[11px] text-gray-400 font-medium block">{t.role}</span>
                  </div>

                  {t.videoUrl && (
                    <a
                      href={t.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all duration-300"
                    >
                      <PlayCircle className="w-4 h-4 text-white" />
                      <span>Watch Video Review</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
