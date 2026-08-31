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
    <section id="services" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-sand-50 relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <SectionHeading
            tag="Verified Services"
            title="Comprehensive Coastal Real Estate Solutions"
            subtitle="From prime Collector N.A. land acquisition to turnkey sea-view bungalow construction."
          />
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${hideHeader ? 'mt-2 sm:mt-6' : 'mt-10 sm:mt-12'}`}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={onSelectService}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
