import { copyFile, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceRoot = path.join(projectRoot, 'site-source', 'infassist');
const outputRoot = path.join(projectRoot, 'public', 'infassist');
const mountedPath = '/infassist';
const siteOrigin = 'https://infassist-turhan.vercel.app';
const targetOrigin = 'https://alazlab.com';
const locales = new Set(['tr', 'de', 'fr', 'it', 'es', 'ar', 'hi', 'id', 'ko']);

async function collectFiles(directory, relative = '') {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(relative, entry.name);
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectFiles(absolutePath, relativePath));
    } else if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files;
}

function isPublishedFile(relativePath) {
  const normalized = relativePath.split(path.sep).join('/');
  if (normalized === 'styles.css') return true;
  if (normalized.startsWith('img/') || normalized.startsWith('fonts/')) return true;
  if (/^(index|privacy|support)\.html$/.test(normalized)) return true;
  const localePage = normalized.match(/^([a-z]{2})\/(index|privacy|support)\.html$/);
  return Boolean(localePage && locales.has(localePage[1]));
}

function mountPath(value) {
  const match = value.match(/^([^?#]*)([?#].*)?$/);
  const pathname = match?.[1] || '/';
  const suffix = match?.[2] || '';
  return `${mountedPath}${pathname === '/' ? '' : pathname}${suffix}`;
}

function moveOriginUrls(content) {
  const escapedOrigin = siteOrigin.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const originPattern = new RegExp(`${escapedOrigin}([^"'<>\\s]*)`, 'g');
  return content.replace(originPattern, (_match, suffix = '') => {
    return `${targetOrigin}${mountPath(suffix || '/')}`;
  });
}

function rewriteMarkup(content) {
  const withoutVercelAnalytics = content.replace(
    /<script\b[^>]*\bsrc=(['"])\/_vercel\/insights\/script\.js\1[^>]*>\s*<\/script>/gi,
    '',
  );

  return moveOriginUrls(withoutVercelAnalytics).replace(
    /\b(href|src)=(['"])(\/[^'"]*)\2/gi,
    (_match, attribute, quote, value) => `${attribute}=${quote}${mountPath(value)}${quote}`,
  );
}

function rewriteStylesheet(content) {
  return content.replace(
    /url\((['"]?)(\/[^)'"\s]+)\1\)/gi,
    (_match, quote, value) => `url(${quote}${mountPath(value)}${quote})`,
  );
}

async function main() {
  const sourceFiles = (await collectFiles(sourceRoot)).filter(isPublishedFile);
  if (sourceFiles.length === 0) {
    throw new Error(`No InfAssist website source files found in ${sourceRoot}`);
  }

  for (const relativePath of sourceFiles) {
    const normalized = relativePath.split(path.sep).join('/');
    const sourcePath = path.join(sourceRoot, relativePath);
    const destinationPath = path.join(outputRoot, relativePath);
    await mkdir(path.dirname(destinationPath), { recursive: true });

    if (normalized.endsWith('.html')) {
      const source = await readFile(sourcePath, 'utf8');
      await writeFile(destinationPath, rewriteMarkup(source));
    } else if (normalized.endsWith('.css')) {
      const source = await readFile(sourcePath, 'utf8');
      await writeFile(destinationPath, rewriteStylesheet(source));
    } else {
      await copyFile(sourcePath, destinationPath);
    }
  }

  console.log(`Synced ${sourceFiles.length} InfAssist site files to public/infassist/`);
}

await main();
