/**
 * Crops the hero image for mobile: head, neck, shoulders, lapels only (just below lapel).
 * Output: public/assets/images/ochuko-2-mobile.png
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'public/assets/images/ochuko-2.png');
const dest = path.join(root, 'public/assets/images/ochuko-2-mobile.png');

sharp(src)
  .metadata()
  .then(({ width, height }) => {
    // Crop from top (5%) and keep 65% height — trim top and bottom
    const top = Math.round(height * 0.05);
    const cropHeight = Math.round(height * 0.65);
    return sharp(src)
      .extract({ left: 0, top, width, height: cropHeight })
      .resize(width * 2, cropHeight * 2, { kernel: sharp.kernel.lanczos3 })
      .toFile(dest);
  })
  .then(() => console.log('Cropped mobile image saved to', dest))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
