import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustIntro from '../components/TrustIntro';
import WhyUs from '../components/WhyUs';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailModal from '../components/PropertyDetailModal';
import KonkanExperience from '../components/KonkanExperience';
import TestimonialsSection from '../components/TestimonialsSection';
import CTA from '../components/CTA';
import SectionHeading from '../components/SectionHeading';
import { getProperties } from '../utils/dataStore';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProperties(getProperties());
  }, []);

  // Show top featured properties on Homepage
  const featuredProperties = properties.slice(0, 6);

  const handleEnquireProperty = (property) => {
    setSelectedProperty(null);
    navigate('/contact', { state: { prefilledProperty: property } });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Trust & Brand Introduction */}
      <TrustIntro onExploreServices={() => navigate('/services')} />

      {/* Why Choose Us */}
      <WhyUs />

      {/* Featured Properties Section */}
      <section id="featured-section" className="py-20 lg:py-28 bg-sand-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Featured Collections"
            title="Explore Our Handpicked Properties"
            subtitle="Discover top Collector NA plots, sea-view terrace row houses, and luxury coastal residences in Dapoli."
          />

          {/* Grid of Featured Properties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={(prop) => setSelectedProperty(prop)}
                onEnquire={handleEnquireProperty}
              />
            ))}
          </div>

          {/* Explore All Properties Button Bar */}
          <div className="mt-14 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <span>Explore All Properties & Sites ({properties.length})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Konkan Lifestyle Experience */}
      <KonkanExperience onExploreProperties={() => navigate('/properties')} />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Call to Action Banner */}
      <CTA onOpenInquiry={() => navigate('/contact')} />

      {/* Property Detail Modal */}
      {selectedProperty && (
        <PropertyDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onEnquire={handleEnquireProperty}
        />
      )}
    </div>
  );
}
