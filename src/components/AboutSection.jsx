import React from 'react';
import SectionHeading from './SectionHeading';
import Logo from './Logo';
import { BRAND_INFO } from '../data/websiteData';
import { Award, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ hideHeader = false }) {
  return (
    <section id="about" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-white relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!hideHeader && (
          <SectionHeading
            tag="Company Background"
            title="About Kokan Nirvana"
            subtitle="Building trust and delivering verified sea-shore property investments across Dapoli, Ratnagiri."
          />
        )}

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center ${hideHeader ? 'mt-2 sm:mt-6' : 'mt-10 sm:mt-12'}`}>
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 text-white p-6 sm:p-8 relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl inline-block shadow-md mb-6">
                <Logo className="h-10 sm:h-14" />
              </div>

              <h3 className="font-serif text-xl sm:text-3xl font-bold mb-4">
                Where the Konkan Coast Meets Your Future.
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                Founded with a mission to bring legal clarity and premium standards to coastal property buying in Dapoli, Kokan Nirvana stands as a benchmark for 100% Collector N.A. land titles and sea-view investments.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                <div className="space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-cyan-light">{BRAND_INFO.experienceYears}</span>
                  <span className="text-[10px] text-gray-300 uppercase font-bold tracking-wider block">Years Mastery</span>
                </div>

                <div className="space-y-1">
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-brand-orange">100%</span>
                  <span className="text-[10px] text-gray-300 uppercase font-bold tracking-wider block">Legal Title Clear</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-brand-cyan-light text-brand-cyan">
              <Award className="w-4 h-4" />
              <span>Regional Expertise & Integrity</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate">
              Empowering Second-Home Buyers & Coastal Investors.
            </h2>

            <p className="text-gray-600 text-xs sm:text-base leading-relaxed font-sans">
              Purchasing coastal land in Maharashtra requires deep regional knowledge, legal title verification (7/12 extract, Collector N.A. permissions), and transparent guidance. At Kokan Nirvana, we eliminate guesswork by conducting thorough due diligence before listing any site.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-sand-50 border border-brand-cyan/15 space-y-2">
                <div className="flex items-center gap-2 text-brand-slate font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  <span>Collector N.A. Status</span>
                </div>
                <p className="text-xs text-gray-500">All non-agricultural plot layouts possess official sanctions from regional town planning authorities.</p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-brand-cyan/15 space-y-2">
                <div className="flex items-center gap-2 text-brand-slate font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Verified Legal Titles</span>
                </div>
                <p className="text-xs text-gray-500">Thorough 30-year 7/12 extract title clearance and transparent documentation guarantees.</p>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-500 flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>Headquartered in Ichalkaranji with dedicated site offices across Dapoli, Maharashtra.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
