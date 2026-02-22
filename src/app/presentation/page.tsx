import presentations from "@/data/presentations.json";

export default function PresentationPage() {
  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-light">Presentation</h1>
      </header>

      <article>
        <div className="publications">
          <h2 className="year-header">Talks</h2>
          <ul className="mt-8 list-disc pl-6 space-y-1">
            {presentations.talks.map((talk, i) => (
              <li key={i}>
                {talk.link ? (
                  <a href={talk.link} target="_blank" rel="noopener noreferrer">
                    {talk.title}
                  </a>
                ) : (
                  talk.title
                )}
                <div className="text-sm text-gray-600" style={{ listStyleType: "none" }}>
                  {talk.date}, {talk.venue}
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
              </li>
            ))}
          </ul>

          <h2 className="year-header">Posters</h2>
          <ul className="mt-8 list-disc pl-6 space-y-1">
            {presentations.posters.map((poster, i) => (
              <li key={i}>{poster}</li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
