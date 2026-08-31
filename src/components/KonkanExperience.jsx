import React from 'react';
import SectionHeading from './SectionHeading';
import { Sparkles, Sun, Compass } from 'lucide-react';

export default function KonkanExperience({ onExploreProperties }) {
  const experiences = [
    {
      title: "Pristine Arabian Sea Horizons",
      subtitle: "Unmatched Coastal Tranquility",
      description: "Wake up to gentle ocean breezes and golden evening sunsets. Dapoli's coast offers clean, uncrowded beaches lined with palm trees.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      tag: "Serenity"
    },
    {
      title: "Lush Tropical Microclimate",
      subtitle: "Fresh Air & Organic Heritage",
      description: "Surrounded by Alphonso mango orchards, betel nut plantations, and fresh natural water springs. Enjoy clean air away from urban pollution.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
      tag: "Wellness"
    },
    {
      title: "Seamless Highway Connectivity",
      subtitle: "Quick Weekend Escapes",
      description: "With the expansion of the Mumbai-Goa National Highway (NH-66), Dapoli is just 4.5 hours from Mumbai and 4 hours from Pune.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      tag: "Accessibility"
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 bg-brand-slate text-white relative overflow-hidden">
      
      {/* Background Graphic Cyan Wave Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full text-brand-cyan" viewBox="0 0 1000 600" fill="none">
          <path d="M0 200 Q250 100 500 200 T1000 200" stroke="currentColor" strokeWidth="4" />
          <path d="M0 350 Q250 250 500 350 T1000 350" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          tag="The Konkan Lifestyle"
          title="More Than Property. It's a Way of Life."
          subtitle="Immerse yourself in a serene sanctuary where the blue ocean meets lush coastal greenery, offering long-term peace and generational asset growth."
          dark={true}
        />

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard Grid */}
        <div className="mt-8 sm:mt-12 flex lg:grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 lg:pb-0">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="w-[82vw] max-w-[320px] lg:w-auto flex-shrink-0 snap-center h-full group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-cyan/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div className="h-48 sm:h-64 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-brand-slate/30 to-transparent"></div>
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-cyan text-white shadow-sm">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 sm:p-8 space-y-2.5 sm:space-y-3">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-orange block">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="p-5 sm:p-8 pt-0">
                <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-brand-cyan">
                  <span>Explore Coastal Living</span>
                  <Sparkles className="w-4 h-4 text-brand-orange group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-12 rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 text-center max-w-4xl mx-auto space-y-4 sm:space-y-6">
          <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-brand-orange mx-auto animate-pulse" />
          <h3 className="font-serif text-xl sm:text-3xl font-bold italic leading-relaxed text-gray-100">
            "Owning a sea-shore plot in Konkan is not just an investment in land; it's securing a calm, evergreen sanctuary for your family's future."
          </h3>
          <div className="pt-2">
            <button
              onClick={onExploreProperties}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Coastal Properties</span>
              <Compass className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
