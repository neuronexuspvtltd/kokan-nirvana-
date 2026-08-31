import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubpageHero from '../components/SubpageHero';
import ServicesSection from '../components/ServicesSection';
import CTA from '../components/CTA';

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SubpageHero
        tag="Verified Services"
        title="Our Services & Solutions"
        subtitle="From prime Collector N.A. land acquisition to turnkey sea-view bungalow construction."
        bgImage="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=2000&q=85"
      />

      <ServicesSection
        onSelectService={(service) => navigate('/contact', { state: { service } })}
        hideHeader={true}
      />

      <CTA onOpenInquiry={() => navigate('/contact')} />
    </div>
  );
}
