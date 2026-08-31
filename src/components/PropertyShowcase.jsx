import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import PropertyCard from './PropertyCard';
import { PROPERTIES_DATA } from '../data/websiteData';
import { SlidersHorizontal, Search } from 'lucide-react';

export default function PropertyShowcase({ onViewProperty, onEnquireProperty, externalSearchQuery = null }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (externalSearchQuery) {
      if (externalSearchQuery.location && externalSearchQuery.location !== 'All') {
        setSearchQuery(externalSearchQuery.location);
      }
      if (externalSearchQuery.type && externalSearchQuery.type !== 'All') {
        setActiveFilter(externalSearchQuery.type);
      }
    }
  }, [externalSearchQuery]);

  const categories = ['All', 'Sea-Shore', 'Plots', 'Residential', 'Investment'];

  const filteredProperties = PROPERTIES_DATA.filter((prop) => {
    const matchesCategory = activeFilter === 'All' || prop.category === activeFilter;
    const matchesSearch = 
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="properties" className="py-20 lg:py-28 bg-sand-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Curated Coastal Catalog"
          title="Find Your Place in Konkan"
          subtitle="Explore handpicked sea-shore plots, N.A. land parcels, ready cottages, and luxury ocean-facing apartments across Dapoli."
        />

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white p-4 rounded-3xl border border-brand-cyan/20 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand-cyan text-white shadow-md'
                    : 'bg-brand-cyan-tint/70 text-gray-700 hover:text-brand-slate hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by location, title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-brand-cyan-tint/50 border border-brand-cyan/15 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
            />
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={onViewProperty}
                onEnquire={onEnquireProperty}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-brand-cyan/20 p-8 max-w-md mx-auto">
            <SlidersHorizontal className="w-10 h-10 text-brand-cyan/40 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-brand-slate">No matching properties found</h3>
            <p className="text-xs text-gray-500 mt-2">Try clearing your search query or selecting another category filter.</p>
            <button
              onClick={() => { setActiveFilter('All'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan text-white shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
