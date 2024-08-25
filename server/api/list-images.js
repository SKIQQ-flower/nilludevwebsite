import fs from 'fs';
import path from 'path';

export default defineEventHandler(async () => {
  const imagesDir = path.join(process.cwd(), 'public/images');

  try {
    const files = fs.readdirSync(imagesDir);
    const images = files.filter(file => /\.(png|jpe?g|svg)$/.test(file));

    return images;
  } catch (error) {
    console.error('uhhh error?? ', error);
    return [];
  }
});
