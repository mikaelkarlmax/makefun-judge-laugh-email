// Make the Judge Laugh in One Line — entry program.
// Writes one original one-liner to /output/entry.txt.
// The line must stay a single line of 1-200 characters: setup first,
// punch at the very end, nothing explained after it.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finally found the perfect work-life balance — I now panic about work and life at exactly the same time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
