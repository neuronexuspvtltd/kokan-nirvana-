import React from 'react';

export default function SubpageHero({ title, subtitle, bgImage }) {
  const defaultBg = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85";

  return (
    <div className="relative bg-slate-950 text-white pt-24 pb-10 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || defaultBg} 
          alt={title}
          className="w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/25"></div>
      </div>

      {/* Clean Subpage Hero Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-2.5 sm:space-y-3">
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
          {title}
        </h1>

        {subtitle && (
          <p className="text-gray-100 text-xs sm:text-base md:text-lg max-w-xl mx-auto font-sans font-normal leading-relaxed drop-shadow font-medium px-2 sm:px-0">
            {subtitle}
          </p>
        )}
      </div>

    </div>
  );
}
