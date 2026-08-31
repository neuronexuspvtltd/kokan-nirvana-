import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import ServiceCard from './ServiceCard';
import { getServices } from '../utils/dataStore';

export default function ServicesSection({ onSelectService, hideHeader = false }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(getServices());
  }, []);

  return (
    <section id="services" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-sand-50 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <SectionHeading
            tag="Verified Services"
            title="Comprehensive Coastal Real Estate Solutions"
            subtitle="From prime Collector N.A. land acquisition to turnkey sea-view bungalow construction."
          />
        )}

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard Grid */}
        <div className={`flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0 ${hideHeader ? 'mt-2 sm:mt-6' : 'mt-8 sm:mt-12'}`}>
          {services.map((service) => (
            <div key={service.id} className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center h-full">
              <ServiceCard
                service={service}
                onSelect={onSelectService}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
