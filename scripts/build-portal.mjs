// Generates public/portal/index.html from content/portal.md + scripts/portal.template.html
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const root = process.cwd();
const contentPath  = path.join(root, "content", "portal.md");
const templatePath = path.join(root, "scripts", "portal.template.html");
const outPath      = path.join(root, "public", "portal", "index.html");

const { data } = matter(fs.readFileSync(contentPath, "utf8"));
const template = fs.readFileSync(templatePath, "utf8");

// Embed config safely inside a <script type="application/json"> block.
const json = JSON.stringify(data).replace(/</g, "\\u003c");
const html = template.replace("__PORTAL_CONFIG__", json);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log("[build-portal] wrote", path.relative(root, outPath), `(${html.length} bytes)`);
