import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import LocationCard from './LocationCard';
import { LOCATIONS_DATA } from '../data/websiteData';
import { MapPin, Compass, Navigation } from 'lucide-react';

export default function LocationsSection({ onFilterByLocation }) {
  const [selectedPin, setSelectedPin] = useState(LOCATIONS_DATA[0].id);

  const activeLoc = LOCATIONS_DATA.find(l => l.id === selectedPin) || LOCATIONS_DATA[0];

  return (
    <section id="locations" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tag="Coastline Geography"
          title="Explore Dapoli's Prime Beach Belts"
          subtitle="Discover strategic coastal sectors across Ratnagiri district offering high lifestyle quality and investment growth."
        />

        {/* Interactive Coastline Visualizer Banner */}
        <div className="mb-16 p-8 rounded-3xl bg-brand-slate text-white relative overflow-hidden border border-white/10 shadow-brand-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visualizer Map Mockup */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 p-6 flex flex-col justify-between">
              
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full text-brand-cyan" viewBox="0 0 500 300">
                  <path d="M50 0 Q100 150 120 300 M120 300 Q250 200 450 300" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="6,6" />
                  <circle cx="120" cy="150" r="90" fill="currentColor" opacity="0.15" />
                </svg>
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-cyan bg-white/10 px-3.5 py-1.5 rounded-full">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Dapoli Coastal Corridor Map</span>
                </span>
                <span className="text-[10px] uppercase text-gray-400 font-bold">Arabian Sea Shoreline</span>
              </div>

              {/* Interactive Location Markers */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {LOCATIONS_DATA.map((loc) => {
                  const isSelected = selectedPin === loc.id;
                  return (
                    <button
                      key={loc.id}
                      onClick={() => setSelectedPin(loc.id)}
                      className={`p-3 rounded-xl text-left transition-all border ${
                        isSelected
                          ? 'bg-brand-cyan text-white border-white shadow-lg scale-105 font-bold'
                          : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-brand-orange'}`} />
                        <span className="text-xs truncate">{loc.name.split(' ')[0]}</span>
                      </div>
                      <span className="text-[9px] uppercase opacity-80 block truncate">{loc.highlights[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Marker Preview Side Box */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Selected Sector Details</span>
              <h3 className="font-serif text-3xl font-bold text-white">{activeLoc.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{activeLoc.description}</p>
              
              <div className="pt-2">
                <button
                  onClick={() => onFilterByLocation(activeLoc.name)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-brand-slate bg-white hover:bg-brand-cyan hover:text-white transition-colors shadow-md"
                >
                  <Compass className="w-4 h-4 text-brand-orange" />
                  <span>View Properties in {activeLoc.name}</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {LOCATIONS_DATA.map((location) => (
            <LocationCard
              key={location.id}
              location={location}
              onSelectLocation={onFilterByLocation}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
