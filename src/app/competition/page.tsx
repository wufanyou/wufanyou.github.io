import competitions from "@/data/competitions.json";
import CategoryIcon from "@/components/CategoryIcon";

interface Competition {
  year: number;
  emoji: string;
  title: string;
  link: string;
  rank: string;
  prize: string | null;
  solution_link: string | null;
}

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
          {years.map((year) => (
            <div key={year}>
              <h2 className="year-header">{year}</h2>
              <div className="mt-8">
                {data
                  .filter((c) => c.year === year)
                  .map((c, i) => (
                    <div key={i} className="pub-card mb-2">
                      <div className="flex gap-2">
                        <div className="w-10 text-center flex-shrink-0 flex items-start justify-center pt-1">
                          <CategoryIcon category={c.emoji} />
                        </div>
                        <div className="flex-1">
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
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
