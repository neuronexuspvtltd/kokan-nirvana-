import { BRAND_INFO } from '../data/websiteData';

export const downloadPropertyBrochure = (property) => {
  if (!property) return;

  // If a direct brochure PDF exists for this property, download it directly
  if (property.brochurePdf) {
    const link = document.createElement('a');
    link.href = property.brochurePdf;
    link.download = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // Otherwise, generate a luxury branded PDF print brochure
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popup permissions in your browser to download/print the property brochure.');
    return;
  }

  const origin = window.location.origin;
  const heroImageSrc = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;

  const brochureHtml = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>${property.title} - Official Brochure | Kokan Nirvana</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: #0F172A;
            background: #F8FAFC;
            padding: 30px 20px;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .container {
            max-width: 840px;
            margin: 0 auto;
            background: #FFFFFF;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
            border: 1px solid #0284C730;
          }
          .header {
            background: #09131F;
            color: white;
            padding: 28px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #0284C7;
          }
          .brand-title {
            font-family: 'Cinzel', serif;
            font-size: 26px;
            font-weight: 800;
            color: #38BDF8;
            letter-spacing: 1px;
          }
          .brand-subtitle {
            font-size: 11px;
            color: #94A3B8;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-top: 4px;
            font-weight: 600;
          }
          .badge {
            background: linear-gradient(135deg, #0284C7, #0369A1);
            color: white;
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 11px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
          }
          .hero-container {
            position: relative;
            height: 360px;
            overflow: hidden;
          }
          .hero-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .hero-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to top, #09131FE6, transparent);
            padding: 30px 40px 20px 40px;
            color: white;
          }
          .hero-tag {
            background: #38BDF8;
            color: #09131F;
            font-size: 10px;
            font-weight: 800;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 8px;
          }
          .hero-title {
            font-family: 'Cinzel', serif;
            font-size: 28px;
            font-weight: 700;
            color: #FFFFFF;
          }
          .content {
            padding: 36px 40px;
          }
          .location-bar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            color: #0284C7;
            font-weight: 700;
            margin-bottom: 24px;
            padding-bottom: 14px;
            border-bottom: 1px solid #E2E8F0;
          }
          .specs-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-bottom: 32px;
            background: #F0F9FF;
            padding: 20px;
            border-radius: 16px;
            border: 1px solid #BAE6FD;
          }
          .spec-label {
            font-size: 11px;
            color: #64748B;
            text-transform: uppercase;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.5px;
          }
          .spec-val {
            font-size: 14px;
            color: #0F172A;
            font-weight: 800;
          }
          .section-heading {
            font-family: 'Cinzel', serif;
            font-size: 18px;
            font-weight: 700;
            color: #0F172A;
            margin-bottom: 14px;
            border-bottom: 2px solid #38BDF8;
            padding-bottom: 6px;
            display: inline-block;
          }
          .desc {
            font-size: 14px;
            line-height: 1.7;
            color: #334155;
            margin-bottom: 32px;
          }
          .features-list {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-bottom: 36px;
          }
          .feature-item {
            background: #F8FAFC;
            padding: 12px 16px;
            border-radius: 12px;
            font-size: 13px;
            font-weight: 600;
            color: #1E293B;
            border: 1px solid #E2E8F0;
            display: flex;
            align-items: center;
          }
          .feature-item::before {
            content: "✓";
            color: #0284C7;
            font-weight: 800;
            margin-right: 10px;
            font-size: 15px;
          }
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-bottom: 36px;
          }
          .gallery-img {
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 12px;
            border: 1px solid #E2E8F0;
          }
          .footer {
            background: #09131F;
            color: white;
            padding: 30px 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .footer-contact {
            font-size: 12px;
            line-height: 1.7;
            color: #94A3B8;
          }
          .footer-contact strong {
            color: #FFFFFF;
            font-size: 14px;
          }
          .footer-contact a {
            color: #38BDF8;
            text-decoration: none;
            font-weight: 700;
          }
          .stamp {
            border: 2px dashed #38BDF8;
            padding: 12px 20px;
            border-radius: 14px;
            text-align: center;
            font-size: 11px;
            font-weight: 800;
            color: #38BDF8;
            text-transform: uppercase;
            letter-spacing: 1px;
            background: #0284C715;
          }
          @media print {
            body { padding: 0; background: white; }
            .container { box-shadow: none; border: none; border-radius: 0; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <div class="brand-title">${BRAND_INFO.name.toUpperCase()}</div>
              <div class="brand-subtitle">${BRAND_INFO.tagline}</div>
            </div>
            <div class="badge">Official Brochure</div>
          </div>

          <div class="hero-container">
            <img src="${heroImageSrc}" class="hero-img" alt="${property.title}" />
            <div class="hero-overlay">
              <span class="hero-tag">${property.category}</span>
              <div class="hero-title">${property.title}</div>
            </div>
          </div>

          <div class="content">
            <div class="location-bar">
              <div>📍 ${property.location}</div>
              <div>Collector N.A. Sanctioned</div>
            </div>

            <div class="specs-grid">
              <div>
                <div class="spec-label">Plot Area / Size</div>
                <div class="spec-val">${property.plotArea}</div>
              </div>
              <div>
                <div class="spec-label">Property Type</div>
                <div class="spec-val">${property.type}</div>
              </div>
              <div>
                <div class="spec-label">Legal Title</div>
                <div class="spec-val">100% Clear 7/12 Extract</div>
              </div>
            </div>

            <h2 class="section-heading">Property Overview</h2>
            <p class="desc">${property.description}</p>

            <h2 class="section-heading">Infrastructure & Key Highlights</h2>
            <div class="features-list">
              ${property.features.map(f => `<div class="feature-item">${f}</div>`).join('')}
            </div>

            ${property.gallery && property.gallery.length > 0 ? `
              <h2 class="section-heading">Project Site Gallery</h2>
              <div class="gallery-grid">
                ${property.gallery.slice(0, 3).map(img => `<img src="${img.startsWith('http') ? img : origin + img}" class="gallery-img" alt="Gallery" />`).join('')}
              </div>
            ` : ''}
          </div>

          <div class="footer">
            <div class="footer-contact">
              <strong>${BRAND_INFO.legalEntity}</strong><br />
              Dapoli Office: Ainarkar Heights, Near BSNL Office, Dapoli, Ratnagiri<br />
              Direct Lines: <a href="tel:+919096999901">+91 90969 99901</a> / <a href="tel:+919096219901">+91 90962 19901</a><br />
              Email: ${BRAND_INFO.email}
            </div>
            <div class="stamp">
              Verified 7/12<br />Title Sanctioned
            </div>
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 500);
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.write(brochureHtml);
  printWindow.document.close();
};
