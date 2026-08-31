import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LocationCard({ location, onSelectLocation }) {
  return (
    <div className="group rounded-3xl bg-white border border-brand-cyan/15 overflow-hidden shadow-sm hover:shadow-brand-lg hover:border-brand-cyan/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="relative h-48 overflow-hidden bg-brand-slate">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent"></div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange block mb-0.5">
              {location.tagline}
            </span>
            <h3 className="font-serif text-2xl font-bold">
              {location.name}
            </h3>
          </div>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
            {location.description}
          </p>

          <div className="space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Regional Highlights</span>
            <div className="flex flex-wrap gap-1.5">
              {location.highlights.map((h, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-brand-cyan-tint text-[11px] font-bold text-brand-slate border border-brand-cyan/15">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onSelectLocation(location.name)}
          className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-slate bg-gray-100 hover:bg-brand-cyan hover:text-white transition-all flex items-center justify-center gap-2"
        >
          <span>Explore Plots</span>
          <ArrowRight className="w-4 h-4 text-brand-orange" />
        </button>
      </div>
    </div>
  );
}
