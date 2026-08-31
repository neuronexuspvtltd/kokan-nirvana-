import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubpageHero from '../components/SubpageHero';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTA from '../components/CTA';

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SubpageHero
        tag="Company Background"
        title="About Kokan Nirvana"
        subtitle="Building trust and delivering verified sea-shore property investments across Dapoli, Ratnagiri."
        bgImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      <AboutSection hideHeader={true} />
      
      <TestimonialsSection />

      <CTA onOpenInquiry={() => navigate('/contact')} />
    </div>
  );
}
