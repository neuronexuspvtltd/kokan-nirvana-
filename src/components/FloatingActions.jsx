import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FileText, X, Send, CheckCircle2, User, Mail, Phone, Edit3 } from 'lucide-react';
import { BRAND_INFO } from '../data/websiteData';
import { addLead } from '../utils/dataStore';

// Official WhatsApp Logo SVG Component
const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.776 0-3.517-.476-5.044-1.378l-.362-.214-3.747.983.999-3.654-.235-.374a10.026 10.026 0 01-1.535-5.385c0-5.539 4.507-10.046 10.046-10.046 2.684 0 5.207 1.046 7.104 2.946a9.98 9.98 0 012.946 7.1c0 5.54-4.507 10.047-10.046 10.047M12.051 0C5.395 0 0 5.395 0 12.051c0 2.126.554 4.2 1.606 6.024L0 24l6.096-1.599a12.016 12.016 0 005.955 1.583c6.656 0 12.051-5.395 12.051-12.051C24.102 5.395 18.707 0 12.051 0z" />
  </svg>
);

export default function FloatingActions() {
  const location = useLocation();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Hide floating action buttons completely when on Admin Page (/admin)
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save to admin leads storage
    addLead({
      name: formData.name,
      email: formData.email,
      phone: formData.contactNumber,
      interest: 'Quick Floating Inquiry',
      note: formData.note,
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormOpen(false);
      setFormData({ name: '', email: '', contactNumber: '', note: '' });
    }, 3500);
  };

  const whatsappUrl = `https://wa.me/${BRAND_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Kokan Nirvana, I am visiting your website and would like to inquire about coastal properties in Dapoli.'
  )}`;

  return (
    <>
      {/* Floating Action Buttons Container on Bottom Right */}
      <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col gap-3 items-end pointer-events-auto">
        
        {/* Quick Inquiry Form Floating Button in Brand Coastal Cyan */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-brand-cyan hover:bg-brand-cyan-dark text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
          title="Open Quick Inquiry Form"
          aria-label="Open Quick Inquiry Form"
        >
          <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none hidden sm:inline-block">
            Quick Inquiry Form
          </span>
        </button>

        {/* Direct Official WhatsApp Floating Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center p-3.5 sm:p-4 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/30"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          
          {/* Hover Tooltip */}
          <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none hidden sm:inline-block">
            WhatsApp Direct Chat
          </span>
        </a>

      </div>

      {/* Quick Inquiry Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-cyan/20 w-full max-w-lg relative animate-scaleUp">
            
            {/* Modal Header */}
            <div className="bg-slate-950 text-white p-5 sm:p-6 relative flex items-center justify-between border-b border-brand-cyan/30">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-brand-cyan-tint/20 text-brand-cyan border border-white/10">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Quick Inquiry Form</h3>
                  <p className="text-[11px] text-gray-300">Fill in your details below and we will contact you shortly.</p>
                </div>
              </div>

              <button
                onClick={() => setIsFormOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                  <h4 className="font-serif text-xl font-bold">Inquiry Sent Successfully!</h4>
                  <p className="text-xs text-emerald-700">Thank you for sharing your details. Our Kokan Nirvana team will reach out to you within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1.5 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1.5 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Email Address *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>

                  {/* Contact Number Field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Contact Number *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    />
                  </div>

                  {/* Note Field */}
                  <div>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1.5 flex items-center gap-1.5">
                      <Edit3 className="w-3.5 h-3.5 text-brand-cyan" />
                      <span>Note / Specific Message</span>
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Write your note or property requirements here..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan focus:bg-white text-brand-slate font-medium"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}
    </>
  );
}
