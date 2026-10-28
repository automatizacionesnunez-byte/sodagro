import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(await readFile(join(root, "scripts/assets.json"), "utf8"));
const outputDir = join(root, "public/images");

await mkdir(outputDir, { recursive: true });

for (const asset of manifest) {
  const response = await fetch(asset.url);
  if (!response.ok) {
    throw new Error(`No se pudo descargar ${asset.file}: ${response.status}`);
  }
  await writeFile(join(outputDir, asset.file), Buffer.from(await response.arrayBuffer()));
  console.log(`Descargado ${asset.file}`);
}

await writeFile(
  join(outputDir, "manifest.json"),
  `${JSON.stringify({ generatedAt: new Date().toISOString(), source: "Unsplash", assets: manifest }, null, 2)}\n`,
);

console.log(`\n${manifest.length} imágenes disponibles en public/images`);
