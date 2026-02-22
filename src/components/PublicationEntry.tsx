"use client";

import { useState } from "react";
import type { Publication } from "@/lib/bibtex";
import CategoryIcon from "@/components/CategoryIcon";

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <div className="pub-author text-sm">
      {authors.map((author, i) => {
        const isMe =
          author.includes("Fanyou Wu") || author.includes("Fanyou Wu");
        const separator = i < authors.length - 1 ? ", " : "";
        return (
          <span key={i}>
            {isMe ? <em>{author}</em> : author}
            {separator}
          </span>
        );
      })}
    </div>
  );
}

export default function PublicationEntry({ pub }: { pub: Publication }) {
  const [showBibtex, setShowBibtex] = useState(false);
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <li className="mb-0.5">
      <div className="pub-card">
        <div className="flex gap-2">
          <div className="w-10 text-center flex-shrink-0 flex items-start justify-center pt-1"><CategoryIcon category={pub.emoji} /></div>
          <div className="flex-1 min-w-0">
            <div className="pub-title">{pub.title}</div>
            <AuthorList authors={pub.authors} />
            <div className="text-sm text-gray-600 italic">
              {pub.venue} <span className="font-mono">{pub.year}</span>
            </div>

            <div className="pub-links mt-1">
              <a
                href="#"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBibtex(!showBibtex);
                }}
              >
                bibtex
              </a>
              {pub.abstract && (
                <a
                  href="#"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAbstract(!showAbstract);
                  }}
                >
                  abstract
                </a>
              )}
              {pub.arxiv && (
                <a
                  href={`http://arxiv.org/abs/${pub.arxiv}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arXiv
                </a>
              )}
              {pub.html && (
                <a href={pub.html} target="_blank" rel="noopener noreferrer">
                  HTML
                </a>
              )}
              {pub.pdf && (
                <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                  PDF
                </a>
              )}
              {pub.code && (
                <a href={pub.code} target="_blank" rel="noopener noreferrer">
                  Code
                </a>
              )}
            </div>

            <div className={`hidden-section ${showBibtex ? "open" : ""}`}>
              <pre>{pub.rawBibtex}</pre>
            </div>

            {pub.abstract && (
              <div className={`hidden-section ${showAbstract ? "open" : ""}`}>
                <p>{pub.abstract}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}
