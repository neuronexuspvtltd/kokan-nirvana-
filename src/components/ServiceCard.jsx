import React from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Building2, Trees, Home, Landmark, HardHat, FileText } from 'lucide-react';

const iconMap = {
  Trees: Trees,
  Home: Home,
  Building2: Building2,
  Landmark: Landmark,
  HardHat: HardHat,
  FileText: FileText,
};

export default function ServiceCard({ service, onSelect }) {
  const IconComponent = iconMap[service.icon] || ShieldCheck;

  return (
    <div className="bg-white rounded-3xl p-8 border border-brand-cyan/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 relative overflow-hidden">
      {/* Top Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan-dark opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="space-y-6">
        {/* Icon & Category Pill */}
        <div className="flex items-center justify-between">
          <div className="p-3.5 rounded-2xl bg-brand-cyan-tint text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300 shadow-sm">
            <IconComponent className="w-6 h-6" />
          </div>

          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-slate bg-sand-100 px-3 py-1 rounded-full border border-gray-200">
            Collector N.A.
          </span>
        </div>

        {/* Title & Description */}
        <div>
          <h3 className="font-serif text-2xl font-bold text-brand-slate group-hover:text-brand-cyan transition-colors">
            {service.title}
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed font-sans">
            {service.description}
          </p>
        </div>

        {/* Features Checklist */}
        <div className="space-y-2 pt-2 border-t border-gray-100">
          {service.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-brand-slate font-medium">
              <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
        <div className="text-xs">
          <span className="text-brand-cyan font-bold block text-[11px]">Turnkey Documentation</span>
        </div>

        <button
          onClick={() => onSelect(service)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-slate-900 group-hover:bg-brand-cyan shadow-sm transition-all"
        >
          <span>Enquire Service</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
