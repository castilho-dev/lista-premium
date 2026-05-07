/**
 * Compõe a logo (public/logo.png) centralizada sobre o fundo do Hero da VSL.
 * Saída: public/logo-fundo-vsl.png
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const bgPath = join(root, 'public', 'vsl-hero-background.png');
const logoPath = join(root, 'public', 'logo.png');
const outPath = join(root, 'public', 'logo-fundo-vsl.png');

const bgMeta = await sharp(bgPath).metadata();
const w = bgMeta.width ?? 2560;
const h = bgMeta.height ?? 1440;

// ~40% da menor dimensão: boa leitura em 16:9 (OG, capas, VTurb)
const logoSize = Math.round(Math.min(w, h) * 0.4);

const logoBuf = await sharp(logoPath)
  .resize(logoSize, logoSize, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const left = Math.round((w - logoSize) / 2);
const top = Math.round((h - logoSize) / 2);

await sharp(bgPath)
  .composite([{ input: logoBuf, left, top, blend: 'over' }])
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log('Wrote', outPath, `(${w}×${h}, logo ${logoSize}px)`);
