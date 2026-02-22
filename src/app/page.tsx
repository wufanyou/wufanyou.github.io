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
        <div className="sm:float-right sm:w-[30%] ml-4 mb-4">
          <Image
            src="/assets/img/wu1297.jpg"
            alt="Fanyou Wu"
            width={300}
            height={300}
            className="rounded shadow-sm w-full"
          />
          <div className="social-icons mt-2 flex justify-center gap-3">
            <a href="mailto:fanyou.wu@outlook.com" title="Email">
              <i className="fas fa-envelope fa-xs"></i>
            </a>
            <a
              href="https://orcid.org/0000-0002-4894-5738"
              target="_blank"
              rel="noopener noreferrer"
              title="ORCID"
            >
              <i className="ai ai-orcid fa-xs"></i>
            </a>
            <a
              href="https://scholar.google.com/citations?user=C8WYCTAAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Scholar"
            >
              <i className="ai ai-google-scholar fa-xs"></i>
            </a>
            <a
              href="https://github.com/wufanyou"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github fa-xs"></i>
            </a>
            <a href="/assets/pdf/Fanyou_Wu_Resume.pdf" target="_blank" title="Resume">
              <i className="ai ai-cv fa-xs"></i>
            </a>
          </div>
        </div>

        <div className="clearfix">
          <p>
            Applied Scientist II
            <br />
            PXT Central Science (PXTCS)
            <br />
            Amazon
          </p>

          <p>
            I am Fanyou Wu, and I am an Applied Scientist at Amazon PXT Central
            Science (PXTCS). I received my Ph.D. degree in Forestry from{" "}
            <a href="https://fnr.purdue.edu/">
              Department of Forestry and Natural Resources, Purdue University
            </a>{" "}
            (2021). Before attending Purdue, I received my master&apos;s degree from{" "}
            <a href="https://www.uef.fi/en/etusivu">University of Eastern Finland</a>{" "}
            (2018) and bachelor&apos;s degree from{" "}
            <a href="http://eng.njfu.edu.cn">Nanjing Forestry University</a> (2015)
            both in Wood Material Science. I was also an exchange student at the{" "}
            <a href="https://www.ubc.ca/">University of British Columbia</a> (2013).
          </p>

          <p>
            My research focuses on applying machine learning to human resource area.
            Attending machine learning related <a href="/competition">competitions</a>{" "}
            is my side interests, and I have won many championships and runners-up in
            machine learning related competitions and top conference competitions at
            KDD, IJCAI, NeurIPS, and CVPR.
          </p>
        </div>

        {/* News */}
        <div className="mt-8">
          <h2 className="text-2xl font-medium mb-3">News</h2>
          <table className="news-table w-full">
            <tbody>
              {news.filter((item) => item.show).map((item, i) => (
                <tr key={i}>
                  <th className="py-1">{item.date}</th>
                  <td
                    className="py-1"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Selected Publications */}
        <div className="publications mt-8">
          <h2 className="text-2xl font-medium mb-3">Selected publications</h2>
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
