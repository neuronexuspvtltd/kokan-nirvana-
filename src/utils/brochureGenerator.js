import { BRAND_INFO } from '../data/websiteData';

// Helper to safely load images into HTML5 Canvas
const loadImage = (src) => {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      const img2 = new Image();
      img2.onload = () => resolve(img2);
      img2.onerror = () => resolve(null);
      img2.src = src;
    };
    img.src = src;
  });
};

// Helper to wrap text cleanly on canvas and return final Y coordinate
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

  // 2. Pre-load Property Cover Image
  const origin = window.location.origin;
  const imageSrc = property.image?.startsWith('http') ? property.image : `${origin}${property.image}`;
  const img = await loadImage(imageSrc);

  // Layout Dimensions
  const width = 800;
  const headerHeight = 85;
  const photoHeight = 380;

  // Measure content height dynamically to eliminate any bottom white gaps
  const tempCanvas = document.createElement('canvas');
  const tempCtx = tempCanvas.getContext('2d');
  tempCtx.font = '13px sans-serif';

  const words = (property.description || '').split(' ');
  let lineCount = 1;
  let testLine = '';
  words.forEach((w) => {
    if (tempCtx.measureText(testLine + w + ' ').width > 740) {
      lineCount++;
      testLine = w + ' ';
    } else {
      testLine += w + ' ';
    }
  });

  const descHeight = lineCount * 20 + 20;
  const featuresCount = property.features ? property.features.length : 0;
  const featureRows = Math.ceil(featuresCount / 2);
  const featuresHeight = featureRows * 42 + 25;
  const plotBoxHeight = 48 + 30;
  const footerHeight = 110;

  const bodyHeight = 35 + 28 + descHeight + 18 + featuresHeight + plotBoxHeight;
  const totalHeight = headerHeight + photoHeight + bodyHeight + footerHeight;

  // Create Canvas with exact calculated height
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = totalHeight;
  const ctx = canvas.getContext('2d');

  // Fill White Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, totalHeight);

  // Outer Card Border
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 3;
  ctx.strokeRect(2, 2, width - 4, totalHeight - 4);

  // 1. Header Bar
  ctx.fillStyle = '#09131F';
  ctx.fillRect(0, 0, width, headerHeight);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 22px Georgia, serif';
  ctx.fillText(BRAND_INFO.name.toUpperCase(), 30, 42);

  ctx.fillStyle = '#94A3B8';
  ctx.font = 'bold 10px sans-serif';
  ctx.fillText(BRAND_INFO.tagline.toUpperCase() + ' • DAPOLI', 30, 62);

  // Header Badge Right
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(570, 26, 200, 34);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('OFFICIAL PROPERTY CARD', 585, 48);

  // 2. Photo Section
  const imgY = headerHeight;
  if (img) {
    const imgRatio = img.width / img.height;
    const targetRatio = width / photoHeight;
    let renderW = width;
    let renderH = photoHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > targetRatio) {
      renderW = photoHeight * imgRatio;
      offsetX = (width - renderW) / 2;
    } else {
      renderH = width / imgRatio;
      offsetY = (photoHeight - renderH) / 2;
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(0, imgY, width, photoHeight);
    ctx.clip();
    ctx.drawImage(img, offsetX, imgY + offsetY, renderW, renderH);
    ctx.restore();
  } else {
    ctx.fillStyle = '#0B1522';
    ctx.fillRect(0, imgY, width, photoHeight);
  }

  // Photo Gradient Overlay
  const grad = ctx.createLinearGradient(0, imgY + 220, 0, imgY + photoHeight);
  grad.addColorStop(0, 'rgba(11,21,34,0)');
  grad.addColorStop(1, 'rgba(11,21,34,0.92)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, imgY + 220, width, 160);

  // Top-Left Badge (Category)
  ctx.fillStyle = '#0284C7';
  ctx.fillRect(30, imgY + 20, 140, 30);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText((property.category || 'SEA-SHORE').toUpperCase(), 45, imgY + 39);

  // Top-Right Badge (7/12 Clear)
  ctx.fillStyle = '#0F172A';
  ctx.fillRect(630, imgY + 20, 140, 30);
  ctx.fillStyle = '#34D399';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('7/12 CLEAR ✓', 655, imgY + 39);

  // Bottom Location & Type Tags
  ctx.fillStyle = '#F1F5F9';
  ctx.font = 'bold 15px sans-serif';
  ctx.fillText('LOCATION: ' + property.location, 30, imgY + photoHeight - 20);

  ctx.fillStyle = '#7DD3FC';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('TYPE: ' + property.type, 540, imgY + photoHeight - 20);

  // 3. Body Content
  let currentY = imgY + photoHeight + 35;

  // Title
  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 24px Georgia, serif';
  ctx.fillText(property.title, 30, currentY);
  currentY += 28;

  // Description
  ctx.fillStyle = '#475569';
  ctx.font = '13px sans-serif';
  currentY = wrapText(ctx, property.description, 30, currentY, 740, 20);
  currentY += 20;

  // Highlights Header
  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('KEY INFRASTRUCTURE & HIGHLIGHTS:', 30, currentY);
  currentY += 18;

  // Features Grid (2 Columns)
  if (property.features && property.features.length > 0) {
    const pillHeight = 32;
    const colWidth = 355;
    const gapX = 30;

    property.features.forEach((feat, i) => {
      const isCol1 = i % 2 === 0;
      const posX = isCol1 ? 30 : 30 + colWidth + gapX;
      const posY = currentY + Math.floor(i / 2) * 42;

      // Draw Pill Box
      ctx.fillStyle = '#F0F9FF';
      ctx.strokeStyle = '#BAE6FD';
      ctx.lineWidth = 1;
      ctx.fillRect(posX, posY, colWidth, pillHeight);
      ctx.strokeRect(posX, posY, colWidth, pillHeight);

      // Checkmark & Text
      ctx.fillStyle = '#0284C7';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('✓', posX + 12, posY + 20);

      ctx.fillStyle = '#0369A1';
      ctx.font = '600 12px sans-serif';
      ctx.fillText(feat, posX + 28, posY + 20);
    });

    currentY += featureRows * 42 + 15;
  }

  // Plot Area Box
  const boxHeight = 48;
  ctx.fillStyle = '#F8FAFC';
  ctx.strokeStyle = '#0284C7';
  ctx.lineWidth = 1.5;
  ctx.fillRect(30, currentY, 740, boxHeight);
  ctx.strokeRect(30, currentY, 740, boxHeight);

  ctx.fillStyle = '#0F172A';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText('PLOT AREA / SIZE: ', 48, currentY + 29);

  ctx.fillStyle = '#0284C7';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText(property.plotArea, 185, currentY + 29);

  ctx.fillStyle = '#059669';
  ctx.font = 'bold 12px sans-serif';
  ctx.fillText('COLLECTOR N.A. PASSED ✓', 565, currentY + 29);

  currentY += boxHeight + 30;

  // 4. Footer Bar (Ends exactly at totalHeight)
  ctx.fillStyle = '#09131F';
  ctx.fillRect(0, currentY, width, footerHeight);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 14px sans-serif';
  ctx.fillText(BRAND_INFO.legalEntity, 30, currentY + 35);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 13px sans-serif';
  ctx.fillText('Direct Call Lines: +91 90969 99901 / +91 90962 19901', 30, currentY + 62);

  ctx.fillStyle = '#94A3B8';
  ctx.font = '11px sans-serif';
  ctx.fillText('Dapoli Regional Office: Ainarkar Heights, Near BSNL Office, Dapoli, Ratnagiri', 30, currentY + 85);

  // Title Guarantee Stamp Box
  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(610, currentY + 22, 160, 65);

  ctx.fillStyle = '#38BDF8';
  ctx.font = 'bold 11px sans-serif';
  ctx.fillText('VERIFIED 7/12', 645, currentY + 47);
  ctx.fillText('TITLE GUARANTEED', 628, currentY + 67);

  // Trigger Immediate Direct File Download
  const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
  const link = document.createElement('a');
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
