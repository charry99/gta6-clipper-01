// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube clip; this program has exactly one
// job: hand the clip's address to the grader. It copies VIDEO.json from the
// repository root (the bot directory) into the output directory, where the
// house reads it and looks the video up on YouTube itself. Nothing else is
// scored, so nothing else is written.
//
// Local run, the same way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outputDir, 'VIDEO.json');

// Read the file first so a missing or malformed VIDEO.json fails loudly
// here, with the path named, instead of surfacing as a grader error.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, 'utf8'));
} catch (err) {
  console.error(`cannot read a JSON VIDEO.json at ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

const url = (parsed as { url?: unknown }).url;
if (typeof url !== 'string' || url.length === 0) {
  console.error(`VIDEO.json at ${sourcePath} has no "url" string to hand in`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Verify the copy landed whole: the gate reads exactly these bytes, so a
// short copy must fail here rather than as a puzzling invalid entry later.
const copied = statSync(targetPath).size;
const expected = statSync(sourcePath).size;
if (copied !== expected) {
  console.error(`copy of VIDEO.json is incomplete: ${copied} of ${expected} bytes at ${targetPath}`);
  process.exit(1);
}
