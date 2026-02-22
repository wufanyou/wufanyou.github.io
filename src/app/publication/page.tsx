import { getAllPublications } from "@/lib/bibtex";
import PublicationPageClient from "@/components/PublicationPageClient";

const symbolLegend = [
  { key: "tree", label: "Forestry" },
  { key: "traffic", label: "Transportation" },
  { key: "camera", label: "Computer Vision" },
  { key: "web", label: "Complex Networks" },
  { key: "search", label: "Information Retrieval" },
  { key: "pen", label: "Natural Language Processing" },
];

export default function PublicationPage() {
  const publications = getAllPublications();

  return (
    <PublicationPageClient
      publications={publications}
      symbolLegend={symbolLegend}
    />
  );
}
