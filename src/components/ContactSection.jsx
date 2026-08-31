import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, ShieldCheck, CheckCircle2, Building2 } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';
import { addLead } from '../utils/dataStore';

export default function ContactSection({ prefilledProperty, hideHeader = false }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Plot Purchase',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledProperty) {
      setFormData((prev) => ({
        ...prev,
        interest: `Property Inquiry: ${prefilledProperty.title}`,
        message: `Hi Kokan Nirvana team, I am interested in ${prefilledProperty.title} located in ${prefilledProperty.location}. Please share complete 7/12 documents and schedule a site visit.`,
      }));
    }
  }, [prefilledProperty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to admin leads storage
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interest: formData.interest,
      note: formData.message,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interest: 'Plot Purchase',
        message: '',
      });
    }, 5000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Kokan Nirvana team, I am visiting your website and would like to inquire about coastal properties in Dapoli.`
  );

  return (
    <section id="contact" className={`${hideHeader ? 'pt-6 sm:pt-12 pb-16 sm:pb-24' : 'py-16 sm:py-20 lg:py-24'} bg-white relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-cyan-light text-brand-cyan border border-brand-cyan/20">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Communication</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brand-slate">Connect with Kokan Nirvana</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Speak with our coastal property consultants for site visits in Dapoli or detailed 7/12 documentation inquiries.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: 2 Official Office Locations & 2 Emails */}
          <div className="lg:col-span-5 space-y-6 bg-slate-950 text-white p-6 sm:p-8 rounded-3xl border border-brand-cyan/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-brand-cyan/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="border-b border-white/10 pb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-cyan block mb-1">Our Office Locations</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">Visit Our Branches</h3>
            </div>

            {/* Both Offices */}
            <div className="space-y-4">
              {BRAND_INFO.offices.map((off, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="flex items-center gap-2 text-brand-cyan font-bold text-xs uppercase tracking-wider">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{off.title}</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-sans pl-5">
                    {off.address}
                  </p>
                </div>
              ))}
            </div>

            {/* Both Official Emails & Phones */}
            <div className="space-y-3.5 pt-4 border-t border-white/10 text-xs sm:text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/10 text-brand-cyan border border-white/10 flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-bold">Official Email Support</span>
                  <div className="flex flex-col space-y-0.5 mt-0.5">
                    {BRAND_INFO.emails.map((em, idx) => (
                      <a
                        key={idx}
                        href={`mailto:${em}`}
                        className="font-bold text-white hover:text-brand-cyan transition-colors text-xs break-all"
                      >
                        {em}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/10 text-brand-cyan border border-white/10 flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-bold">Direct Call Lines</span>
                  <span className="font-bold text-white text-xs block mt-0.5">
                    {BRAND_INFO.phones[0].display} / {BRAND_INFO.phones[1].display}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase block font-bold">Instant WhatsApp Support</span>
                  <a
                    href={`https://wa.me/${BRAND_INFO.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:underline text-xs block mt-0.5"
                  >
                    +91 {BRAND_INFO.whatsapp} (Click to Chat)
                  </a>
                </div>
              </div>
            </div>

            {/* Title Guarantee Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-brand-cyan flex-shrink-0" />
              <div>
                <span className="text-xs font-bold text-white block">100% Collector NA & Title Guarantee</span>
                <span className="text-[10px] text-gray-400 block">All site visits include complete 7/12 extract inspection.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-brand-cyan/20 shadow-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-slate mb-1.5">Schedule a Site Visit / Inquiry</h3>
            <p className="text-xs text-gray-500 mb-5">Fill out your contact details below and our team will get back to you within 2 hours.</p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold">Inquiry Received Successfully!</h4>
                <p className="text-xs text-emerald-700">Thank you for reaching out. Our Dapoli property specialist will call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-brand-cyan-tint/40 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-brand-cyan-tint/40 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-brand-cyan-tint/40 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Property Type Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-brand-cyan-tint/40 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    >
                      <option>Sea View N.A. Plot</option>
                      <option>Near Beach N.A. Plot</option>
                      <option>Sea View Terrace Row House</option>
                      <option>Luxury Sea View Apartment</option>
                      <option>Agricultural Farm Land</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Your Message / Specific Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about preferred location in Dapoli, plot size, or site visit date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-xs bg-brand-cyan-tint/40 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-full font-bold uppercase tracking-wider text-xs text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry Request</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
