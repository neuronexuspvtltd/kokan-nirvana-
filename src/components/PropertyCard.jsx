import React from 'react';
import { MapPin, Maximize2, ShieldCheck, ArrowUpRight, Eye } from 'lucide-react';

export default function PropertyCard({ property, onViewDetails, onEnquire }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-brand-cyan/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1">
      
      {/* Image Container with Badges */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/80 via-transparent to-transparent opacity-80"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-brand-cyan text-white shadow-sm">
            {property.category}
          </span>

          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-slate shadow-sm border border-white/50 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>7/12 Clear</span>
          </span>
        </div>

        {/* Location Badge on Bottom of Image */}
        <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-100">
            <MapPin className="w-3.5 h-3.5 text-brand-cyan-light" />
            <span>{property.location}</span>
          </div>

          <span className="text-[11px] font-bold text-brand-cyan-light bg-brand-slate/80 px-2.5 py-0.5 rounded-full border border-white/10">
            {property.type}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-xl font-bold text-brand-slate group-hover:text-brand-cyan transition-colors">
            {property.title}
          </h3>

          <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Key Features Pill */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {property.features.slice(0, 3).map((feat, idx) => (
            <span
              key={idx}
              className="text-[10px] font-semibold text-brand-slate bg-brand-cyan-tint/60 px-2.5 py-1 rounded-full border border-brand-cyan/15"
            >
              {feat}
            </span>
          ))}
        </div>

        {/* Size Spec & Actions */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-600 font-semibold">
            <Maximize2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span>{property.plotArea}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onViewDetails(property)}
              className="p-2.5 rounded-full bg-brand-cyan-tint/60 hover:bg-brand-cyan hover:text-white text-brand-slate transition-colors"
              title="Quick View Details"
            >
              <Eye className="w-4 h-4" />
            </button>

            <button
              onClick={() => onEnquire(property)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-brand-orange to-brand-orange-bright hover:from-brand-cyan hover:to-brand-cyan-dark shadow-sm transition-all"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
