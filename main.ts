import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Midnight Fridge Roast — u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// The entry is a single fixed line: a roast of a smart fridge that locks
// itself at midnight, told as if the fridge were a nightclub bouncer
// turning its own owner away at the door. One joke, one punchline,
// spoken aloud at 2 a.m. in front of a glowing, locked door.
const ROAST =
  "My smart fridge locks at midnight like a nightclub bouncer: " +
  "'You're not on the list \u2014 and neither is the leftover pizza you came for.'";

// The gate accepts 1 to 200 characters; fail loudly instead of
// writing an entry the scorer would refuse.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}`);
}

// The output directory is provided by the harness; fall back to /output
// so the program also works when run by hand.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ROAST + "\n", "utf8");
