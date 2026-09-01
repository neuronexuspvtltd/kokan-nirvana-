import React from 'react';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';
import { Sparkles, MapPin, FileCheck, Award, HeartHandshake, TrendingUp, Waves } from 'lucide-react';

export default function WhyUs() {
  const pillars = [
    {
      title: "Curated Sea-Shore Plots",
      description: "Every plot, villa, and apartment is hand-selected for high aesthetic appeal, scenic sea vistas, and superior soil stability.",
      icon: Sparkles,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "Strategic Coastal Locations",
      description: "Projects positioned near Dapoli's finest coastlines—Ladghar, Murud, Anjarle, and Harnai—with seamless highway connectivity.",
      icon: MapPin,
      color: "text-brand-orange",
      bg: "bg-brand-orange-light"
    },
    {
      title: "Transparent Legal Guidance",
      description: "No hidden charges, zero ambiguous terms. Verified 7/12 extracts, Collector NA sanctions, and RERA documentation.",
      icon: FileCheck,
      color: "text-brand-cyan-dark",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "Local Konkan Expertise",
      description: "Over 8 years of deep regional presence in Ratnagiri district. We understand local land dynamics, soil stability, and zoning laws.",
      icon: Award,
      color: "text-brand-cyan",
      bg: "bg-brand-cyan-light"
    },
    {
      title: "Trusted Client Assistance",
      description: "End-to-end client support: plot selection, site visit arrangement, registration, land development, and bungalow construction.",
      icon: HeartHandshake,
      color: "text-brand-orange",
      bg: "bg-brand-orange-light"
    },
    {
      title: "Long-Term Asset Value",
      description: "Properties chosen for personal retreat bliss, strong capital appreciation, and high weekend homestay rental yields.",
      icon: TrendingUp,
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
          tag="The Kokan Nirvana Difference"
          title="Why Discriminating Sea-View Buyers Choose Us"
          subtitle="A refined approach to coastal real estate built on transparency, craftsmanship, and regional authority."
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

                <div className="mt-5 pt-3.5 border-t border-gray-100 flex items-center text-xs font-bold uppercase tracking-wider text-brand-cyan group-hover:text-brand-orange transition-colors">
                  <Waves className="w-3.5 h-3.5 mr-1.5 text-brand-cyan" />
                  <span>Learn More</span>
                  <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
