import React from 'react';
import SectionHeading from './SectionHeading';
import Logo from './Logo';
import { BRAND_INFO } from '../data/websiteData';
import {
  Award,
  MapPin,
  CheckCircle2,
  Eye,
  Target,
  Users,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Sparkles,
  Quote,
  Building2,
  Trees,
  Waves,
  BarChart,
  Compass,
  Calendar,
} from 'lucide-react';

export default function AboutSection({ hideHeader = false }) {
  return (
    <section id="about" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-28'} bg-white relative overflow-hidden`}>
      {/* Background Accent Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 sm:space-y-24">
        
        {!hideHeader && (
          <SectionHeading
            tag="Company Background & Philosophy"
            title="About Kokan Nirvana"
            subtitle="Building dreams by the shore, creating value for a lifetime."
          />
        )}

        {/* ========================================================================= */}
        {/* SECTION 1: ABOUT US & BRAND PURPOSE */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Visual Brand Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 text-white p-6 sm:p-8 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl inline-block shadow-md mb-6">
                <Logo className="h-10 sm:h-14" />
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 text-white leading-snug">
                Building Dreams By The Shore, Creating Value For A Lifetime.
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed font-sans mb-6">
                Kokan Nirvana Sea-Shore Properties LLP is a trusted real estate developer in Konkan, committed to delivering premium, sustainable, and value-driven properties in the most scenic coastal and hill locations.
              </p>

              {/* Purpose Quote Box */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-2 relative">
                <Quote className="w-5 h-5 text-brand-cyan mb-1 opacity-80" />
                <p className="text-xs italic font-serif text-gray-200 leading-relaxed">
                  "{BRAND_INFO.purpose.quote}"
                </p>
                <span className="text-[10px] font-bold text-brand-cyan uppercase tracking-wider block">
                  — Our Core Purpose
                </span>
              </div>

              {/* MahaRERA Badge */}
              <div className="mt-6 pt-5 border-t border-white/15 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-amber-400 block">
                    MahaRERA Registered Agent
                  </span>
                  <span className="font-mono text-xs font-bold text-white tracking-wider">
                    REG. NO: {BRAND_INFO.mahaRera}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Purpose */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-cyan-light text-brand-cyan border border-brand-cyan/20">
              <Award className="w-4 h-4" />
              <span>8+ Years Industry Mastery & Integrity</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate leading-tight">
              Creating Spaces That Bring You Closer To Nature & Prosperity.
            </h2>

            <p className="text-gray-600 text-xs sm:text-base leading-relaxed font-sans">
              Our focus is on creating spaces that bring you closer to nature, comfort, and prosperity while ensuring transparency, quality, and long-term value for our customers. Purchasing coastal land in Maharashtra requires deep regional knowledge, legal title verification (7/12 extract, Collector N.A. permissions), and transparent guidance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-sand-50 border border-brand-cyan/15 space-y-2">
                <div className="flex items-center gap-2 text-brand-slate font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                  <span>Collector N.A. & Title Sanctioned</span>
                </div>
                <p className="text-xs text-gray-500">All non-agricultural plot layouts possess official sanctions from regional town planning authorities.</p>
              </div>

              <div className="p-4 rounded-2xl bg-sand-50 border border-brand-cyan/15 space-y-2">
                <div className="flex items-center gap-2 text-brand-slate font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Verified Legal Clarity</span>
                </div>
                <p className="text-xs text-gray-500">Thorough 30-year 7/12 extract title clearance and transparent documentation guarantees.</p>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-500 flex items-center gap-2 font-medium">
              <MapPin className="w-4 h-4 text-brand-cyan flex-shrink-0" />
              <span>Headquartered in Ichalkaranji with regional & site offices in Dapoli, Ratnagiri.</span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* SECTION 2: VISION, MISSION & 2038 BHAG (3 PILLAR CARDS) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-cyan-light text-brand-cyan border border-brand-cyan/20">
              <Compass className="w-3.5 h-3.5" />
              <span>Strategic Direction</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate">
              Vision, Mission & 2038 BHAG
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Our guiding principles driving long-term value, customer trust, and community development across Konkan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Our Vision */}
            <div className="bg-sand-50 rounded-3xl p-6 sm:p-8 border border-brand-cyan/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan text-white flex items-center justify-center shadow-md">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-slate">{BRAND_INFO.vision.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {BRAND_INFO.vision.text}
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200/60 mt-6 text-[11px] font-bold text-brand-cyan uppercase tracking-wider">
                Enhancing Lives & Legacies
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-brand-cyan/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/15 rounded-full blur-2xl pointer-events-none"></div>
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-md">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{BRAND_INFO.mission.title}</h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  {BRAND_INFO.mission.text}
                </p>
              </div>
              <div className="pt-6 border-t border-white/15 mt-6 text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                100% Transparency & Superior Quality
              </div>
            </div>

            {/* 2038 Vision (BHAG) */}
            <div className="bg-sand-50 rounded-3xl p-6 sm:p-8 border border-amber-400/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-all relative overflow-hidden group">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600">Our BHAG Goal</span>
                  <h3 className="font-serif text-xl font-bold text-brand-slate">{BRAND_INFO.vision2038.target}</h3>
                  <span className="text-xs font-bold text-gray-500 block">{BRAND_INFO.vision2038.subtitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {BRAND_INFO.vision2038.text}
                </p>
              </div>
              <div className="pt-6 border-t border-gray-200/60 mt-6 text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                "{BRAND_INFO.vision2038.quote}"
              </div>
            </div>
          </div>

          {/* Inspirational Quote Banner */}
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 text-center border border-brand-cyan/30 shadow-xl relative overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-2 relative z-10">
              <Quote className="w-8 h-8 text-brand-cyan mx-auto opacity-70" />
              <p className="font-serif text-lg sm:text-2xl font-bold text-gray-100 italic leading-relaxed">
                "We don't just sell properties. We create destinations where families build lifelong memories."
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3: FOUNDER & LEADERSHIP SPOTLIGHT */}
        {/* ========================================================================= */}
        <div className="bg-sand-50 rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan block">Leadership Spotlight</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate">Meet Our Founder</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-xs sm:max-w-sm w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-cyan to-brand-orange rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900">
                  <img
                    src={BRAND_INFO.founder.image}
                    alt={BRAND_INFO.founder.name}
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-white">
                    <h3 className="font-serif text-xl font-bold">{BRAND_INFO.founder.name}</h3>
                    <span className="text-xs text-brand-cyan font-semibold block">{BRAND_INFO.founder.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Details & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-bold text-brand-slate">{BRAND_INFO.founder.name}</h3>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-cyan-light text-brand-cyan border border-brand-cyan/20">
                  {BRAND_INFO.founder.role}
                </span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pt-2">
                  {BRAND_INFO.founder.bio}
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-cyan/20 shadow-sm space-y-2">
                <Quote className="w-5 h-5 text-brand-cyan" />
                <p className="text-xs sm:text-sm italic font-serif text-brand-slate font-medium leading-relaxed">
                  "{BRAND_INFO.founder.quote}"
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {BRAND_INFO.founder.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-brand-slate">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4: CORE VALUES (R.T.E.S.R) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan block">Our Core Pillars</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate">
              Our Core Values (R.T.E.S.R)
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Every customer interaction. Every project. Every commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {BRAND_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-5 border border-gray-200 shadow-sm hover:border-brand-cyan/40 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-slate text-brand-cyan flex items-center justify-center font-bold text-lg font-serif shadow-sm">
                    {val.code}
                  </div>
                  <h3 className="font-serif text-base font-bold text-brand-slate">{val.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
                <div className="w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-orange rounded-full mt-2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5: OUR JOURNEY (TIMELINE) */}
        {/* ========================================================================= */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan block">Growth & History</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate">
              Our Journey
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Building trust. Delivering value. Creating legacies.
            </p>
          </div>

          <div className="relative border-l-2 border-brand-cyan/30 ml-4 sm:ml-32 space-y-8 py-4">
            {BRAND_INFO.journeyTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Bullet */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-brand-cyan border-4 border-white shadow-md group-hover:scale-125 transition-transform"></div>
                
                {/* Year Label */}
                <span className="sm:absolute sm:-left-32 sm:top-1 font-serif text-sm sm:text-base font-bold text-brand-cyan block sm:text-right w-24">
                  {item.year}
                </span>

                {/* Content Box */}
                <div className="bg-sand-50 p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm space-y-1 max-w-2xl">
                  <h3 className="font-serif text-base font-bold text-brand-slate">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="font-serif text-sm sm:text-base font-bold italic text-brand-slate">
              "From a vision to a legacy, our journey continues with you."
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6: ABOUT DAPOLI & THE 5 COASTAL PILLARS */}
        {/* ========================================================================= */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-brand-cyan/30 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan block">Destination Spotlight</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">About Dapoli</h2>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-sans">
              {BRAND_INFO.aboutDapoli.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10 pt-4 border-t border-white/15">
            {BRAND_INFO.aboutDapoli.pillars.map((pil, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2 hover:bg-white/10 transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 text-brand-cyan flex items-center justify-center mx-auto">
                  {idx === 0 && <Waves className="w-5 h-5" />}
                  {idx === 1 && <Trees className="w-5 h-5" />}
                  {idx === 2 && <TrendingUp className="w-5 h-5" />}
                  {idx === 3 && <BarChart className="w-5 h-5" />}
                  {idx === 4 && <Users className="w-5 h-5" />}
                </div>
                <span className="text-xs font-bold text-gray-200 block">{pil.title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
