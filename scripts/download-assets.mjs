import { mkdirSync, createWriteStream, existsSync } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';
import path from 'node:path';

const ASSETS = [
  // hero background
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a312d0_pdKurzyBackground.png', 'images/hero-books.png'],
  // 3-card images
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a3132a_studovna.jpg', 'images/studovna.jpg'],
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a31319_students-p-3200.jpg', 'images/students.jpg'],
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a31324_party.png', 'images/party.png'],
  // people
  ['https://cdn.prod.website-files.com/673bfafda50fdcbfdf1ab2a6/68c566a581e827ca408eae6f_1750623637327.jpeg', 'images/andrej.jpeg'],
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a312f7_maria.jpg', 'images/maria.jpg'],
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a312fc_Jakub.png', 'images/jakub.png'],
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d2537cdf7226d2d0a312f1_jan.png', 'images/jan.png'],
  // school of athens
  ['https://cdn.prod.website-files.com/68d2523906ad7d62ec557e5c/68d662ac7617349da38f084d_atenskaSkolaPozadie.png', 'images/atenska-skola.png'],
];

mkdirSync('public/images', { recursive: true });

async function fetchOne([url, dest]) {
  const target = path.join('public', dest);
  if (existsSync(target)) { console.log('skip', dest); return; }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(target));
  console.log('ok', dest);
}

const BATCH = 4;
for (let i = 0; i < ASSETS.length; i += BATCH) {
  await Promise.all(ASSETS.slice(i, i + BATCH).map(fetchOne));
}
console.log('done');
