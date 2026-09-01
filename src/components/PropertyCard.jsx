import React from 'react';
import { MapPin, Maximize2, ShieldCheck, ArrowUpRight, Eye, Waves, Compass } from 'lucide-react';

export default function PropertyCard({ property, onViewDetails, onEnquire }) {
  return (
    <div
      onClick={() => onViewDetails(property)}
      className="bg-white rounded-3xl overflow-hidden border border-brand-cyan/25 hover:border-brand-cyan/70 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group transform hover:-translate-y-1.5 cursor-pointer relative"
    >
      
      {/* Image Container with Bold Sea Badges */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-slate-900 flex-shrink-0">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        
        {/* Coastal Ocean Water Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1522]/90 via-transparent to-black/30"></div>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none z-10">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest bg-brand-cyan text-white shadow-md flex items-center gap-1 border border-white/30">
            <Waves className="w-3 h-3 text-white" />
            <span>{property.category}</span>
          </span>

          <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-emerald-400 shadow-sm border border-emerald-500/40 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>7/12 Clear</span>
          </span>
        </div>

        {/* Location & Sea Horizon Tag on Bottom of Image */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 text-white flex items-center justify-between z-10">
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-gray-100 truncate pr-1">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <span className="text-[10px] sm:text-[11px] font-bold text-brand-cyan-light bg-slate-950/85 px-2 py-0.5 sm:px-2.5 rounded-full border border-brand-cyan/40 flex-shrink-0 flex items-center gap-1">
            <Compass className="w-3 h-3 text-brand-cyan" />
            <span>{property.type}</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4 bg-gradient-to-b from-white via-white to-sand-50/60">
        <div>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-brand-slate group-hover:text-brand-cyan transition-colors line-clamp-1 lg:line-clamp-none leading-snug">
            {property.title}
          </h3>

          <p className="text-xs text-gray-600 mt-1.5 line-clamp-2 leading-relaxed font-sans">
            {property.description}
          </p>
        </div>

        {/* Key Features Pill */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {property.features.slice(0, 2).map((feat, idx) => (
            <span
              key={idx}
              className="text-[9px] sm:text-[10px] font-semibold text-brand-slate bg-brand-cyan-tint/70 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-brand-cyan/20 truncate max-w-[140px] sm:max-w-none"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Size Spec & Actions */}
        <div className="pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-xs text-gray-700 font-semibold">
            <Maximize2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
            <span className="text-[11px] sm:text-xs">{property.plotArea}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(property);
              }}
              className="p-2 sm:p-2.5 rounded-full bg-brand-cyan-tint hover:bg-brand-cyan hover:text-white text-brand-slate transition-colors shadow-sm"
              title="Quick View Details"
            >
              <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onEnquire(property);
              }}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
