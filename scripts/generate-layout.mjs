import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, posix, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function renderPartial(template, page) {
  const withCurrentPage = template.replace(/<a\b[^>]*href="([^"]+)"[^>]*>/g, (tag, href) => {
    if ((page !== "index.html" && href === page) || (page === "index.html" && href === "index.html#club")) {
      return tag.replace(/>$/, ' aria-current="page">');
    }
    return tag;
  });
  return withCurrentPage.replace(/\b(href|src)="([^"]+)"/g, (attribute, name, value) => {
    if (/^(?:[a-z][a-z0-9+.-]*:|#|\/\/)/i.test(value)) return attribute;
    const [target, hash] = value.split("#", 2);
    if (page === "index.html" && target === "index.html") {
      return `${name}="${hash ? `#${hash}` : "#accueil"}"`;
    }
    const relative = posix.relative(posix.dirname(page), target);
    return `${name}="${relative}${hash === undefined ? "" : `#${hash}`}"`;
  });
}

export async function generateLayout({ projectDirectory = projectRoot } = {}) {
  const partials = {};
  for (const name of ["header", "footer"]) {
    const file = join(projectDirectory, "partials", `${name}.html`);
    const template = (await readFile(file, "utf8")).trim();
    if (!template.startsWith(`<${name} `) || !template.endsWith(`</${name}>`)) {
      throw new Error(`Invalid shared ${name} in ${file}`);
    }
    if (template.includes('aria-current="page"')) {
      throw new Error(`Do not hardcode the current page in ${file}; it is generated automatically.`);
    }
    partials[name] = template;
  }
  const pages = [
    "index.html",
    ...(await readdir(join(projectDirectory, "pages")))
      .filter((file) => file.endsWith(".html"))
      .sort()
      .map((file) => `pages/${file}`),
  ];
  const updates = [];
  for (const page of pages) {
    const file = join(projectDirectory, page);
    let content = await readFile(file, "utf8");
    for (const name of ["header", "footer"]) {
      const start = `  <!-- shared:${name}:start -->`;
      const end = `  <!-- shared:${name}:end -->`;
      const pattern = new RegExp(`${start}[\\s\\S]*?${end}`, "g");
      if (content.split(start).length !== 2 || content.split(end).length !== 2 || [...content.matchAll(pattern)].length !== 1) {
        throw new Error(`Expected one shared ${name} block in ${file}`);
      }
      const markup = renderPartial(partials[name], page).split("\n").map((line) => `  ${line}`).join("\n");
      content = content.replace(pattern, () => `${start}\n${markup}\n${end}`);
    }
    updates.push({ file, content });
  }
  for (const { file, content } of updates) await writeFile(file, content, "utf8");
  return pages;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const pages = await generateLayout();
  console.log(`Generated static headers and footers in ${pages.length} pages.`);
}
