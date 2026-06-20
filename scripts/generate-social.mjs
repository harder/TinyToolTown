#!/usr/bin/env node
// Generate static social-card images into public/social/{slug}.png.
//
// By default this regenerates only tools whose markdown (or thumbnail) is newer
// than the existing card, so it is cheap to run on every deploy. Pass specific
// slugs to (re)generate just those tools, or --force to rebuild everything.
//
// Usage:
//   node scripts/generate-social.mjs                 # incremental, all tools
//   node scripts/generate-social.mjs --force         # rebuild every tool
//   node scripts/generate-social.mjs my-tool other   # only these slugs
//   node scripts/generate-social.mjs --prune         # also delete orphan cards
import {
  readFileSync,
  readdirSync,
  existsSync,
  statSync,
  mkdirSync,
  writeFileSync,
  unlinkSync,
} from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderSocialCard } from './social-card.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const TOOLS_DIR = join(ROOT, 'src', 'content', 'tools');
const SOCIAL_DIR = join(ROOT, 'public', 'social');

function parseToolFile(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, body: '' };

  const fmRaw = match[1];
  const body = (match[2] || '').trim();
  const unescape = (s) => s.replace(/\\(.)/g, '$1');

  const scalar = (key) => {
    const m = fmRaw.match(new RegExp(`^${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*$`, 'm'));
    return m ? unescape(m[1]) : undefined;
  };

  const tagsMatch = fmRaw.match(/^tags:\s*\[([\s\S]*?)\]\s*$/m);
  const tags = tagsMatch
    ? [...tagsMatch[1].matchAll(/"((?:[^"\\]|\\.)*)"/g)].map((m) => unescape(m[1]))
    : [];

  return {
    data: {
      name: scalar('name'),
      tagline: scalar('tagline'),
      ai_summary: scalar('ai_summary'),
      language: scalar('language'),
      license: scalar('license'),
      theme: scalar('theme'),
      thumbnail: scalar('thumbnail'),
      tags,
    },
    body,
  };
}

function mtime(path) {
  try {
    return statSync(path).mtimeMs;
  } catch {
    return 0;
  }
}

function needsRegen(slug, toolPath, thumbnail, force) {
  const outPath = join(SOCIAL_DIR, `${slug}.png`);
  if (force || !existsSync(outPath)) return true;
  const outMtime = mtime(outPath);
  if (mtime(toolPath) > outMtime) return true;
  if (thumbnail) {
    const thumbPath = join(ROOT, 'public', thumbnail.replace(/^\//, ''));
    if (existsSync(thumbPath) && mtime(thumbPath) > outMtime) return true;
  }
  return false;
}

async function main() {
  const args = process.argv.slice(2);
  const force = args.includes('--force');
  const prune = args.includes('--prune');
  const requestedSlugs = args.filter((a) => !a.startsWith('--'));

  if (!existsSync(TOOLS_DIR)) {
    console.error(`Tools directory not found: ${TOOLS_DIR}`);
    process.exit(1);
  }
  mkdirSync(SOCIAL_DIR, { recursive: true });

  const allSlugs = readdirSync(TOOLS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
  const validSlugs = new Set(allSlugs);

  const targetSlugs = requestedSlugs.length ? requestedSlugs : allSlugs;

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (const slug of targetSlugs) {
    const toolPath = join(TOOLS_DIR, `${slug}.md`);
    if (!existsSync(toolPath)) {
      console.warn(`⚠ No tool file for slug "${slug}", skipping`);
      continue;
    }

    const { data, body } = parseToolFile(readFileSync(toolPath, 'utf-8'));
    if (!data.name) {
      console.warn(`⚠ ${slug}: could not parse name, skipping`);
      continue;
    }

    if (!needsRegen(slug, toolPath, data.thumbnail, force)) {
      skipped++;
      continue;
    }

    try {
      const png = await renderSocialCard({ slug, body, ...data }, { rootDir: ROOT });
      writeFileSync(join(SOCIAL_DIR, `${slug}.png`), png);
      generated++;
    } catch (error) {
      failed++;
      console.error(`✗ ${slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  // Only prune when looking at the whole set (no specific slugs requested).
  let pruned = 0;
  if (prune && requestedSlugs.length === 0 && existsSync(SOCIAL_DIR)) {
    for (const file of readdirSync(SOCIAL_DIR)) {
      if (!file.endsWith('.png')) continue;
      const slug = file.replace(/\.png$/, '');
      if (!validSlugs.has(slug)) {
        unlinkSync(join(SOCIAL_DIR, file));
        pruned++;
      }
    }
  }

  console.log(
    `Social cards: ${generated} generated, ${skipped} up-to-date, ${failed} failed` +
      (prune ? `, ${pruned} pruned` : '')
  );
  if (failed > 0) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
