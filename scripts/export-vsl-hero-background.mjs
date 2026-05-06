/**
 * Rasteriza o fundo do Hero da VSL (gradiente + brilhos + grid pontilhado).
 * Saída: public/vsl-hero-background.png
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public', 'vsl-hero-background.png');

const W = 2560;
const H = 1440;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="vsl-base" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#171717"/>
      <stop offset="52%" stop-color="#262626"/>
      <stop offset="100%" stop-color="#3A2A1A"/>
    </linearGradient>
    <radialGradient id="vsl-glow-gold" cx="82%" cy="8%" r="52%" fx="82%" fy="8%">
      <stop offset="0%" stop-color="#B88A56" stop-opacity="0.38"/>
      <stop offset="55%" stop-color="#B88A56" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#B88A56" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="vsl-glow-brown" cx="12%" cy="88%" r="55%" fx="12%" fy="88%">
      <stop offset="0%" stop-color="#5C3D22" stop-opacity="0.45"/>
      <stop offset="50%" stop-color="#5C3D22" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#5C3D22" stop-opacity="0"/>
    </radialGradient>
    <pattern id="vsl-dots" width="32" height="32" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#ffffff" fill-opacity="0.04"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#vsl-base)"/>
  <rect width="100%" height="100%" fill="url(#vsl-glow-gold)"/>
  <rect width="100%" height="100%" fill="url(#vsl-glow-brown)"/>
  <rect width="100%" height="100%" fill="url(#vsl-dots)"/>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(outPath, png);
console.log('Wrote', outPath, `(${W}×${H})`);
