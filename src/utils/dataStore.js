import { BRAND_INFO, PROPERTIES_DATA, SERVICES_DATA, BLOG_POSTS, TESTIMONIALS_DATA } from '../data/websiteData';

// Initial default leads mock
const DEFAULT_LEADS = [
  {
    id: 'lead-1',
    name: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '+91 98201 54321',
    interest: 'Sea View N.A. Plot',
    note: 'Interested in Blue Breeze 3,000 sq.ft plot in Dapoli. Please share 7/12 extract.',
    date: '2026-08-30 14:20',
  },
  {
    id: 'lead-2',
    name: 'Priya Verma',
    email: 'priya.v@example.com',
    phone: '+91 98700 12345',
    interest: 'Zen Habited Terrace Cottage',
    note: 'Want to schedule a site visit this coming weekend.',
    date: '2026-08-31 09:15',
  },
];

// Helper functions for LocalStorage persistence
export const getStoredData = (key, fallback) => {
  try {
    const item = localStorage.getItem(`kokan_admin_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error('Error reading localStorage', e);
    return fallback;
  }
};

export const setStoredData = (key, data) => {
  try {
    localStorage.setItem(`kokan_admin_${key}`, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage', e);
  }
};

// Initializers
export const getBrandInfo = () => getStoredData('brandInfo', BRAND_INFO);
export const saveBrandInfo = (data) => setStoredData('brandInfo', data);

export const getProperties = () => getStoredData('properties', PROPERTIES_DATA);
export const saveProperties = (data) => setStoredData('properties', data);

export const getServices = () => getStoredData('services', SERVICES_DATA);
export const saveServices = (data) => setStoredData('services', data);

export const getBlogPosts = () => getStoredData('blogPosts', BLOG_POSTS);
export const saveBlogPosts = (data) => setStoredData('blogPosts', data);

export const getLeads = () => getStoredData('leads', DEFAULT_LEADS);
export const addLead = (lead) => {
  const currentLeads = getLeads();
  const newLead = {
    id: `lead-${Date.now()}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    ...lead,
  };
  const updated = [newLead, ...currentLeads];
  setStoredData('leads', updated);
  return updated;
};
export const deleteLead = (id) => {
  const current = getLeads();
  const updated = current.filter((l) => l.id !== id);
  setStoredData('leads', updated);
  return updated;
};
