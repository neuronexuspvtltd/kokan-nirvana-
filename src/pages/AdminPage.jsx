import React, { useState, useEffect } from 'react';
import {
  getProperties,
  saveProperties,
  getServices,
  saveServices,
  getBlogPosts,
  saveBlogPosts,
  getBrandInfo,
  saveBrandInfo,
  getLeads,
  deleteLead,
} from '../utils/dataStore';
import { isFirebaseConfigured } from '../firebase';
import {
  ShieldCheck,
  Lock,
  LogOut,
  Building2,
  FileText,
  MessageSquare,
  Plus,
  Edit,
  Trash2,
  Save,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  X,
  BookOpen,
  Wrench,
  Upload,
  Image as ImageIcon,
  Database,
} from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const firebaseConnected = isFirebaseConfigured();

  const [activeTab, setActiveTab] = useState('properties');

  // Admin Data State
  const [properties, setProperties] = useState([]);
  const [services, setServices] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [brandInfo, setBrandInfo] = useState({});
  const [leads, setLeads] = useState([]);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState('');

  // Modals State
  const [editingProperty, setEditingProperty] = useState(null);
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);

  const [editingService, setEditingService] = useState(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const [editingBlog, setEditingBlog] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);

  useEffect(() => {
    const authSession = sessionStorage.getItem('kokan_admin_auth');
    if (authSession === 'true') {
      setIsAuthenticated(true);
    }
    loadAllData();
  }, []);

  const loadAllData = () => {
    setProperties(getProperties());
    setServices(getServices());
    setBlogPosts(getBlogPosts());
    setBrandInfo(getBrandInfo());
    setLeads(getLeads());
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 4000);
  };

  // Device File Upload Helper (converts file to base64 Data URL)
  const handleFileUpload = (e, callback) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 4 * 1024 * 1024) {
        alert('File size is too large. Please select an image under 4MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Login handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (loginCreds.username === 'admin' && loginCreds.password === 'admin123') {
      setIsAuthenticated(true);
      sessionStorage.setItem('kokan_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid Username or Password. (Default: admin / admin123)');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('kokan_admin_auth');
  };

  // PROPERTY HANDLERS
  const handleSaveProperty = (e) => {
    e.preventDefault();
    let updated;
    if (editingProperty.id) {
      updated = properties.map((p) => (p.id === editingProperty.id ? editingProperty : p));
    } else {
      const newProp = {
        ...editingProperty,
        id: `prop-${Date.now()}`,
        gallery: [editingProperty.image],
        startingPrice: 'On Request',
      };
      updated = [newProp, ...properties];
    }
    setProperties(updated);
    saveProperties(updated);
    setIsPropertyModalOpen(false);
    showToast('Property saved & website updated live!');
  };

  const handleDeleteProperty = (id) => {
    if (window.confirm('Delete this property listing?')) {
      const updated = properties.filter((p) => p.id !== id);
      setProperties(updated);
      saveProperties(updated);
      showToast('Property deleted.');
    }
  };

  // SERVICE HANDLERS
  const handleSaveService = (e) => {
    e.preventDefault();
    let updated;
    if (editingService.id) {
      updated = services.map((s) => (s.id === editingService.id ? editingService : s));
    } else {
      const newServ = {
        ...editingService,
        id: `service-${Date.now()}`,
        priceRange: 'On Request',
      };
      updated = [newServ, ...services];
    }
    setServices(updated);
    saveServices(updated);
    setIsServiceModalOpen(false);
    showToast('Service saved & website updated live!');
  };

  const handleDeleteService = (id) => {
    if (window.confirm('Delete this service offering?')) {
      const updated = services.filter((s) => s.id !== id);
      setServices(updated);
      saveServices(updated);
      showToast('Service deleted.');
    }
  };

  // BLOG HANDLERS
  const handleSaveBlog = (e) => {
    e.preventDefault();
    let updated;
    if (editingBlog.id) {
      updated = blogPosts.map((b) => (b.id === editingBlog.id ? editingBlog : b));
    } else {
      const newBlog = {
        ...editingBlog,
        id: `blog-${Date.now()}`,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      };
      updated = [newBlog, ...blogPosts];
    }
    setBlogPosts(updated);
    saveBlogPosts(updated);
    setIsBlogModalOpen(false);
    showToast('Blog article saved & published live!');
  };

  const handleDeleteBlog = (id) => {
    if (window.confirm('Delete this blog post?')) {
      const updated = blogPosts.filter((b) => b.id !== id);
      setBlogPosts(updated);
      saveBlogPosts(updated);
      showToast('Blog post deleted.');
    }
  };

  // LEAD HANDLER
  const handleDeleteLead = (id) => {
    if (window.confirm('Delete this customer inquiry?')) {
      const updated = deleteLead(id);
      setLeads(updated);
      showToast('Inquiry lead removed.');
    }
  };

  // BRAND SETTINGS HANDLER
  const handleSaveBrandInfo = (e) => {
    e.preventDefault();
    saveBrandInfo(brandInfo);
    showToast('Site contact & office settings saved!');
  };

  // LOGIN VIEW
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-brand-cyan/20 w-full max-w-md relative z-10 animate-scaleUp">
          <div className="text-center space-y-3 mb-8">
            <div className="w-14 h-14 bg-slate-950 text-brand-cyan rounded-2xl flex items-center justify-center mx-auto shadow-md">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-brand-slate">Kokan Nirvana Admin</h2>
            <p className="text-xs text-gray-500">Log in to manage site properties, services, blogs & leads.</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center mb-4">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-brand-slate mb-1">Username</label>
              <input
                type="text"
                required
                placeholder="admin"
                value={loginCreds.username}
                onChange={(e) => setLoginCreds({ ...loginCreds, username: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan text-brand-slate font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-brand-slate mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={loginCreds.password}
                onChange={(e) => setLoginCreds({ ...loginCreds, password: e.target.value })}
                className="w-full px-4 py-3 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan text-brand-slate font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full font-bold uppercase tracking-wider text-xs text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all mt-2"
            >
              Sign In to Dashboard
            </button>
          </form>

          <p className="text-[11px] text-gray-400 text-center mt-6">
            Default credentials: <span className="font-mono text-slate-700 font-bold">admin / admin123</span>
          </p>
        </div>
      </div>
    );
  }

  // MAIN ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-sand-50 pt-24 pb-20">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-brand-cyan/40 flex items-center gap-2 animate-bounce text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Admin Header Bar */}
        <div className="bg-slate-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-4 border border-brand-cyan/30">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-2xl bg-brand-cyan-tint/20 text-brand-cyan border border-white/10">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan block">Control Center</span>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${firebaseConnected ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40' : 'bg-amber-950/80 text-amber-300 border-amber-500/40'}`}>
                  <Database className="w-3 h-3" />
                  <span>{firebaseConnected ? 'Firebase Active' : 'Firebase Ready (.env key mode)'}</span>
                </span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold">Kokan Nirvana Management Panel</h1>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-rose-600 text-white transition-colors border border-white/15"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout Admin</span>
          </button>
        </div>

        {/* Overview Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-brand-cyan/15 shadow-sm space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase block">Total Properties</span>
            <span className="font-serif text-2xl font-bold text-brand-slate">{properties.length}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-cyan/15 shadow-sm space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase block">Customer Inquiries</span>
            <span className="font-serif text-2xl font-bold text-brand-cyan">{leads.length}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-cyan/15 shadow-sm space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase block">Active Services</span>
            <span className="font-serif text-2xl font-bold text-brand-slate">{services.length}</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-cyan/15 shadow-sm space-y-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase block">Blog Articles</span>
            <span className="font-serif text-2xl font-bold text-brand-slate">{blogPosts.length}</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
          {[
            { id: 'properties', label: `Properties (${properties.length})`, icon: Building2 },
            { id: 'services', label: `Services (${services.length})`, icon: Wrench },
            { id: 'blogs', label: `Blog Articles (${blogPosts.length})`, icon: BookOpen },
            { id: 'leads', label: `Inquiries (${leads.length})`, icon: MessageSquare },
            { id: 'offices', label: 'Office Addresses & Emails', icon: MapPin },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab.id
                    ? 'bg-brand-cyan text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PROPERTIES MANAGER */}
        {activeTab === 'properties' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-brand-slate">Property Listings Manager</h2>
              <button
                onClick={() => {
                  setEditingProperty({
                    title: '',
                    location: 'Dapoli, Ratnagiri',
                    type: 'Sea View N.A. Plot',
                    category: 'Sea-Shore',
                    plotArea: '2,500 sq.ft.',
                    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
                    features: ['Collector Sanctioned NA', '100% 7/12 Title Clear', 'Gated Security'],
                    description: '',
                  });
                  setIsPropertyModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-cyan text-white hover:bg-brand-cyan-dark shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Property</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((prop) => (
                <div key={prop.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div className="relative h-44 bg-gray-100">
                    <img src={prop.image} alt={prop.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-brand-cyan text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {prop.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2 flex-1">
                    <h3 className="font-serif font-bold text-base text-brand-slate">{prop.title}</h3>
                    <p className="text-xs text-gray-500 font-medium">{prop.location} • {prop.plotArea}</p>
                    <p className="text-xs text-gray-600 line-clamp-2 mt-1">{prop.description}</p>
                  </div>

                  <div className="p-4 bg-sand-50 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                      7/12 Title Clear
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingProperty(prop);
                          setIsPropertyModalOpen(true);
                        }}
                        className="p-2 rounded-lg bg-gray-100 hover:bg-brand-cyan hover:text-white text-gray-700 transition-colors"
                        title="Edit Property"
                      >
                        <Edit className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDeleteProperty(prop.id)}
                        className="p-2 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-colors"
                        title="Delete Property"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-brand-slate">Services Manager</h2>
              <button
                onClick={() => {
                  setEditingService({
                    title: '',
                    icon: 'Trees',
                    description: '',
                    features: ['100% Title Sanctioned', 'Clear Legal Verification'],
                  });
                  setIsServiceModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-cyan text-white hover:bg-brand-cyan-dark shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Service</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((serv) => (
                <div key={serv.id} className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider bg-brand-cyan-tint text-brand-cyan px-3 py-1 rounded-full">
                        {serv.icon} Icon
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-brand-slate">{serv.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{serv.description}</p>
                    <ul className="space-y-1 pt-2">
                      {serv.features?.slice(0, 3).map((f, idx) => (
                        <li key={idx} className="text-[11px] text-gray-600 flex items-center gap-1.5 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingService(serv);
                        setIsServiceModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-brand-cyan hover:text-white text-gray-700 transition-colors"
                      title="Edit Service"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteService(serv.id)}
                      className="p-2 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-colors"
                      title="Delete Service"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: BLOG POSTS MANAGER */}
        {activeTab === 'blogs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl font-bold text-brand-slate">Blog Articles Manager</h2>
              <button
                onClick={() => {
                  setEditingBlog({
                    title: '',
                    category: 'Legal Guide',
                    readTime: '5 min read',
                    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
                    excerpt: '',
                    content: '',
                  });
                  setIsBlogModalOpen(true);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-brand-cyan text-white hover:bg-brand-cyan-dark shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Blog Article</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((blog) => (
                <div key={blog.id} className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div className="relative h-40 bg-gray-100">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                    <span className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      {blog.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2 flex-1">
                    <div className="text-[11px] text-gray-400 font-medium">{blog.date} • {blog.readTime}</div>
                    <h3 className="font-serif font-bold text-base text-brand-slate">{blog.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                  </div>

                  <div className="p-4 bg-sand-50 border-t border-gray-100 flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingBlog(blog);
                        setIsBlogModalOpen(true);
                      }}
                      className="p-2 rounded-lg bg-gray-100 hover:bg-brand-cyan hover:text-white text-gray-700 transition-colors"
                      title="Edit Article"
                    >
                      <Edit className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleDeleteBlog(blog.id)}
                      className="p-2 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-colors"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: INQUIRIES & LEADS VIEWER */}
        {activeTab === 'leads' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-brand-slate">Customer Inquiries & Leads</h2>
                <p className="text-xs text-gray-500">Live inquiries submitted by website visitors.</p>
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-brand-cyan-tint text-brand-cyan border border-brand-cyan/20">
                {leads.length} Inquiries Total
              </span>
            </div>

            {leads.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="border-b border-gray-200 text-gray-500 uppercase text-[10px] tracking-wider">
                      <th className="py-3 px-4">Date</th>
                      <th className="py-3 px-4">Customer Name</th>
                      <th className="py-3 px-4">Contact Info</th>
                      <th className="py-3 px-4">Interest</th>
                      <th className="py-3 px-4">Note / Requirements</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium text-brand-slate">
                    {leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-sand-50">
                        <td className="py-4 px-4 text-gray-400 whitespace-nowrap text-[11px]">{lead.date}</td>
                        <td className="py-4 px-4 font-bold text-sm text-brand-slate">{lead.name}</td>
                        <td className="py-4 px-4 space-y-0.5">
                          <div className="font-bold text-brand-cyan">{lead.phone}</div>
                          <div className="text-[11px] text-gray-500">{lead.email}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-brand-cyan-tint text-brand-slate border border-brand-cyan/20">
                            {lead.interest}
                          </span>
                        </td>
                        <td className="py-4 px-4 max-w-xs text-gray-600 text-xs leading-relaxed">{lead.note || '-'}</td>
                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <a
                              href={`tel:${lead.phone}`}
                              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                              title="Call Customer"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-600 hover:text-white text-rose-600 transition-colors"
                              title="Delete Lead"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400 text-xs">No customer inquiries recorded yet.</div>
            )}
          </div>
        )}

        {/* TAB 5: OFFICE ADDRESSES & EMAILS */}
        {activeTab === 'offices' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-brand-slate">Office Addresses & Support Emails</h2>
              <p className="text-xs text-gray-500 mt-1">Update branch office locations and official support email addresses across the site.</p>
            </div>

            <form onSubmit={handleSaveBrandInfo} className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-cyan">Office Branches</h3>
                {brandInfo.offices?.map((off, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-sand-50 border border-gray-200 space-y-2">
                    <label className="block text-xs font-bold text-brand-slate uppercase">Office {idx + 1} Name</label>
                    <input
                      type="text"
                      value={off.title}
                      onChange={(e) => {
                        const updated = [...brandInfo.offices];
                        updated[idx].title = e.target.value;
                        setBrandInfo({ ...brandInfo, offices: updated });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-brand-cyan text-brand-slate font-medium mb-2"
                    />

                    <label className="block text-xs font-bold text-brand-slate uppercase">Full Address</label>
                    <textarea
                      rows={2}
                      value={off.address}
                      onChange={(e) => {
                        const updated = [...brandInfo.offices];
                        updated[idx].address = e.target.value;
                        setBrandInfo({ ...brandInfo, offices: updated });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-white border border-gray-200 focus:outline-none focus:border-brand-cyan text-brand-slate font-medium"
                    ></textarea>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100">
                <h3 className="font-bold text-xs uppercase tracking-wider text-brand-cyan">Official Emails</h3>
                {brandInfo.emails?.map((em, idx) => (
                  <div key={idx}>
                    <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Email {idx + 1}</label>
                    <input
                      type="email"
                      value={em}
                      onChange={(e) => {
                        const updated = [...brandInfo.emails];
                        updated[idx] = e.target.value;
                        setBrandInfo({ ...brandInfo, emails: updated });
                      }}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 focus:outline-none focus:border-brand-cyan text-brand-slate font-medium"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan hover:bg-brand-cyan-dark shadow-md transition-all"
              >
                <Save className="w-4 h-4" />
                <span>Save Office & Email Settings</span>
              </button>
            </form>
          </div>
        )}

      </div>

      {/* PROPERTY MODAL WITH FILE UPLOAD PICKER */}
      {isPropertyModalOpen && editingProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-cyan/20 w-full max-w-2xl max-h-[90vh] flex flex-col relative animate-scaleUp">
            <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-brand-cyan/30">
              <h3 className="font-serif text-xl font-bold">
                {editingProperty.id ? 'Edit Property Listing' : 'Add New Property Listing'}
              </h3>
              <button onClick={() => setIsPropertyModalOpen(false)} className="p-2 rounded-full bg-white/10 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProperty} className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Property Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sunset Bay N.A. Plots"
                  value={editingProperty.title}
                  onChange={(e) => setEditingProperty({ ...editingProperty, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ladghar Beach Corridor, Dapoli"
                    value={editingProperty.location}
                    onChange={(e) => setEditingProperty({ ...editingProperty, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Category *</label>
                  <select
                    value={editingProperty.category}
                    onChange={(e) => setEditingProperty({ ...editingProperty, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  >
                    <option value="Sea-Shore">Sea-Shore</option>
                    <option value="Plots">Plots</option>
                    <option value="Residential">Residential</option>
                    <option value="Investment">Investment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Plot Area / Size *</label>
                  <input
                    type="text"
                    required
                    placeholder="2,500 - 5,000 sq.ft."
                    value={editingProperty.plotArea}
                    onChange={(e) => setEditingProperty({ ...editingProperty, plotArea: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  />
                </div>

                {/* Device Image Upload + URL Input */}
                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1 flex items-center justify-between">
                    <span>Property Photo *</span>
                    <span className="text-[10px] text-brand-cyan font-semibold">Upload from Device</span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Image URL or upload file..."
                      value={editingProperty.image}
                      onChange={(e) => setEditingProperty({ ...editingProperty, image: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                    />

                    <label className="p-2.5 rounded-xl bg-brand-cyan text-white cursor-pointer hover:bg-brand-cyan-dark transition-colors flex-shrink-0 flex items-center gap-1 text-xs font-bold" title="Upload Image File">
                      <Upload className="w-4 h-4" />
                      <span className="hidden sm:inline">Upload</span>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, (dataUrl) => setEditingProperty({ ...editingProperty, image: dataUrl }))}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Photo Preview */}
              {editingProperty.image && (
                <div className="p-2 rounded-2xl bg-sand-50 border border-gray-200 flex items-center gap-3">
                  <img src={editingProperty.image} alt="Preview" className="w-16 h-16 object-cover rounded-xl border" />
                  <span className="text-xs text-gray-500 font-medium">Image preview ready for live website display</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Enter property details..."
                  value={editingProperty.description}
                  onChange={(e) => setEditingProperty({ ...editingProperty, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={() => setIsPropertyModalOpen(false)} className="px-6 py-2.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  Cancel
                </button>
                <button type="submit" className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan shadow-md">
                  Save Property
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* SERVICE MODAL */}
      {isServiceModalOpen && editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-cyan/20 w-full max-w-lg relative animate-scaleUp">
            <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-brand-cyan/30">
              <h3 className="font-serif text-xl font-bold">
                {editingService.id ? 'Edit Service Offering' : 'Add New Service Offering'}
              </h3>
              <button onClick={() => setIsServiceModalOpen(false)} className="p-2 rounded-full bg-white/10 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveService} className="p-6 sm:p-8 space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Residential Collector N.A. Plots"
                  value={editingService.title}
                  onChange={(e) => setEditingService({ ...editingService, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Icon Type *</label>
                <select
                  value={editingService.icon}
                  onChange={(e) => setEditingService({ ...editingService, icon: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                >
                  <option value="Trees">Trees (Land/Plots)</option>
                  <option value="Home">Home (Row Houses)</option>
                  <option value="Building2">Building2 (Apartments)</option>
                  <option value="Landmark">Landmark (Agriculture)</option>
                  <option value="HardHat">HardHat (Construction)</option>
                  <option value="FileText">FileText (Legal 7/12)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Service description..."
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={() => setIsServiceModalOpen(false)} className="px-6 py-2.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  Cancel
                </button>
                <button type="submit" className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan shadow-md">
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* BLOG MODAL WITH FILE UPLOAD PICKER */}
      {isBlogModalOpen && editingBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-brand-cyan/20 w-full max-w-2xl max-h-[90vh] flex flex-col relative animate-scaleUp">
            <div className="bg-slate-950 text-white p-5 sm:p-6 flex items-center justify-between border-b border-brand-cyan/30">
              <h3 className="font-serif text-xl font-bold">
                {editingBlog.id ? 'Edit Blog Article' : 'Publish New Blog Article'}
              </h3>
              <button onClick={() => setIsBlogModalOpen(false)} className="p-2 rounded-full bg-white/10 text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveBlog} className="p-6 sm:p-8 overflow-y-auto space-y-4">
              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Title of article..."
                  value={editingBlog.title}
                  onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Category *</label>
                  <select
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  >
                    <option value="Legal Guide">Legal Guide</option>
                    <option value="Market Insights">Market Insights</option>
                    <option value="Architecture & Construction">Architecture & Construction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Read Time *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 5 min read"
                    value={editingBlog.readTime}
                    onChange={(e) => setEditingBlog({ ...editingBlog, readTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  />
                </div>
              </div>

              {/* Device Image Upload + URL Input for Blog */}
              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1 flex items-center justify-between">
                  <span>Cover Image *</span>
                  <span className="text-[10px] text-brand-cyan font-semibold">Upload Photo from Phone / Desktop</span>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Image URL or upload file..."
                    value={editingBlog.image}
                    onChange={(e) => setEditingBlog({ ...editingBlog, image: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                  />

                  <label className="p-2.5 rounded-xl bg-brand-cyan text-white cursor-pointer hover:bg-brand-cyan-dark transition-colors flex-shrink-0 flex items-center gap-1 text-xs font-bold" title="Upload Image File">
                    <Upload className="w-4 h-4" />
                    <span className="hidden sm:inline">Upload Image</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleFileUpload(e, (dataUrl) => setEditingBlog({ ...editingBlog, image: dataUrl }))}
                    />
                  </label>
                </div>
              </div>

              {/* Photo Preview */}
              {editingBlog.image && (
                <div className="p-2 rounded-2xl bg-sand-50 border border-gray-200 flex items-center gap-3">
                  <img src={editingBlog.image} alt="Preview" className="w-16 h-16 object-cover rounded-xl border" />
                  <span className="text-xs text-gray-500 font-medium">Cover photo ready for blog publishing</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Short Summary (Excerpt) *</label>
                <textarea
                  rows={2}
                  required
                  placeholder="Brief summary..."
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                ></textarea>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-slate uppercase mb-1">Full Article Content *</label>
                <textarea
                  rows={6}
                  required
                  placeholder="Write article markdown or plain text..."
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs bg-sand-50 border border-gray-200 font-medium"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                <button type="button" onClick={() => setIsBlogModalOpen(false)} className="px-6 py-2.5 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  Cancel
                </button>
                <button type="submit" className="px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-brand-cyan shadow-md">
                  Publish Article
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
