import React, { useState } from 'react';
import SubpageHero from '../components/SubpageHero';
import BlogSection from '../components/BlogSection';
import BlogModal from '../components/BlogModal';
import CTA from '../components/CTA';
import { useNavigate } from 'react-router-dom';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <SubpageHero
        tag="Real Estate Journal"
        title="Insights & Property Buyer Guides"
        subtitle="Expert articles on 7/12 extract documentation, coastal construction, and Dapoli land appreciation."
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
      />

      <BlogSection
        onSelectPost={(post) => setSelectedPost(post)}
        hideHeader={true}
      />

      <CTA onOpenInquiry={() => navigate('/contact')} />

      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}
