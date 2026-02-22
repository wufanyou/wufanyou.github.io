import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "src", "data", "citations.json");

const SCHOLAR_USER_ID = "C8WYCTAAAAAJ";

async function fetchCitations() {
  try {
    const url = `https://scholar.google.com/citations?user=${SCHOLAR_USER_ID}&hl=en`;
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!res.ok) {
      console.warn(`Google Scholar returned status ${res.status}, using cached data`);
      return;
    }

    const html = await res.text();

    // Try to extract citation count from the profile page
    // The total citations are in a table cell after "Citations"
    const citMatch = html.match(
      /<td class="gsc_rsb_std">(\d+)<\/td>/
    );

    if (citMatch) {
      const total = parseInt(citMatch[1], 10);
      const data = {
        total,
        fetchedAt: new Date().toISOString(),
      };
      fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
      console.log(`Fetched citation count: ${total}`);
    } else {
      console.warn("Could not parse citation count from Google Scholar page");
    }
  } catch (err) {
    console.warn("Failed to fetch citations:", err.message);
    console.warn("Using cached citation data");
  }
}

fetchCitations();
