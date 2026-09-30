// Renders scripts/resume/resume.html to public/assets/pdf/Fanyou_Wu_Resume.pdf.
// Usage: npm run resume  (first time: npx playwright install chromium)
import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(dir, "../../public/assets/pdf/Fanyou_Wu_Resume.pdf");
const updated = new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto("file://" + path.join(dir, "resume.html"));
await page.pdf({
  path: out,
  format: "Letter",
  printBackground: true,
  preferCSSPageSize: true,
  displayHeaderFooter: true,
  headerTemplate: "<span></span>",
  footerTemplate: `<div style="font-size:7pt;color:#888;width:100%;text-align:center">Fanyou Wu · Page <span class="pageNumber"></span> of <span class="totalPages"></span> · Updated ${updated}</div>`,
});
await browser.close();
console.log("Wrote " + path.relative(process.cwd(), out));
