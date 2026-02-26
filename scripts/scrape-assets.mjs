import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://drsamsonolori.com';

async function fetchHtml(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function toAbsoluteUrl(src) {
  if (!src) return null;
  if (src.startsWith('http://') || src.startsWith('https://')) return src;
  if (src.startsWith('//')) return `https:${src}`;
  if (src.startsWith('/')) return `${BASE_URL}${src}`;
  return `${BASE_URL}/${src}`;
}

async function downloadFile(url, destDir) {
  const u = new URL(url);
  const filename = path.basename(u.pathname);
  const destPath = path.join(destDir, filename);

  if (fs.existsSync(destPath)) {
    console.log(`Skip existing: ${destPath}`);
    return destPath;
  }

  console.log(`Downloading ${url} -> ${destPath}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.warn(`Failed to download ${url}: ${res.status} ${res.statusText}`);
    return null;
  }

  const buf = await res.arrayBuffer();
  fs.writeFileSync(destPath, Buffer.from(buf));
  return destPath;
}

async function scrapePage(url) {
  console.log(`Scraping ${url}`);
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  const imgSrcs = new Set();
  $('img').each((_, el) => {
    const src = $(el).attr('src');
    const abs = toAbsoluteUrl(src);
    if (abs) imgSrcs.add(abs);
  });

  const faviconHrefs = new Set();
  $('link[rel*="icon"]').each((_, el) => {
    const href = $(el).attr('href');
    const abs = toAbsoluteUrl(href);
    if (abs) faviconHrefs.add(abs);
  });

  return {
    images: Array.from(imgSrcs),
    favicons: Array.from(faviconHrefs),
  };
}

async function main() {
  const outRoot = path.join(__dirname, '..', 'public', 'assets');
  const imagesDir = path.join(outRoot, 'images');
  const iconsDir = path.join(outRoot, 'icons');
  const logoDir = path.join(outRoot, 'logo');

  ensureDir(imagesDir);
  ensureDir(iconsDir);
  ensureDir(logoDir);

  const pages = [
    BASE_URL,
    `${BASE_URL}/?page_id=45`,
    `${BASE_URL}/buy-now/`,
  ];

  const all = { images: new Set(), favicons: new Set() };

  for (const url of pages) {
    const { images, favicons } = await scrapePage(url);
    images.forEach((i) => all.images.add(i));
    favicons.forEach((f) => all.favicons.add(f));
  }

  const downloaded = {
    images: [],
    favicons: [],
  };

  for (const img of all.images) {
    const saved = await downloadFile(img, imagesDir);
    if (saved) downloaded.images.push(saved);
  }

  for (const ico of all.favicons) {
    const saved = await downloadFile(ico, iconsDir);
    if (saved) downloaded.favicons.push(saved);
  }

  const summaryPath = path.join(__dirname, 'scraped-assets.json');
  fs.writeFileSync(
    summaryPath,
    JSON.stringify(
      {
        source: BASE_URL,
        downloaded,
      },
      null,
      2
    )
  );

  console.log(`Done. Summary written to ${summaryPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

