import presentations from "@/data/presentations.json";

export default function PresentationPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Presentation</h1>
      </header>

      <article>
        <div className="publications">
          <ul className="list-disc pl-6 space-y-1">
            {presentations.talks.map((talk, i) => (
              <li key={i} className={i === 0 ? "border-t border-[#e8e8e8] mt-4 pt-4" : ""}>
                <div className="flex gap-2">
                  <div className="flex-1">
                    {talk.link ? (
                      <a href={talk.link} target="_blank" rel="noopener noreferrer">
                        {talk.title}
                      </a>
                    ) : (
                      talk.title
                    )}
                    <div className="text-sm text-gray-600">
                      <span className="font-mono">{talk.date}</span>, {talk.venue}
                      {talk.slides && (
                        <>
                          ,{" "}
                          <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                            slides
                          </a>
                        </>
                      )}
                      {talk.video && (
                        <>
                          ,{" "}
                          <a href={talk.video} target="_blank" rel="noopener noreferrer">
                            video
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  {i === 0 ? (
                    <div className="w-16 text-center flex-shrink-0 flex items-center justify-center">
                      <span className="text-[#e8e8e8] font-bold text-lg">Talks</span>
                    </div>
                  ) : (
                    <div className="w-16 flex-shrink-0" />
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul className="list-disc pl-6 space-y-1">
            {presentations.posters.map((poster, i) => (
              <li key={i} className={i === 0 ? "border-t border-[#e8e8e8] mt-4 pt-4" : ""}>
                <div className="flex gap-2">
                  <div className="flex-1">{poster}</div>
                  {i === 0 ? (
                    <div className="w-16 text-center flex-shrink-0 flex items-center justify-center">
                      <span className="text-[#e8e8e8] font-bold text-lg">Posters</span>
                    </div>
                  ) : (
                    <div className="w-16 flex-shrink-0" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
