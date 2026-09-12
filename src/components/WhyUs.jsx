import React from 'react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { Sparkles, MapPin, FileCheck, Award, HeartHandshake, TrendingUp } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      title: "Prime Locations",
      description: "Carefully selected properties in beautiful and promising locations across Dapoli.",
      icon: MapPin,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "Second & Holiday Homes",
      description: "Create your own peaceful space for weekends, holidays, and special family moments.",
      icon: Sparkles,
      color: "text-brand-orange",
      bg: "bg-brand-orange-light"
    },
    {
      title: "Smart Investment",
      description: "Properties chosen with both lifestyle and long-term value in mind.",
      icon: TrendingUp,
      color: "text-brand-cyan-dark",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "10+ Years of Experience",
      description: "Over a decade of local experience and a strong understanding of the Dapoli property market.",
      icon: Award,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "Complete Support",
      description: "From your first enquiry to site visits, documentation, purchase, and beyond — we are with you at every step.",
      icon: FileCheck,
      color: "text-brand-orange",
      bg: "bg-brand-orange-light"
    },
    {
      title: "A Relationship for Life",
      description: "Our relationship doesn't end after the purchase. We believe in being there for our customers for years to come.",
      icon: HeartHandshake,
      color: "text-brand-slate",
      bg: "bg-gray-100"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-cyan-tint/40 via-white to-sand-50 relative border-t border-b border-brand-cyan/15 overflow-hidden">
      
      {/* Background Ocean Wave Graphic */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full text-brand-cyan" viewBox="0 0 1000 600" fill="none">
          <path d="M0 100 Q250 50 500 100 T1000 100" stroke="currentColor" strokeWidth="3" />
          <path d="M0 250 Q250 200 500 250 T1000 250" stroke="currentColor" strokeWidth="3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          tag="Why Choose Kokan Nirvana?"
          title="The Konkan Way of Living"
          subtitle="More Than a Property. A Place to Belong."
        />

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard Grid */}
        <div className="mt-8 sm:mt-12 flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <TiltCard
                key={index}
                className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center h-full group p-6 sm:p-8 rounded-3xl bg-white border border-brand-cyan/20 shadow-sm hover:shadow-brand-lg hover:border-brand-cyan/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-slate mb-2.5 group-hover:text-brand-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
