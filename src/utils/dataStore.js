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

export const getProperties = () => {
  const stored = getStoredData('properties', null);
  if (!stored) return PROPERTIES_DATA;

  let modified = false;
  const synced = stored.map((item) => {
    const defaultProp = PROPERTIES_DATA.find((p) => p.id === item.id);
    if (defaultProp) {
      let updatedItem = { ...item };
      
      // Sync image if using old scans
      if (
        !item.image ||
        item.image.includes('info.jpeg') ||
        item.image.includes('page_1.jpg') ||
        item.image.includes('info.jpg')
      ) {
        modified = true;
        updatedItem.image = defaultProp.image;
        updatedItem.gallery = defaultProp.gallery;
      }

      // Sync category if changed in default mapping
      if (item.category !== defaultProp.category) {
        modified = true;
        updatedItem.category = defaultProp.category;
      }

      // Sync property specific fields if updated in defaults
      if (
        item.type !== defaultProp.type ||
        item.title !== defaultProp.title ||
        item.category !== defaultProp.category ||
        item.location !== defaultProp.location ||
        item.description !== defaultProp.description ||
        item.plotArea !== defaultProp.plotArea ||
        item.id === 'hilltop-dapoli' ||
        item.id === 'sapphire-retreats' ||
        item.id === 'kokan-casa'
      ) {
        modified = true;
        updatedItem.title = defaultProp.title;
        updatedItem.category = defaultProp.category;
        updatedItem.type = defaultProp.type;
        updatedItem.location = defaultProp.location;
        updatedItem.plotArea = defaultProp.plotArea;
        updatedItem.startingPrice = defaultProp.startingPrice;
        updatedItem.features = defaultProp.features;
        updatedItem.description = defaultProp.description;
        updatedItem.gallery = defaultProp.gallery;
        updatedItem.image = defaultProp.image;
      }

      return updatedItem;
    }
    return item;
  });

  if (modified) {
    setStoredData('properties', synced);
  }

  return synced;
};
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

export const getServices = () => {
  const stored = getStoredData('services', null);
  if (!stored) return SERVICES_DATA;

  let modified = false;
  const synced = stored.map((item) => {
    const defaultSvc = SERVICES_DATA.find((s) => s.id === item.id);
    if (defaultSvc) {
      if (item.title !== defaultSvc.title || item.tag !== defaultSvc.tag) {
        modified = true;
        return { ...item, title: defaultSvc.title, tag: defaultSvc.tag };
      }
    }
    return item;
  });

  const hasObsolete = stored.some((s) => s.id === 'legal-advisory');
  if (hasObsolete || modified) {
    setStoredData('services', synced);
    return synced;
  }

  return stored;
};
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

export const getBlogPosts = () => {
  const stored = getStoredData('blogPosts', null);
  if (!stored) return BLOG_POSTS;

  let modified = false;
  const synced = stored.map((item) => {
    const defaultBlog = BLOG_POSTS.find((b) => b.id === item.id);
    if (defaultBlog) {
      if (!item.image || item.image.includes('unsplash.com')) {
        modified = true;
        return {
          ...item,
          image: defaultBlog.image,
        };
      }
    }
    return item;
  });

  if (modified) {
    setStoredData('blogPosts', synced);
  }

  return synced;
};
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

export const importLeads = async (newLeadsList) => {
  const currentLeads = getLeads();
  const formattedNewLeads = newLeadsList.map((lead, idx) => ({
    id: `lead-imp-${Date.now()}-${idx}`,
    name: lead['Customer Name'] || lead.name || lead.Name || 'Unknown Contact',
    email: lead['Email'] || lead.email || 'No Email',
    phone: String(lead['Contact Info'] || lead['Phone'] || lead.phone || lead.Contact || lead['Contact No'] || '').trim(),
    interest: lead['Interest'] || lead.interest || lead.Property || 'General Inquiry',
    note: lead['Note / Requirements'] || lead.note || lead.Note || lead.Requirements || lead.Message || '',
    date: lead['Date'] || lead.date || new Date().toISOString().slice(0, 16).replace('T', ' '),
  }));

  const merged = [...formattedNewLeads, ...currentLeads];
  setStoredData('leads', merged);
  if (isFirebaseConfigured()) {
    try {
      await setDoc(doc(db, 'content', 'leads'), { items: merged });
    } catch (err) {
      console.warn('Firebase bulk lead import warning:', err);
    }
  }
  return merged;
};
