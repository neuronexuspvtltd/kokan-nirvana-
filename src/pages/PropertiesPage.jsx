import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SubpageHero from '../components/SubpageHero';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailModal from '../components/PropertyDetailModal';
import { getProperties } from '../utils/dataStore';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function PropertiesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProperties(getProperties());
  }, []);

  const categories = ['All', 'Sea-Shore', 'Plots', 'Residential', 'Investment'];

  const filteredProperties = properties.filter((prop) => {
    const matchesCategory = activeFilter === 'All' || prop.category === activeFilter;
    const matchesSearch = 
      prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prop.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEnquireProperty = (property) => {
    setSelectedProperty(null);
    navigate('/contact', { state: { prefilledProperty: property } });
  };

  return (
    <div className="min-h-screen bg-sand-50 pb-20">
      <SubpageHero
        tag="Complete Portfolio"
        title="Properties & Coastal Sites"
        subtitle="Browse all Collector N.A. plots, sea-view terrace row houses, ready cottages, and coastal agricultural land parcels in Dapoli."
        bgImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
      />

      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-12">
        
        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 sm:mb-12 bg-white p-4 sm:p-5 rounded-3xl border border-brand-cyan/20 shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-brand-cyan text-white shadow-md'
                    : 'bg-brand-cyan-tint/70 text-gray-700 hover:text-brand-slate hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by title, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-brand-cyan-tint/50 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
            />
          </div>
        </div>

        {/* Property Grid: On Mobile: Horizontal Swipeable Carousel (Untouched) | On Desktop: Wider 3-Column Grid */}
        {filteredProperties.length > 0 ? (
          <div className="flex md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7 xl:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-4 md:pb-0">
            {filteredProperties.map((property) => (
              <div key={property.id} className="w-[82vw] max-w-[320px] md:w-auto flex-shrink-0 snap-center">
                <PropertyCard
                  property={property}
                  onViewDetails={(prop) => setSelectedProperty(prop)}
                  onEnquire={handleEnquireProperty}
                />
              </div>
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

      {/* Modal */}
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
