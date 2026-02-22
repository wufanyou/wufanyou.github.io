import fs from "fs";
import path from "path";

export interface Publication {
  key: string;
  type: string;
  title: string;
  author: string;
  authors: string[];
  year: string;
  journal?: string;
  booktitle?: string;
  venue: string;
  doi?: string;
  arxiv?: string;
  html?: string;
  pdf?: string;
  code?: string;
  emoji: string;
  selected: boolean;
  abstract?: string;
  volume?: string;
  number?: string;
  pages?: string;
  rawBibtex: string;
}


function parseField(content: string, field: string): string | undefined {
  const regex = new RegExp(
    `${field}\\s*=\\s*\\{([^}]*)\\}`,
    "i"
  );
  const match = content.match(regex);
  return match ? match[1].trim() : undefined;
}

function parseAuthors(authorStr: string): string[] {
  return authorStr.split(" and ").map((a) => {
    const parts = a.trim().split(",").map((p) => p.trim());
    if (parts.length === 2) {
      return `${parts[1]} ${parts[0]}`;
    }
    return a.trim();
  });
}

function buildCleanBibtex(key: string, type: string, content: string): string {
  const fields = [
    "title",
    "author",
    "journal",
    "booktitle",
    "year",
    "doi",
    "volume",
    "number",
    "pages",
    "publisher",
    "editor",
    "series",
    "month",
    "issn",
    "arxiv",
  ];

  const lines: string[] = [];
  for (const field of fields) {
    const val = parseField(content, field);
    if (val) {
      lines.push(`  ${field} = {${val}}`);
    }
  }

  return `@${type}{${key},\n${lines.join(",\n")}\n}`;
}

export function parsePublications(): Publication[] {
  const bibPath = path.join(process.cwd(), "src/data/publications.bib");
  const raw = fs.readFileSync(bibPath, "utf-8");

  const entries: Publication[] = [];
  const entryRegex = /@(\w+)\s*\{([^,]+),([^@]*)/g;
  let match;

  while ((match = entryRegex.exec(raw)) !== null) {
    const type = match[1].toLowerCase();
    const key = match[2].trim();
    const content = match[3];

    const title = parseField(content, "title") || "";
    const authorStr = parseField(content, "author") || "";
    const year = parseField(content, "year") || "";
    const journal = parseField(content, "journal");
    const booktitle = parseField(content, "booktitle");
    const emojiKey = parseField(content, "emoji") || "";
    const selectedStr = parseField(content, "selected") || "false";
    const abstract = parseField(content, "abstract");

    entries.push({
      key,
      type,
      title,
      author: authorStr,
      authors: parseAuthors(authorStr),
      year,
      journal,
      booktitle,
      venue: journal || booktitle || "",
      doi: parseField(content, "doi"),
      arxiv: parseField(content, "arxiv"),
      html: parseField(content, "html"),
      pdf: parseField(content, "pdf"),
      code: parseField(content, "code"),
      emoji: emojiKey,
      selected: selectedStr === "true",
      abstract,
      volume: parseField(content, "volume"),
      number: parseField(content, "number"),
      pages: parseField(content, "pages"),
      rawBibtex: buildCleanBibtex(key, type, content),
    });
  }

  return entries;
}

export function getPublicationsByYear(): Record<string, Publication[]> {
  const pubs = parsePublications();
  const grouped: Record<string, Publication[]> = {};
  for (const pub of pubs) {
    if (!grouped[pub.year]) grouped[pub.year] = [];
    grouped[pub.year].push(pub);
  }
  return grouped;
}

export function getSelectedPublications(): Publication[] {
  return parsePublications().filter((p) => p.selected);
}
