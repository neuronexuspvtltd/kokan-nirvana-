import React from 'react';
import { useLocation } from 'react-router-dom';
import SubpageHero from '../components/SubpageHero';
import ContactSection from '../components/ContactSection';

export default function ContactPage() {
  const location = useLocation();
  const prefilledProperty = location.state?.prefilledProperty || null;
  const prefilledCalculation = location.state?.prefilledCalculation || null;

  return (
    <div className="min-h-screen bg-white">
      <SubpageHero
        tag="Direct Communication"
        title="Connect with Kokan Nirvana"
        subtitle="Speak with our coastal property consultants for site visits in Dapoli or detailed 7/12 documentation inquiries."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=90"
      />

      <ContactSection
        prefilledProperty={prefilledProperty}
        prefilledCalculation={prefilledCalculation}
        hideHeader={true}
      />
    </div>
  );
}
