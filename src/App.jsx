import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import WaterRippleCanvas from './components/WaterRippleCanvas';
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

// Scroll to top helper on page route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Interactive Water Tap Ripples & Floating Sea Bubbles Canvas */}
      <WaterRippleCanvas />
      
      <div className="min-h-screen bg-white text-brand-slate font-sans antialiased selection:bg-brand-cyan selection:text-white flex flex-col justify-between relative">
        
        {/* Sticky Header */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<PropertiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </main>

        {/* Global Floating Action Buttons (WhatsApp + Quick Inquiry Form) */}
        <FloatingActions />

        {/* Footer */}
        <Footer onNavigate={(target) => {
          if (target === 'hero') window.location.href = '/';
          else if (target === 'about') window.location.href = '/about';
          else if (target === 'services') window.location.href = '/services';
          else if (target === 'properties') window.location.href = '/properties';
          else if (target === 'blog') window.location.href = '/blog';
          else if (target === 'contact') window.location.href = '/contact';
        }} />
        
      </div>
    </Router>
  );
}
