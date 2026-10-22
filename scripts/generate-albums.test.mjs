import assert from "node:assert/strict";
import { copyFile, mkdir, mkdtemp, readFile, rm, unlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";
import { generateAlbums } from "./generate-albums.mjs";

const jpeg = fileURLToPath(new URL("../assets/images/albums/chausey/01-navigation.jpg", import.meta.url));
const png = fileURLToPath(new URL("../assets/images/albums/journal-de-bord/01-essai3.png", import.meta.url));
const metadata = { id: "example", title: "An album", description: "Album description", label: "photo" };

async function fixture(t, overrides = {}) {
  const root = await mkdtemp(join(tmpdir(), "atscaf-albums-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const albumsDirectory = join(root, "albums");
  const directory = join(albumsDirectory, "example");
  await mkdir(directory, { recursive: true });
  const metadataFile = join(directory, "album.json");
  await writeFile(metadataFile, JSON.stringify({ ...metadata, ...overrides }));
  return { directory, metadataFile, albumsDirectory, outputFile: join(root, "albums.generated.js") };
}

test("discovers JPEG and PNG files, preserves dimensions, sorts naturally and encodes URLs", async (t) => {
  const paths = await fixture(t, {
    images: { "2-navigation.jpg": { alt: "A boat", caption: "A custom caption" } },
  });
  await copyFile(jpeg, join(paths.directory, "10-navigation.jpg"));
  await copyFile(jpeg, join(paths.directory, "2-navigation.jpg"));
  await copyFile(png, join(paths.directory, "11-photo #.PNG"));
  const [album] = await generateAlbums(paths);
  assert.equal(album.photos.length, 3);
  assert.equal(album.photos[0].caption, "A custom caption");
  assert.equal(album.photos[0].alt, "A boat");
  assert.equal(album.photos[0].width, 1920);
  assert.equal(album.photos[0].height, 1081);
  assert.match(album.photos[1].src, /10-navigation\.jpg$/);
  assert.match(album.photos[2].src, /11-photo%20%23\.PNG$/);
  assert.equal(album.photos[2].width, 1899);
  assert.equal(album.photos[2].height, 1920);
  const source = await readFile(paths.outputFile, "utf8");
  assert.equal(runInNewContext(`${source}\njournalAlbums;`)[0].photos.length, 3);
  await generateAlbums(paths);
  assert.equal(await readFile(paths.outputFile, "utf8"), source);
});

test("adding and removing photos or album folders requires no code or manifest edits", async (t) => {
  const paths = await fixture(t);
  await copyFile(jpeg, join(paths.directory, "01.jpg"));
  assert.equal((await generateAlbums(paths))[0].photos.length, 1);
  await copyFile(png, join(paths.directory, "02.png"));
  assert.equal((await generateAlbums(paths))[0].photos.length, 2);
  await unlink(join(paths.directory, "01.jpg"));
  assert.equal((await generateAlbums(paths))[0].photos.length, 1);
  const second = join(paths.albumsDirectory, "new-album");
  await mkdir(second);
  await writeFile(join(second, "album.json"), JSON.stringify({ ...metadata, id: "new-album", order: 0 }));
  const albums = await generateAlbums(paths);
  assert.equal(albums.length, 2);
  assert.equal(albums[0].id, "new-album");
  assert.equal(albums[0].photos.length, 0);
});

test("invalid images fail explicitly without overwriting the previous inventory", async (t) => {
  const paths = await fixture(t);
  await generateAlbums(paths);
  const previous = await readFile(paths.outputFile, "utf8");
  await writeFile(join(paths.directory, "broken.jpg"), "not a picture");
  await assert.rejects(generateAlbums(paths), /Cannot read image dimensions.*broken\.jpg/);
  assert.equal(await readFile(paths.outputFile, "utf8"), previous);
});

test("missing album metadata is an explicit error", async (t) => {
  const paths = await fixture(t);
  await unlink(paths.metadataFile);
  await assert.rejects(generateAlbums(paths), /ENOENT.*album\.json/);
});

test("duplicate album anchors are rejected", async (t) => {
  const paths = await fixture(t);
  const second = join(paths.albumsDirectory, "second");
  await mkdir(second);
  await writeFile(join(second, "album.json"), JSON.stringify(metadata));
  await assert.rejects(generateAlbums(paths), /duplicate album id/);
});

test("unsupported image formats are reported rather than silently omitted", async (t) => {
  const paths = await fixture(t);
  await writeFile(join(paths.directory, "photo.webp"), "unsupported");
  await assert.rejects(generateAlbums(paths), /Unsupported image format.*photo\.webp/);
});

test("invalid per-photo descriptions are explicit errors", async (t) => {
  const paths = await fixture(t, { images: { "01.jpg": null } });
  await copyFile(jpeg, join(paths.directory, "01.jpg"));
  await assert.rejects(generateAlbums(paths), /Invalid image description/);
});
