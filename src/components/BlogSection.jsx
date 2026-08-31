import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import BlogCard from './BlogCard';
import BlogModal from './BlogModal';
import { getBlogPosts } from '../utils/dataStore';

export default function BlogSection({ hideHeader = false }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(getBlogPosts());
  }, []);

  return (
    <section id="blog" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-white relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <SectionHeading
            tag="Legal & Market Guides"
            title="Konkan Real Estate Insights"
            subtitle="Expert advice on 7/12 extract verification, Collector N.A. land titles, coastal architecture, and Dapoli property investments."
          />
        )}

        {/* On Mobile: Horizontal Swipeable Carousel | On Desktop: Standard Grid */}
        <div className={`flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0 ${hideHeader ? 'mt-2 sm:mt-6' : 'mt-8 sm:mt-12'}`}>
          {blogPosts.map((post) => (
            <div key={post.id} className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center h-full">
              <BlogCard
                post={post}
                onReadMore={(p) => setSelectedPost(p)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <BlogModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </section>
  );
}
