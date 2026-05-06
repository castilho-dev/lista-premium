import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public', 'logo.png');

const size = 1024;

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="lp-gold-export" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#D9B382"/>
      <stop offset="55%" stop-color="#B88A56"/>
      <stop offset="100%" stop-color="#8C5E33"/>
    </linearGradient>
  </defs>
  <circle cx="32" cy="32" r="30" stroke="url(#lp-gold-export)" stroke-width="1.5"/>
  <circle cx="32" cy="32" r="25" stroke="url(#lp-gold-export)" stroke-width="0.75" opacity="0.6"/>
  <path d="M32 14 L36 28 L50 28 L38.5 36.5 L43 50 L32 41.5 L21 50 L25.5 36.5 L14 28 L28 28 Z" fill="url(#lp-gold-export)"/>
</svg>`;

const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
writeFileSync(outPath, png);
console.log('Wrote', outPath, `(${size}×${size})`);
