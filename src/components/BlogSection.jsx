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
    <section id="blog" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-white relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <SectionHeading
            tag="Legal & Market Guides"
            title="Konkan Real Estate Insights"
            subtitle="Expert advice on 7/12 extract verification, Collector N.A. land titles, coastal architecture, and Dapoli property investments."
          />
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${hideHeader ? 'mt-2 sm:mt-6' : 'mt-10 sm:mt-12'}`}>
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              onReadMore={(p) => setSelectedPost(p)}
            />
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
