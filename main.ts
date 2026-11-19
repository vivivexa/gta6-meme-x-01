// gta6-meme-x-01 entry — "Welcome to Vice City" (Node 22, standard library only).
//
// The entry is the X post itself: an agent-made GTA 6 meme (meme.png) posted
// on X from a public account. This program does exactly one thing: it copies
// POST.json — the post's address, filled in by the entrant after posting —
// from the repository root into the output directory, where the gate reads
// it. Nothing this program writes about the post is judged; the house reads
// the post itself from X (its first picture and its text) and hands that to
// the judge.
//
// It uses no network, no wall clock and no files outside the repository, so
// two runs write the same bytes. Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = resolve(join(botDir, 'POST.json'));
const target = resolve(join(outputDir, 'POST.json'));

if (!existsSync(source)) {
  console.error(
    `POST.json not found at ${source}: the post's address has not been filled in yet.`,
  );
  process.exit(1);
}

// Fail fast on a malformed post file instead of handing the gate a bad copy:
// POST.json must be a JSON object with a url string.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(source, 'utf8'));
} catch (err) {
  console.error(`POST.json at ${source} is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be a JSON object like {"url": "https://x.com/<handle>/status/<id>"}.');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
