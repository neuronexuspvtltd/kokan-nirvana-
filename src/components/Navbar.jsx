import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1522]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-3.5 sm:py-4 text-white'
            : 'bg-gradient-to-b from-[#0B1522]/80 via-[#0B1522]/40 to-transparent backdrop-blur-[2px] border-b border-white/10 py-4 sm:py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo on Left - Logo Image in white box + Brand Text SEPARATED on header */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
              <div className="bg-white px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-md shadow-sm border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <Logo className="h-8 sm:h-9 md:h-10" />
              </div>

              <div className="flex flex-col text-left">
                <span className="font-serif font-extrabold text-xs sm:text-base text-white leading-none tracking-wider group-hover:text-brand-cyan transition-colors">
                  KOKAN NIRVANA
                </span>
                <span className="text-[8px] sm:text-[10px] font-sans font-bold text-brand-cyan tracking-widest uppercase mt-0.5 sm:mt-1">
                  Sea-Shore Property
                </span>
              </div>
            </Link>

            {/* Center Navigation Links with Brand Cyan Active Underline Indicator */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Properties', path: '/properties' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-all duration-200 py-1 relative ${
                      isActive
                        ? 'text-white font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-brand-cyan after:rounded-full'
                        : 'text-gray-200 hover:text-white'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Elements */}
            <div className="hidden sm:flex items-center gap-3 xl:gap-4 flex-shrink-0">
              
              {/* Phone Badge Pill */}
              <a
                href={`tel:${BRAND_INFO.phones[0].raw}`}
                className={`hidden xl:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  scrolled
                    ? 'bg-slate-800/80 border border-slate-700/80 text-gray-200 hover:text-brand-cyan hover:border-brand-cyan/40'
                    : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:border-white/40 hover:bg-white/20'
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                <span>{BRAND_INFO.phones[0].display}</span>
              </a>

              {/* ENQUIRE NOW Button */}
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 ${
                  scrolled
                    ? 'bg-slate-900 hover:bg-brand-cyan border border-slate-700 hover:border-brand-cyan'
                    : 'bg-[#0B1522]/90 hover:bg-brand-cyan backdrop-blur-md border border-white/20 hover:border-brand-cyan'
                }`}
              >
                <span>ENQUIRE NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

            </div>

            {/* Mobile Actions Right */}
            <div className="flex items-center lg:hidden gap-2">
              <a
                href={`tel:${BRAND_INFO.phones[0].raw}`}
                className="p-2.5 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-brand-cyan active:scale-95 transition-transform"
                title="Call Now"
              >
                <Phone className="w-4 h-4 text-brand-cyan" />
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-md border text-white bg-slate-900 border-slate-700 active:scale-95 transition-transform shadow-md"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-brand-cyan" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation - 100% Solid Opaque Dark Navy Background */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex flex-col bg-[#0B1522] text-white pt-24 px-5 pb-6 animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-1.5 mt-2">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Services', path: '/services' },
              { name: 'Properties', path: '/properties' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact Us', path: '/contact' },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-left py-3.5 px-4 rounded-xl font-sans text-base font-bold transition-all flex items-center justify-between border-b border-white/15 ${
                    isActive
                      ? 'text-brand-cyan bg-slate-800/90 pl-5 border-l-4 border-l-brand-cyan'
                      : 'text-white hover:text-brand-cyan hover:bg-slate-900/60 hover:pl-5'
                  }`
                }
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-brand-cyan opacity-80" />
              </NavLink>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/15 flex flex-col gap-3">
            <a
              href={`tel:${BRAND_INFO.phones[0].raw}`}
              className="w-full text-center py-3.5 rounded-lg font-bold text-xs bg-slate-800 border border-slate-700 text-white flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
            >
              <Phone className="w-4 h-4 text-brand-cyan" />
              <span>Call {BRAND_INFO.phones[0].display}</span>
            </a>

            <a
              href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent('Hi Kokan Nirvana, I want to inquire about properties in Dapoli.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 rounded-lg font-bold text-xs bg-emerald-600 border border-emerald-500 text-white flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiry</span>
            </a>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3.5 rounded-lg font-bold uppercase tracking-wider text-xs bg-brand-cyan text-white shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span>ENQUIRE NOW</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
