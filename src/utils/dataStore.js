import { BRAND_INFO, PROPERTIES_DATA, SERVICES_DATA, BLOG_POSTS } from '../data/websiteData';
import { db, auth, isFirebaseConfigured } from '../firebase';
import { collection, getDocs, doc, setDoc, addDoc, deleteDoc } from 'firebase/firestore';

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

// INITIALIZERS WITH FIREBASE SYNC & LOCAL FALLBACK
export const getBrandInfo = () => getStoredData('brandInfo', BRAND_INFO);
export const saveBrandInfo = async (data) => {
  setStoredData('brandInfo', data);
  if (isFirebaseConfigured()) {
    try {
      await setDoc(doc(db, 'settings', 'brandInfo'), data);
    } catch (err) {
      console.warn('Firebase sync warning:', err);
    }
  }
};

export const getProperties = () => getStoredData('properties', PROPERTIES_DATA);
export const saveProperties = async (data) => {
  setStoredData('properties', data);
  if (isFirebaseConfigured()) {
    try {
      await setDoc(doc(db, 'content', 'properties'), { items: data });
    } catch (err) {
      console.warn('Firebase sync warning:', err);
    }
  }
};

export const getServices = () => getStoredData('services', SERVICES_DATA);
export const saveServices = async (data) => {
  setStoredData('services', data);
  if (isFirebaseConfigured()) {
    try {
      await setDoc(doc(db, 'content', 'services'), { items: data });
    } catch (err) {
      console.warn('Firebase sync warning:', err);
    }
  }
};

export const getBlogPosts = () => getStoredData('blogPosts', BLOG_POSTS);
export const saveBlogPosts = async (data) => {
  setStoredData('blogPosts', data);
  if (isFirebaseConfigured()) {
    try {
      await setDoc(doc(db, 'content', 'blogPosts'), { items: data });
    } catch (err) {
      console.warn('Firebase sync warning:', err);
    }
  }
};

export const getLeads = () => getStoredData('leads', DEFAULT_LEADS);

export const addLead = async (lead) => {
  const currentLeads = getLeads();
  const newLead = {
    id: `lead-${Date.now()}`,
    date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    ...lead,
  };
  const updated = [newLead, ...currentLeads];
  setStoredData('leads', updated);

  if (isFirebaseConfigured()) {
    try {
      await addDoc(collection(db, 'leads'), newLead);
    } catch (err) {
      console.warn('Firebase lead push warning:', err);
    }
  }
  return updated;
};

export const deleteLead = async (id) => {
  const current = getLeads();
  const updated = current.filter((l) => l.id !== id);
  setStoredData('leads', updated);
  if (isFirebaseConfigured()) {
    try {
      await deleteDoc(doc(db, 'leads', id));
    } catch (err) {
      console.warn('Firebase lead delete warning:', err);
    }
  }
  return updated;
};
