import competitions from "@/data/competitions.json";
import CategoryIcon from "@/components/CategoryIcon";

interface Competition {
  year: number;
  emoji: string | null;
  title: string;
  link: string;
  rank: string;
  prize: string | null;
  solution_link: string | null;
}

const ICON_SIZE = 40;
const ICON_GAP = ICON_SIZE / 4;

export default function CompetitionPage() {
  const data = competitions as Competition[];
  const years = [...new Set(data.map((c) => c.year))].sort((a, b) => b - a);

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Competition</h1>
      </header>

      <article>
        <div className="publications">
          {years.map((year) => {
            const items = data.filter((c) => c.year === year);
            return (
              <div key={year}>
                {items.map((c, i) => (
                  <div key={i} className={`pub-card mb-2 ${i === 0 ? "border-t border-[#e8e8e8] mt-4 pt-4" : ""}`}>
                    <div className="flex items-center" style={{ gap: `${ICON_GAP}px` }}>
                      <div className="flex-shrink-0" style={{ width: `${ICON_SIZE}px`, height: `${ICON_SIZE}px` }}>
                        <CategoryIcon category={c.emoji} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold">
                          <a
                            href={c.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {c.title}
                          </a>
                        </div>
                        <div className="font-bold italic">
                          <span className="font-mono">{c.rank}</span>
                          {c.prize && <>, {c.prize}</>}
                          {c.solution_link && (
                            <>
                              <span className="inline-block mx-2 border-l-2 border-gray-400 h-4 align-middle" />
                              <a
                                href={c.solution_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="not-italic font-bold"
                              >
                                solution
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                      {i === 0 ? (
                        <div className="w-12 text-center flex-shrink-0 flex items-center justify-center">
                          <span className="text-[#e8e8e8] font-bold text-lg">{year}</span>
                        </div>
                      ) : (
                        <div className="w-12 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </article>
    </div>
  );
}
