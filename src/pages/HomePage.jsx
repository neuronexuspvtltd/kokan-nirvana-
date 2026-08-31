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
      <section id="featured-section" className="py-16 lg:py-28 bg-sand-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Featured Collections"
            title="Explore Our Handpicked Properties"
            subtitle="Discover top Collector NA plots, sea-view terrace row houses, and luxury coastal residences in Dapoli."
          />

          {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard 3-Column Grid */}
          <div className="mt-8 sm:mt-12 flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
            {featuredProperties.map((property) => (
              <div key={property.id} className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center">
                <PropertyCard
                  property={property}
                  onViewDetails={(prop) => setSelectedProperty(prop)}
                  onEnquire={handleEnquireProperty}
                />
              </div>
            ))}
          </div>

          {/* Explore All Properties Button Bar */}
          <div className="mt-10 sm:mt-14 text-center">
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
