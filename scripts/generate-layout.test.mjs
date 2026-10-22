import assert from "node:assert/strict";
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { generateLayout } from "./generate-layout.mjs";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), "atscaf-layout-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  await mkdir(join(root, "partials"));
  await mkdir(join(root, "pages"));
  for (const name of ["header", "footer"]) {
    await copyFile(join(projectRoot, "partials", `${name}.html`), join(root, "partials", `${name}.html`));
  }
  for (const file of ["index.html", "pages/croisiere.html", "pages/mentions-legales.html"]) {
    await writeFile(join(root, file), `<!doctype html>
<html lang="fr"><body>
  <!-- shared:header:start -->
  <!-- shared:header:end -->
  <main>Unique content: ${file}</main>
  <!-- shared:footer:start -->
  <!-- shared:footer:end -->
</body></html>
`);
  }
  return { projectDirectory: root };
}

test("generates static layouts with relative URLs, home anchors and active page indicators", async (t) => {
  const options = await fixture(t);
  const pages = await generateLayout(options);
  assert.equal(pages.length, 3);
  const home = await readFile(join(options.projectDirectory, "index.html"), "utf8");
  assert.match(home, /class="brand" href="#accueil"/);
  assert.match(home, /href="#club"/);
  assert.match(home, /href="#adherer"/);
  assert.match(home, /src="assets\/images\/outils\/ffv\.jpg"/);
  assert.doesNotMatch(home, /aria-current="page"/);
  const cruise = await readFile(join(options.projectDirectory, "pages", "croisiere.html"), "utf8");
  assert.match(cruise, /href="croisiere\.html" aria-current="page"/);
  assert.match(cruise, /href="\.\.\/index\.html#club"/);
  assert.match(cruise, /src="\.\.\/assets\/images\/outils\/ffv\.jpg"/);
  assert.match(cruise, /href="https:\/\/www\.windguru\.cz\/112"/);
  assert.match(cruise, /href="mailto:atscaf\.voile\.paris@gmail\.com"/);
  assert.match(cruise, /Unique content: pages\/croisiere\.html/);
  const legal = await readFile(join(options.projectDirectory, "pages", "mentions-legales.html"), "utf8");
  assert.match(legal, /href="mentions-legales\.html" aria-current="page"/);
  await generateLayout(options);
  assert.equal(await readFile(join(options.projectDirectory, "pages", "croisiere.html"), "utf8"), cruise);
});

test("editing one partial updates every page without duplicating markup", async (t) => {
  const options = await fixture(t);
  await generateLayout(options);
  const partial = join(options.projectDirectory, "partials", "footer.html");
  const footer = await readFile(partial, "utf8");
  await writeFile(partial, footer.replace("Les outils du navigateur", "Outils partages"));
  const pages = await generateLayout(options);
  for (const page of pages) {
    const html = await readFile(join(options.projectDirectory, page), "utf8");
    assert.equal([...html.matchAll(/<header class="site-header">/g)].length, 1);
    assert.equal([...html.matchAll(/<footer id="contact">/g)].length, 1);
    assert.match(html, /Outils partages/);
  }
});

test("invalid page markers fail before changing any generated page", async (t) => {
  const options = await fixture(t);
  await generateLayout(options);
  const homeFile = join(options.projectDirectory, "index.html");
  const before = await readFile(homeFile, "utf8");
  const invalidFile = join(options.projectDirectory, "pages", "croisiere.html");
  const invalid = await readFile(invalidFile, "utf8");
  await writeFile(invalidFile, invalid.replace("<!-- shared:header:start -->", "<!-- missing -->"));
  await assert.rejects(generateLayout(options), /Expected one shared header block/);
  assert.equal(await readFile(homeFile, "utf8"), before);
});
