import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Change this to your images folder
const folder = path.join(__dirname, '/public/images/48th');

const files = fs.readdirSync(folder);

files.forEach(file => {
  const ext = path.extname(file);
  const name = path.basename(file, ext);

  let newExt = ext;
  if (/^\.jpe?g$/i.test(ext)) newExt = '.jpg';
  if (/^\.png$/i.test(ext)) newExt = '.png';

  const oldPath = path.join(folder, file);
  const newPath = path.join(folder, name + newExt);

  if (oldPath !== newPath) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} → ${name + newExt}`);
  }
});
