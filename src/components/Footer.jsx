import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { BRAND_INFO } from '../data/websiteData';
import { MapPin, Phone, Mail, MessageSquare, Facebook, Instagram, Youtube, ArrowRight, ShieldCheck, Building2, Lock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-brand-cyan/20 relative overflow-hidden">
      
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-64 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-block bg-white p-3 rounded-2xl shadow-md border border-white/20">
              <Logo className="h-10 sm:h-12" />
            </Link>

            <p className="text-xs text-gray-300 leading-relaxed font-sans max-w-sm">
              Kokan Nirvana is your trusted sea-shore property specialist in Dapoli, Ratnagiri district. We deliver 100% Collector N.A. sanctioned plots, terrace cottages, and luxury beach residences with clear 7/12 extracts.
            </p>

            {/* Title Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-emerald-400 border border-white/15">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Title Sanction Guarantee</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-purple-600 text-white transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-blue-600 text-white transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BRAND_INFO.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-red-600 text-white transition-all shadow-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-brand-cyan/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>Properties</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>Legal Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-brand-cyan transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-brand-cyan" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-400 hover:text-brand-cyan transition-colors flex items-center gap-1.5 font-semibold pt-1">
                  <Lock className="w-3 h-3 text-brand-cyan" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Both Office Locations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-brand-cyan/30 pb-2">
              Our Office Branches
            </h4>
            
            <div className="space-y-3 text-xs">
              {BRAND_INFO.offices.map((off, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-brand-cyan flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{off.title}</span>
                  </span>
                  <p className="text-gray-300 leading-relaxed font-sans pl-5 text-[11px]">
                    {off.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Both Official Emails & Phone Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider border-b border-brand-cyan/30 pb-2">
              Contact & Support
            </h4>
            
            <div className="space-y-3 text-xs">
              {/* Emails */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-cyan flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <span className="text-[10px] text-gray-400 font-bold uppercase">Official Support Emails</span>
                  {BRAND_INFO.emails.map((em, idx) => (
                    <a
                      key={idx}
                      href={`mailto:${em}`}
                      className="text-gray-200 hover:text-brand-cyan transition-colors font-medium break-all text-[11px]"
                    >
                      {em}
                    </a>
                  ))}
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase block">Phone Inquiries</span>
                  <div className="space-y-0.5 text-[11px] text-gray-200 font-medium mt-0.5">
                    <div>{BRAND_INFO.phones[0].display}</div>
                    <div>{BRAND_INFO.phones[1].display}</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5 pt-1">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hi Kokan Nirvana, I want to inquire about properties in Dapoli.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-bold hover:underline text-[11px]"
                >
                  WhatsApp: +91 {BRAND_INFO.whatsapp}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name} ({BRAND_INFO.legalEntity}). All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-gray-500">
            <span>Dapoli • Ichalkaranji</span>
            <span>•</span>
            <Link to="/admin" className="text-gray-400 hover:text-brand-cyan flex items-center gap-1 font-semibold">
              <Lock className="w-3 h-3 text-brand-cyan" />
              <span>Admin Portal</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
