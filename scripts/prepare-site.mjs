import path from "node:path";
import { cp, copyFile, mkdir, rm, readdir, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = path.join(repoRoot, "site");

await rm(siteDir, { recursive: true, force: true });
await mkdir(siteDir, { recursive: true });

await copyFile(path.join(repoRoot, "index.html"), path.join(siteDir, "index.html"));
await cp(path.join(repoRoot, "dist"), path.join(siteDir, "dist"), { recursive: true });

const fontsDir = path.join(siteDir, "dist", "fonts");
for (const file of await readdir(fontsDir)) {
  if (file.endsWith(".svg")) {
    await unlink(path.join(fontsDir, file));
  }
}
