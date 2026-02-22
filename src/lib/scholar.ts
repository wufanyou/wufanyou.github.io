import fs from "fs";
import path from "path";

interface CitationData {
  total: number;
  fetchedAt: string;
}

export function getCitations(): CitationData {
  const filePath = path.join(process.cwd(), "src/data/citations.json");
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { total: 0, fetchedAt: "" };
  }
}
