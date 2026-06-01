import Image from "next/image";
import { getSelectedPublications } from "@/lib/bibtex";
import PublicationEntry from "@/components/PublicationEntry";
import news from "@/data/news.json";

export default function Home() {
  const selectedPubs = getSelectedPublications();

  return (
    <div>
      <header className="mb-6">
        <h1 className="text-3xl font-light">
          Fanyou Wu | 吴凡优
        </h1>
      </header>

      <article>
        <div className="sm:float-right sm:w-[22%] sm:ml-6 mb-4">
          <Image
            src="/assets/img/wu1297.jpg"
            alt="Fanyou Wu"
            width={300}
            height={300}
            className="rounded shadow-sm w-full"
          />
          <div className="social-icons mt-2 flex flex-wrap justify-center gap-2">
            <a href="mailto:fanyou.wu@outlook.com" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://orcid.org/0000-0002-4894-5738"
              target="_blank"
              rel="noopener noreferrer"
              title="ORCID"
            >
              <i className="ai ai-orcid"></i>
            </a>
            <a
              href="https://scholar.google.com/citations?user=C8WYCTAAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
            >
              <i className="ai ai-google-scholar"></i>
            </a>
            <a
              href="https://github.com/wufanyou"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a href="/assets/pdf/Fanyou_Wu_Resume.pdf" target="_blank" title="Resume">
              <i className="ai ai-cv"></i>
            </a>
          </div>
        </div>

        <div className="clearfix leading-relaxed space-y-4">
          <p>
            Applied Scientist II
            <br />
            PXT ATACSE
            <br />
            Amazon
          </p>

          <p>
            Applied Scientist and tech leader at Amazon working at the intersection of
            large language models, reinforcement learning, and synthetic data.
          </p>

          <p>
            At Amazon PXT ATACSE I build LLM systems end to end: an internal HR chatbot
            combining retrieval-augmented generation (RAG) with an LLM agent, an audio
            role-playing agent that simulates realistic conversations to coach HR
            professionals, and a transformer-based job recommendation system trained on
            large-scale click-stream data. Alongside production work, I research dialog
            generation, hallucination, fairness, and role playing, with results
            published at ACL, EMNLP, and COLM.
          </p>

          <p>
            Earlier, I completed a PhD at{" "}
            <a href="https://fnr.purdue.edu/">Purdue University</a> and built deep
            learning systems for computer vision and reinforcement learning. I have a
            strong <a href="/competition">competition</a> track record, with first- and
            second-place finishes at KDD Cup, IJCAI, NeurIPS, and CVPR.
          </p>

          <p>
            Interests: LLM agents, reinforcement learning, synthetic data and
            environments, NLP, and applied ML research that ships to production.
          </p>
        </div>

        {/* News */}
        <div className="mt-8">
          <h2 className="section-heading">News</h2>
          <table className="news-table w-full">
            <tbody>
              {news.filter((item) => item.show).map((item, i) => (
                <tr key={i}>
                  <th className="py-2">{item.date}</th>
                  <td
                    className="py-2"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Publications */}
        <div className="publications mt-8">
          <h2 className="section-heading">Selected publications</h2>
          <ol className="list-none p-0">
            {selectedPubs.map((pub) => (
              <PublicationEntry key={pub.key} pub={pub} />
            ))}
          </ol>
        </div>
      </article>
    </div>
  );
}
