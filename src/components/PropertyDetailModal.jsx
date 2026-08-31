import React, { useState } from 'react';
import { X, MapPin, Maximize2, ShieldCheck, CheckCircle2, Phone, MessageSquare, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function PropertyDetailModal({ property, onClose, onEnquire }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const gallery = property.gallery || [property.image];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-brand-slate/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-cyan/20 w-full max-w-4xl max-h-[90vh] flex flex-col relative animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900 text-white backdrop-blur-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto flex-1">
          {/* Gallery Carousel */}
          <div className="relative h-72 sm:h-96 bg-slate-950">
            <img
              src={gallery[activeImageIndex]}
              alt={`${property.title} - Photo ${activeImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/90 via-transparent to-transparent"></div>

            {/* Navigation Arrows if Multiple Images */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-slate-900/60 text-white hover:bg-slate-900 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Badges on Gallery */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-brand-cyan text-white shadow-md">
                {property.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-md flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% 7/12 Title Verified</span>
              </span>
            </div>

            {/* Title & Location on Bottom of Image */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-cyan-light mb-1">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold">{property.title}</h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-sand-50 p-4 rounded-2xl border border-brand-cyan/15 text-center">
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 block">Plot Area</span>
                <span className="font-serif font-bold text-lg text-brand-slate flex items-center justify-center gap-1">
                  <Maximize2 className="w-4 h-4 text-brand-cyan" />
                  <span>{property.plotArea}</span>
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-gray-500 block">Property Type</span>
                <span className="font-serif font-bold text-lg text-brand-slate">{property.type}</span>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase font-bold text-gray-500 block">Legal Sanction</span>
                <span className="font-serif font-bold text-base text-emerald-600">Collector N.A. Passed</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-brand-slate">Property Overview</h3>
              <p className="text-sm text-gray-600 leading-relaxed font-sans">
                {property.description}
              </p>
            </div>

            {/* Key Amenities */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl font-bold text-brand-slate">Infrastructure & Layout Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-brand-slate bg-brand-cyan-tint/40 p-2.5 rounded-xl border border-brand-cyan/10">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${BRAND_INFO.phones[0].raw}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-cyan" />
                  <span>Call Agent</span>
                </a>

                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(`Hi Kokan Nirvana, I want details for ${property.title} in ${property.location}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => onEnquire(property)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-white bg-gradient-to-r from-brand-orange to-brand-orange-bright hover:from-brand-cyan hover:to-brand-cyan-dark shadow-orange-glow transition-all"
              >
                Schedule Site Visit Inspection
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
