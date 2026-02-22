import { getPublicationsByYear } from "@/lib/bibtex";
import PublicationEntry from "@/components/PublicationEntry";
import CategoryIcon from "@/components/CategoryIcon";

const symbolLegend = [
  { key: "tree", label: "Forestry" },
  { key: "traffic", label: "Transportation" },
  { key: "camera", label: "Computer Vision" },
  { key: "web", label: "Complex Networks" },
  { key: "search", label: "Information Retrieval" },
  { key: "pen", label: "Natural Language Processing" },
];

export default function PublicationPage() {
  const pubsByYear = getPublicationsByYear();
  const years = Object.keys(pubsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-light">Publication</h1>
      </header>

      <article>
        <div className="publications">
          {years.map((year) => (
            <div key={year}>
              <h2 className="year-header">{year}</h2>
              <ol className="list-none p-0 mt-8">
                {pubsByYear[year].map((pub) => (
                  <PublicationEntry key={pub.key} pub={pub} />
                ))}
              </ol>
            </div>
          ))}

          <h2 className="year-header">Symbol</h2>
          <div className="mt-8 grid grid-cols-2 gap-2">
            {symbolLegend.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <CategoryIcon category={s.key} /> {s.label}
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
