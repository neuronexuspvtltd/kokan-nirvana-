import React, { useState, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { PROPERTIES_DATA } from '../data/websiteData';

export default function ContactForm({ prefilledProperty = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyInterest: 'Sea View N.A. Plot',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProperty) {
      setFormData(prev => ({
        ...prev,
        propertyInterest: prefilledProperty.title,
        message: `I am interested in receiving full 7/12 legal title details and a site visit for ${prefilledProperty.title}.`
      }));
    }
  }, [prefilledProperty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-emerald-950">Enquiry Received</h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto">
          Thank you, <strong className="font-semibold">{formData.name}</strong>. Our Dapoli property consultant will contact you on <strong className="font-semibold">{formData.phone}</strong> with complete site plans and 7/12 title documentation.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', propertyInterest: 'Sea View N.A. Plot', message: '' });
          }}
          className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-900 bg-emerald-200 hover:bg-emerald-300"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-cyan/20 shadow-brand-lg space-y-5">
      <div>
        <h3 className="font-serif text-2xl font-bold text-brand-slate">Send an Advisory Enquiry</h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">
          Fill out the form below to receive detailed site plans and 7/12 title documents.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rajat Sharma"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-brand-cyan-tint/40 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
            Phone Number *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-brand-cyan-tint/40 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-brand-cyan-tint/40 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
            Property Interest
          </label>
          <select
            value={formData.propertyInterest}
            onChange={(e) => setFormData({ ...formData, propertyInterest: e.target.value })}
            className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-brand-cyan-tint/40 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
          >
            <option value="Sea View N.A. Plot">Sea View N.A. Plot</option>
            <option value="Near Beach Plot">Near Beach N.A. Plot</option>
            <option value="Sea View Terrace Row House">Sea View Row House</option>
            <option value="Luxury Sea View Apartment">Sea View Apartment</option>
            <option value="Custom Bungalow Construction">Custom Bungalow Construction</option>
            <option value="Coastal Agriculture Land">Coastal Agriculture Land</option>
            {PROPERTIES_DATA.map(p => (
              <option key={p.id} value={p.title}>{p.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-brand-slate mb-1.5">
          Requirements or Questions
        </label>
        <textarea
          rows="4"
          placeholder="Mention site visit date or specific location preferences..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-brand-cyan-tint/40 border border-brand-cyan/20 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full py-4 rounded-full font-bold uppercase text-xs tracking-widest text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4 text-white" />
        <span>Submit Inquiry Request</span>
      </button>
    </form>
  );
}
