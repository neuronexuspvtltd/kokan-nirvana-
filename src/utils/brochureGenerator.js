import { BRAND_INFO } from '../data/websiteData';

// Helper to convert an image URL to Base64 Data URL to ensure 100% crisp photo rendering in PDF
const toBase64 = (url) => {
  return new Promise((resolve) => {
    if (!url) return resolve('');
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || 800;
        canvas.height = img.naturalHeight || 600;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.95));
      } catch (e) {
        resolve(url);
      }
    };
    img.onerror = () => resolve(url);
    img.src = url;
  });
};

// Helper to load html2pdf from CDN
const loadHtml2Pdf = () => {
  return new Promise((resolve, reject) => {
    if (window.html2pdf) return resolve(window.html2pdf);
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    script.onload = () => resolve(window.html2pdf);
    script.onerror = () => reject(new Error('Failed to load html2pdf script'));
    document.head.appendChild(script);
  });
};

export const downloadPropertyBrochure = async (property) => {
  if (!property) return;

  const fileName = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Card.pdf`;

  // Pre-convert cover photo to Base64 to ensure 100% crisp photo rendering
  const origin = window.location.origin;
  const rawImageSrc = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;
  const base64Image = await toBase64(rawImageSrc);

  // Create temporary container styled exactly like the property card
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.zIndex = '-99999';
  container.style.opacity = '0.01';
  container.style.pointerEvents = 'none';
  container.style.width = '600px';
  container.style.backgroundColor = '#ffffff';

  container.innerHTML = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0F172A; width: 600px; background: #ffffff; border: 2px solid #0284C740; border-radius: 24px; overflow: hidden; margin: 0; padding: 0;">
      
      <!-- Property Photo with Badges & Location Overlay -->
      <div style="position: relative; height: 320px; overflow: hidden; background: #0B1522;">
        <img src="${base64Image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        
        <!-- Gradient Overlay -->
        <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,21,34,0.9), transparent 60%);"></div>

        <!-- Top Badges -->
        <div style="position: absolute; top: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; z-index: 10;">
          <span style="background: #0284C7; color: white; padding: 6px 14px; border-radius: 20px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(255,255,255,0.4);">
            🌊 ${property.category}
          </span>
          <span style="background: rgba(15,23,42,0.85); color: #34D399; padding: 6px 14px; border-radius: 20px; font-size: 10px; font-weight: bold; text-transform: uppercase; border: 1px solid rgba(52,211,153,0.4);">
            🛡️ 7/12 CLEAR
          </span>
        </div>

        <!-- Bottom Location & Type Tags -->
        <div style="position: absolute; bottom: 16px; left: 16px; right: 16px; display: flex; justify-content: space-between; align-items: center; z-index: 10; color: white;">
          <div style="font-size: 12px; font-weight: bold; color: #F1F5F9;">
            📍 ${property.location}
          </div>
          <span style="background: rgba(2,6,23,0.9); color: #7DD3FC; padding: 4px 12px; border-radius: 16px; font-size: 10px; font-weight: bold; border: 1px solid rgba(56,189,248,0.4);">
            🧭 ${property.type}
          </span>
        </div>
      </div>

      <!-- Card Information Section -->
      <div style="padding: 24px 28px; background: #FFFFFF;">
        
        <!-- Property Title -->
        <h2 style="font-size: 22px; font-weight: 800; color: #0F172A; margin: 0 0 10px 0; line-height: 1.3;">
          ${property.title}
        </h2>

        <!-- Description -->
        <p style="font-size: 13px; line-height: 1.6; color: #475569; margin: 0 0 18px 0;">
          ${property.description}
        </p>

        <!-- Feature Pills -->
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px;">
          ${property.features.map(feat => `
            <span style="font-size: 11px; font-weight: 600; color: #0369A1; background: #E0F2FE; padding: 6px 12px; border-radius: 20px; border: 1px solid #BAE6FD;">
              ✓ ${feat}
            </span>
          `).join('')}
        </div>

        <!-- Size Spec Bar -->
        <div style="padding-top: 16px; border-top: 1px solid #F1F5F9; display: flex; justify-content: space-between; align-items: center;">
          <div style="font-size: 13px; font-weight: bold; color: #334155;">
            📐 Plot Area: <span style="color: #0284C7;">${property.plotArea}</span>
          </div>
          <div style="font-size: 11px; font-weight: bold; color: #059669; background: #ECFDF5; padding: 4px 10px; border-radius: 12px;">
            Title Verified
          </div>
        </div>

      </div>

      <!-- Footer Stamp & Contact Line -->
      <div style="background: #09131F; color: white; padding: 18px 28px; display: flex; justify-content: space-between; align-items: center; border-top: 2px solid #0284C7;">
        <div>
          <div style="font-size: 14px; font-weight: bold; color: #38BDF8; letter-spacing: 0.5px;">${BRAND_INFO.name.toUpperCase()}</div>
          <div style="font-size: 11px; color: #94A3B8; margin-top: 2px;">📞 Direct Line: +91 90969 99901 / +91 90962 19901</div>
        </div>
        <div style="border: 1.5px dashed #38BDF8; padding: 6px 12px; border-radius: 8px; font-size: 9px; font-weight: bold; color: #38BDF8; text-transform: uppercase; text-align: center;">
          Official Property Info Card
        </div>
      </div>

    </div>
  `;

  document.body.appendChild(container);

  // Small delay for DOM layout painting
  await new Promise((r) => setTimeout(r, 120));

  try {
    const html2pdf = await loadHtml2Pdf();
    const opt = {
      margin: 10,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 600
      },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opt).from(container).save();
  } catch (err) {
    console.error('PDF generation error:', err);
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};
