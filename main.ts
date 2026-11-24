// Gate (RULES.txt): entry.txt must be UTF-8 text of 1 to 120
// characters, not only white space. A single line, no trailing
// newline, so the file holds exactly the fortune and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fortune in a Pot: one kind, funny fortune for a houseplant.
// The fortune itself lives in FORTUNE below; the program only
// validates it against the gate and writes it to entry.txt.
const FORTUNE =
  "This week the sun will find your favourite leaf first, and you will grow one inch taller just to say thank you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const text = FORTUNE;
if (text.length < 1 || text.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${text.length}`);
}
if (text.trim().length === 0 || text.includes("\n")) {
  throw new Error("fortune must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote entry.txt (${text.length} characters)`);
