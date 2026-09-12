import { BRAND_INFO } from '../data/websiteData';

// Helper to safely load images into HTML5 Canvas
const loadImage = (src) => {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      // Fallback load without crossOrigin
      const img2 = new Image();
      img2.onload = () => resolve(img2);
      img2.onerror = () => resolve(null);
      img2.src = src;
    };
    img.src = src;
  });
};

// Helper to wrap text cleanly on canvas
const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
  if (!text) return y;
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, currentY);
  return currentY + lineHeight;
};

export const downloadPropertyBrochure = async (property) => {
  if (!property) return;

  const fileName = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Card.jpg`;

  // 1. If property has a direct static brochure PDF file, download it immediately
  if (property.brochurePdf) {
    const link = document.createElement('a');
    link.href = property.brochurePdf;
    link.download = `${property.title.replace(/[^a-zA-Z0-9]/g, '_')}_Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    return;
  }

  // 2. High-Res Offscreen Canvas Card Generator (100% reliable, zero blank pages)
  const canvas = document.createElement('canvas');
  const width = 800;
  const height = 1120;
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  // Fill White Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // Outer Card Border
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, width - 4, height - 4);

  // Header Bar
  ctx.fillStyle = '#09131F';
  ctx.fillRect(0, 0, width, 85);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 24px Georgia, serif';
  ctx.fillText(BRAND_INFO.name.toUpperCase(), 30, 42);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '600 11px sans-serif';
  ctx.fillText(BRAND_INFO.tagline.toUpperCase() + ' • DAPOLI', 30, 64);

  // Header Badge
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(570, 26, 200, 34);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('OFFICIAL PROPERTY CARD', 585, 48);

  // Load Property Image
  const origin = window.location.origin;
  const imageSrc = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;
  const img = await loadImage(imageSrc);

  const imgY = 85;
  const imgHeight = 380;

  if (img) {
    // Draw Image with cover scaling
    const imgRatio = img.width / img.height;
    const targetRatio = width / imgHeight;
    let renderW = width;
    let renderH = imgHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > targetRatio) {
      renderW = imgHeight * imgRatio;
      offsetX = (width - renderW) / 2;
    } else {
      renderH = width / imgRatio;
      offsetY = (imgHeight - renderH) / 2;
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, imgY, width, imgHeight);
    ctx.clip();
    ctx.drawImage(img, offsetX, imgY + offsetY, renderW, renderH);
    ctx.restore();
  } else {
    // Fallback Image Box
    ctx.fillStyle = '#0B1522';
    ctx.fillRect(0, imgY, width, imgHeight);
  }

  // Image Dark Gradient Overlay at Bottom
  const grad = ctx.createLinearGradient(0, imgY + 240, 0, imgY + imgHeight);
  grad.addColorStop(0, 'rgba(11,21,34,0)');
  grad.addColorStop(1, 'rgba(11,21,34,0.95)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, imgY + 240, width, 140);

  // Category Badge Top-Left of Photo
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(30, imgY + 20, 140, 30);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('🌊 ' + (property.category || 'SEA-SHORE').toUpperCase(), 42, imgY + 39);

  // 7/12 Clear Badge Top-Right of Photo
  ctx.fillStyle = 'rgba(15,23,42,0.9)';
  ctx.fillRect(630, imgY + 20, 140, 30);
  ctx.fillStyle = '#34D399';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('🛡️ 7/12 CLEAR', 645, imgY + 39);

  // Location & Type Tags at Bottom of Photo
  ctx.fillStyle = '#F1F5F9';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('📍 ' + property.location, 30, imgY + imgHeight - 20);

  ctx.fillStyle = '#7DD3FC';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('🧭 ' + property.type, 560, imgY + imgHeight - 20);

  // Card Content Section
  let currentY = imgY + imgHeight + 35;

  // Title
  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 26px Georgia, serif';
  ctx.fillText(property.title, 30, currentY);
  currentY += 28;

  // Description Paragraphs
  ctx.fillStyle = '#475569';
  ctx.font = '14px sans-serif';
  currentY = wrapText(ctx, property.description, 30, currentY, 740, 22);
  currentY += 15;

  // Features List Heading
  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('KEY INFRASTRUCTURE & HIGHLIGHTS:', 30, currentY);
  currentY += 20;

  // Features List Pills
  ctx.font = '600 13px sans-serif';
  if (property.features && property.features.length > 0) {
    let col = 0;
    let startX = 30;
    let itemY = currentY;

    property.features.forEach((feat, i) => {
      const xPos = col === 0 ? 30 : 410;
      const yPos = itemY + Math.floor(i / 2) * 36;

      // Pill Box
      ctx.fillStyle = '#F0F9FF';
      ctx.strokeStyle = '#BAE6FD';
      ctx.lineWidth = 1;
      ctx.fillRect(xPos, yPos - 18, 360, 28);
      ctx.strokeRect(xPos, yPos - 18, 360, 28);

      ctx.fillStyle = '#0369A1';
      ctx.fillText('✓ ' + feat, xPos + 12, yPos);
    });

    currentY = itemY + Math.ceil(property.features.length / 2) * 36 + 15;
  }

  // Plot Area Specification Box
  ctx.fillStyle = '#F8FAFC';
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 1.5;
  ctx.fillRect(30, currentY, 740, 48);
  ctx.strokeRect(30, currentY, 740, 48);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('📐 Plot Area / Size: ', 50, currentY + 30);

  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText(property.plotArea, 200, currentY + 30);

  ctx.fillStyle = '#059669';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('Collector N.A. Passed ✓', 590, currentY + 30);

  // Footer Section
  const footerY = 990;
  ctx.fillStyle = '#09131F';
  ctx.fillRect(0, footerY, width, 130);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText(BRAND_INFO.legalEntity, 30, footerY + 35);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('📞 Direct Lines: +91 90969 99901 / +91 90962 19901', 30, footerY + 65);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '11px sans-serif';
  ctx.fillText('Dapoli Regional Office: Ainarkar Heights, Near BSNL Office, Dapoli, Ratnagiri', 30, footerY + 90);

  // Title Guarantee Stamp Box
  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.strokeRect(610, footerY + 25, 160, 65);
  ctx.setLineDash([]); // Reset line dash

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('VERIFIED 7/12', 645, footerY + 50);
  ctx.fillText('TITLE GUARANTEED', 628, footerY + 70);

  // Trigger Immediate Direct File Download (JPG/PNG High-Res Card Image)
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
  const link = document.createElement('a');
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
