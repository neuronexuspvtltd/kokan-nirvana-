import html2pdf from 'html2pdf.js';
import { BRAND_INFO } from '../data/websiteData';

export const downloadPropertyBrochure = async (property) => {
  if (!property) return;

  // If a direct brochure PDF file exists for this property, download it directly
  if (property.brochurePdf) {
    const link = document.createElement('a');
    link.href = property.brochurePdf;
    link.download = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // Create invisible offscreen container for direct PDF export
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // Standard A4 width at 96 DPI
  container.style.background = '#FFFFFF';

  const origin = window.location.origin;
  const heroImg = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;

  container.innerHTML = `
    <div style="font-family: 'Plus Jakarta Sans', sans-serif; color: #0F172A; padding: 24px; background: #FFFFFF; width: 794px;">
      <!-- Header -->
      <div style="background: #09131F; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #0284C7;">
        <div>
          <div style="font-family: serif; font-size: 22px; font-weight: 800; color: #38BDF8; letter-spacing: 1px;">
            ${BRAND_INFO.name.toUpperCase()}
          </div>
          <div style="font-size: 9px; color: #94A3B8; text-transform: uppercase; letter-spacing: 2px; margin-top: 2px;">
            ${BRAND_INFO.tagline}
          </div>
        </div>
        <div style="background: #0284C7; color: white; padding: 6px 14px; border-radius: 20px; font-size: 9px; font-weight: 800; text-transform: uppercase;">
          Official Property Brochure
        </div>
      </div>

      <!-- Hero Image -->
      <div style="position: relative; width: 100%; height: 250px; overflow: hidden; background: #09131F;">
        <img src="${heroImg}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;" alt="${property.title}" />
        <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, #09131F, transparent); padding: 20px; color: white;">
          <span style="background: #38BDF8; color: #09131F; font-size: 9px; font-weight: 800; text-transform: uppercase; padding: 3px 10px; border-radius: 10px; display: inline-block;">
            ${property.category}
          </span>
          <div style="font-family: serif; font-size: 22px; font-weight: 700; color: #FFFFFF; margin-top: 4px;">
            ${property.title}
          </div>
        </div>
      </div>

      <!-- Content Specifications -->
      <div style="padding: 20px 10px;">
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #0284C7; font-weight: 700; margin-bottom: 16px; border-bottom: 1px solid #E2E8F0; padding-bottom: 8px;">
          <span>📍 Location: ${property.location}</span>
          <span>Collector N.A. Sanctioned</span>
        </div>

        <!-- Specs Grid -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #F0F9FF; padding: 14px; border-radius: 12px; border: 1px solid #BAE6FD; margin-bottom: 20px;">
          <div>
            <div style="font-size: 9px; color: #64748B; text-transform: uppercase; font-weight: 700;">Plot Area / Size</div>
            <div style="font-size: 12px; color: #0F172A; font-weight: 800; margin-top: 2px;">${property.plotArea}</div>
          </div>
          <div>
            <div style="font-size: 9px; color: #64748B; text-transform: uppercase; font-weight: 700;">Property Type</div>
            <div style="font-size: 12px; color: #0F172A; font-weight: 800; margin-top: 2px;">${property.type}</div>
          </div>
          <div>
            <div style="font-size: 9px; color: #64748B; text-transform: uppercase; font-weight: 700;">Legal Status</div>
            <div style="font-size: 12px; color: #0F172A; font-weight: 800; margin-top: 2px;">100% Clear 7/12 Extract</div>
          </div>
        </div>

        <!-- Property Description -->
        <div style="font-family: serif; font-size: 15px; font-weight: 700; color: #0F172A; margin-bottom: 6px; border-bottom: 2px solid #38BDF8; display: inline-block;">
          Property Overview
        </div>
        <p style="font-size: 11px; line-height: 1.6; color: #334155; margin-bottom: 20px;">
          ${property.description}
        </p>

        <!-- Infrastructure Features -->
        <div style="font-family: serif; font-size: 15px; font-weight: 700; color: #0F172A; margin-bottom: 10px; border-bottom: 2px solid #38BDF8; display: inline-block;">
          Infrastructure & Key Highlights
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 20px;">
          ${property.features.map(f => `
            <div style="background: #F8FAFC; padding: 8px 12px; border-radius: 8px; font-size: 10px; font-weight: 600; color: #1E293B; border: 1px solid #E2E8F0;">
              ✓ ${f}
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Footer Contact -->
      <div style="background: #09131F; color: white; padding: 18px 24px; border-radius: 0 0 12px 12px; display: flex; justify-content: space-between; align-items: center;">
        <div style="font-size: 10px; line-height: 1.5; color: #94A3B8;">
          <strong style="color: white; font-size: 12px;">${BRAND_INFO.legalEntity}</strong><br />
          Dapoli Office: Ainarkar Heights, Near BSNL Office, Dapoli, Ratnagiri<br />
          Direct Lines: +91 90969 99901 / +91 90962 19901 | Email: ${BRAND_INFO.email}
        </div>
        <div style="border: 2px dashed #38BDF8; padding: 6px 12px; border-radius: 8px; font-size: 9px; font-weight: 800; color: #38BDF8; text-transform: uppercase; text-align: center;">
          Verified 7/12<br />Title Sanctioned
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(container);

  const filename = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;

  const opt = {
    margin:       0,
    filename:     filename,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };

  try {
    await html2pdf().set(opt).from(container).save();
  } catch (err) {
    console.error('Direct PDF export error:', err);
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
};
