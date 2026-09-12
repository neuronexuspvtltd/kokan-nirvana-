import { BRAND_INFO } from '../data/websiteData';

// Helper to convert an image URL to Base64 Data URL to avoid CORS/blank canvas issues
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
        resolve(canvas.toDataURL('image/jpeg', 0.92));
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

  const fileName = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;

  // 1. If property has a direct static brochure PDF file, download it immediately
  if (property.brochurePdf) {
    const link = document.createElement('a');
    link.href = property.brochurePdf;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // 2. Pre-convert cover image to Base64 to ensure 100% instant non-blank rendering
  const origin = window.location.origin;
  const rawImageSrc = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;
  const base64Image = await toBase64(rawImageSrc);

  // 3. Create visible-in-DOM container with opacity 0.01 (in-viewport so html2canvas renders perfectly)
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0px';
  container.style.left = '0px';
  container.style.zIndex = '-99999';
  container.style.opacity = '0.01';
  container.style.pointerEvents = 'none';
  container.style.width = '794px'; // Standard A4 width at 96 DPI
  container.style.backgroundColor = '#ffffff';

  container.innerHTML = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #0F172A; width: 794px; background: #ffffff; padding: 0; margin: 0;">
      <!-- Top Brand Header -->
      <div style="background: #09131F; color: white; padding: 24px 32px; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0284C7;">
        <div>
          <div style="font-size: 22px; font-weight: bold; color: #38BDF8; letter-spacing: 1px;">${BRAND_INFO.name.toUpperCase()}</div>
          <div style="font-size: 10px; color: #94A3B8; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 2px;">${BRAND_INFO.tagline}</div>
        </div>
        <div style="background: #0284C7; color: white; padding: 6px 14px; border-radius: 20px; font-size: 10px; font-weight: bold; text-transform: uppercase;">
          Official Property Brochure
        </div>
      </div>

      <!-- Hero Image -->
      <div style="position: relative; height: 340px; overflow: hidden; background: #0F172A;">
        <img src="${base64Image}" style="width: 100%; height: 100%; object-fit: cover; display: block;" />
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(9,19,31,0.95), transparent); padding: 24px 32px; color: white;">
          <span style="background: #38BDF8; color: #09131F; font-size: 9px; font-weight: bold; text-transform: uppercase; padding: 4px 12px; border-radius: 12px;">${property.category}</span>
          <div style="font-size: 24px; font-weight: bold; margin-top: 6px; color: #FFFFFF;">${property.title}</div>
        </div>
      </div>

      <!-- Content -->
      <div style="padding: 28px 32px;">
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #0284C7; font-weight: bold; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #E2E8F0;">
          <div>📍 Location: ${property.location}</div>
          <div>Status: Collector N.A. Sanctioned</div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 24px; background: #F0F9FF; padding: 16px; border-radius: 12px; border: 1px solid #BAE6FD;">
          <div>
            <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: bold;">Plot Area / Size</div>
            <div style="font-size: 13px; color: #0F172A; font-weight: bold; margin-top: 2px;">${property.plotArea}</div>
          </div>
          <div>
            <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: bold;">Property Type</div>
            <div style="font-size: 13px; color: #0F172A; font-weight: bold; margin-top: 2px;">${property.type}</div>
          </div>
          <div>
            <div style="font-size: 10px; color: #64748B; text-transform: uppercase; font-weight: bold;">Legal Title</div>
            <div style="font-size: 13px; color: #0F172A; font-weight: bold; margin-top: 2px;">100% Clear 7/12 Extract</div>
          </div>
        </div>

        <div style="font-size: 15px; font-weight: bold; color: #0F172A; margin-bottom: 8px; border-bottom: 2px solid #38BDF8; padding-bottom: 4px; display: inline-block;">Property Overview</div>
        <p style="font-size: 13px; line-height: 1.6; color: #334155; margin-bottom: 24px;">${property.description}</p>

        <div style="font-size: 15px; font-weight: bold; color: #0F172A; margin-bottom: 10px; border-bottom: 2px solid #38BDF8; padding-bottom: 4px; display: inline-block;">Infrastructure & Key Highlights</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 24px;">
          ${property.features.map(f => `<div style="background: #F8FAFC; padding: 10px 14px; border-radius: 8px; font-size: 12px; font-weight: 600; color: #1E293B; border: 1px solid #E2E8F0;">✓ ${f}</div>`).join('')}
        </div>
      </div>

      <!-- Footer Branding Stamp -->
      <div style="background: #09131F; color: white; padding: 24px 32px; display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 11px; line-height: 1.6; color: #94A3B8;">
          <strong style="color: white; font-size: 13px;">${BRAND_INFO.legalEntity}</strong><br />
          Dapoli Office: Ainarkar Heights, Near BSNL Office, Dapoli, Ratnagiri<br />
          Direct Lines: +91 90969 99901 / +91 90962 19901
        </div>
        <div style="border: 2px dashed #38BDF8; padding: 8px 14px; border-radius: 10px; text-align: center; font-size: 10px; font-weight: bold; color: #38BDF8; text-transform: uppercase;">
          Verified 7/12<br />Title Guaranteed
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  // Allow DOM to layout paint
  await new Promise((r) => setTimeout(r, 120));

  try {
    const html2pdf = await loadHtml2Pdf();
    const opt = {
      margin: 0,
      filename: fileName,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 794
      },
      jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    await html2pdf().set(opt).from(container).save();
  } catch (err) {
    console.error('PDF compiling error:', err);
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};
