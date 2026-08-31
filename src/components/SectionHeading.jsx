import React from 'react';
import { Waves } from 'lucide-react';

export default function SectionHeading({ tag, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl ${alignClass} space-y-2 sm:space-y-3 px-2 sm:px-0`}>
      {tag && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest bg-brand-cyan-light text-brand-cyan border border-brand-cyan/20">
          <Waves className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan" />
          <span>{tag}</span>
        </span>
      )}

      {title && (
        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-brand-slate leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-xs sm:text-base text-gray-600 font-sans font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
