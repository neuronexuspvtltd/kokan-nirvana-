import React, { useState, useEffect } from 'react';
import { Waves } from 'lucide-react';

export default function BrandPreloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fill progress bar smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    // Trigger fade out transition after 1.6s
    const timer1 = setTimeout(() => {
      setFadeOut(true);
    }, 1600);

    // Completely unmount preloader after fade out finishes (2.2s)
    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Ambient Sea Turquoise Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-cyan/25 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

      {/* Main Logo & Animated Ring Box */}
      <div className="relative flex flex-col items-center z-10 px-4">
        
        {/* Animated Sea Wave Ring surrounding Logo */}
        <div className="relative p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-brand-cyan/40 transform transition-all duration-700 animate-sea-float">
          
          {/* Logo */}
          <img
            src="/logo.png"
            alt="Kokan Nirvana Logo"
            className="h-16 sm:h-20 w-auto object-contain drop-shadow-md animate-pulse"
          />

          {/* Glowing Turquoise Border Accent */}
          <div className="absolute inset-0 rounded-3xl border-2 border-brand-cyan/30 animate-ping opacity-25 pointer-events-none"></div>
        </div>

        {/* Brand Tagline */}
        <div className="mt-8 text-center space-y-2">
          <div className="inline-flex items-center gap-2 text-brand-cyan-light font-bold text-xs sm:text-sm tracking-[0.25em] uppercase font-sans">
            <Waves className="w-4 h-4 text-brand-cyan animate-bounce" />
            <span>KOKAN NIRVANA</span>
          </div>

          <p className="text-gray-400 text-xs font-serif italic tracking-wider">
            Pure Coastal & Sea-Shore Living • Dapoli
          </p>
        </div>

        {/* Sleek Turquoise Progress Bar */}
        <div className="mt-8 w-48 sm:w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-brand-cyan/30 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-brand-cyan via-cyan-300 to-brand-cyan transition-all duration-100 ease-out rounded-full shadow-cyan-glow"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* Bottom Ocean Wave Graphic */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-none pointer-events-none">
        <svg className="relative block w-full h-8 text-brand-cyan/30 animate-wave-motion" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </div>
  );
}
