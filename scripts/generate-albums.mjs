import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);
const otherImageExtensions = new Set([".gif", ".webp", ".avif", ".heic", ".bmp", ".tif", ".tiff"]);

function imageDimensions(buffer, file) {
  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))) {
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    if (width > 0 && height > 0) return { width, height };
  }

  if (buffer.length >= 4 && buffer.readUInt16BE(0) === 0xffd8) {
    let offset = 2;
    while (offset < buffer.length && buffer[offset] === 0xff) {
      while (offset < buffer.length && buffer[offset] === 0xff) offset++;
      const marker = buffer[offset++];
      if (marker === 0xd9 || marker === 0xda) break;
      if (marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (offset + 2 > buffer.length) break;
      const length = buffer.readUInt16BE(offset);
      if (length < 2 || offset + length > buffer.length) break;
      if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker) && length >= 7) {
        const height = buffer.readUInt16BE(offset + 3);
        const width = buffer.readUInt16BE(offset + 5);
        if (width > 0 && height > 0) return { width, height };
      }
      offset += length;
    }
  }
  throw new Error(`Cannot read image dimensions: ${file}. Use a valid JPEG or PNG.`);
}

function requiredText(value, field, file) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`Missing or invalid "${field}" in ${file}`);
  }
  return value;
}

export async function generateAlbums({
  albumsDirectory = join(projectRoot, "assets", "images", "albums"),
  outputFile = join(projectRoot, "assets", "js", "albums.generated.js"),
} = {}) {
  const folders = (await readdir(albumsDirectory, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }));
  const albums = [];
  const ids = new Set();

  for (const folder of folders) {
    const directory = join(albumsDirectory, folder.name);
    const metadataFile = join(directory, "album.json");
    const metadata = JSON.parse(await readFile(metadataFile, "utf8"));
    if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
      throw new Error(`Invalid album metadata in ${metadataFile}`);
    }
    const id = requiredText(metadata.id, "id", metadataFile);
    const title = requiredText(metadata.title, "title", metadataFile);
    const description = requiredText(metadata.description, "description", metadataFile);
    if (!/^[a-z][a-z0-9-]*$/.test(id) || ids.has(id)) {
      throw new Error(`Invalid or duplicate album id "${id}" in ${metadataFile}`);
    }
    if (metadata.order !== undefined && !Number.isFinite(metadata.order)) {
      throw new Error(`Invalid album order in ${metadataFile}`);
    }
    if (metadata.open !== undefined && typeof metadata.open !== "boolean") {
      throw new Error(`Invalid album open flag in ${metadataFile}`);
    }
    if (metadata.label !== "photo" && metadata.label !== "image") {
      throw new Error(`Album label must be "photo" or "image" in ${metadataFile}`);
    }
    if (metadata.images !== undefined && (!metadata.images || typeof metadata.images !== "object" || Array.isArray(metadata.images))) {
      throw new Error(`Invalid image descriptions in ${metadataFile}`);
    }
    ids.add(id);

    const entries = await readdir(directory, { withFileTypes: true });
    const photos = [];
    for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, "en", { numeric: true }))) {
      if (entry.isDirectory()) throw new Error(`Nested album folders are not supported: ${join(directory, entry.name)}`);
      const extension = extname(entry.name).toLowerCase();
      if (otherImageExtensions.has(extension)) {
        throw new Error(`Unsupported image format: ${join(directory, entry.name)}. Convert it to JPEG or PNG.`);
      }
      if (!entry.isFile() || !supportedExtensions.has(extension)) continue;
      const file = join(directory, entry.name);
      const dimensions = imageDimensions(await readFile(file), file);
      const override = metadata.images?.[entry.name];
      const custom = override === undefined ? {} : override;
      if (!custom || typeof custom !== "object" || Array.isArray(custom)) {
        throw new Error(`Invalid image description for ${entry.name} in ${metadataFile}`);
      }
      const number = String(photos.length + 1).padStart(2, "0");
      const caption = custom.caption === undefined ? `${title} — ${number}` : requiredText(custom.caption, "caption", file);
      const alt = custom.alt === undefined ? `${title}, ${metadata.label} ${photos.length + 1}` : requiredText(custom.alt, "alt", file);
      photos.push({
        src: `../assets/images/albums/${encodeURIComponent(folder.name)}/${encodeURIComponent(entry.name)}`,
        alt,
        caption,
        ...dimensions,
      });
    }
    albums.push({ id, title, description, label: metadata.label, order: metadata.order ?? 100, open: metadata.open ?? false, photos });
  }

  albums.sort((a, b) => a.order - b.order);
  const source = `// Generated by scripts/generate-albums.mjs. Do not edit.\nconst journalAlbums = ${JSON.stringify(albums, null, 2)};\n`;
  await writeFile(outputFile, source, "utf8");
  return albums;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const albums = await generateAlbums();
  console.log(`Generated ${albums.length} albums and ${albums.reduce((total, album) => total + album.photos.length, 0)} photos.`);
}
