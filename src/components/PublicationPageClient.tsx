"use client";

import { useState, useMemo } from "react";
import type { Publication } from "@/lib/bibtex";
import PublicationEntry from "@/components/PublicationEntry";
import CategoryIcon from "@/components/CategoryIcon";

interface SymbolLegendItem {
  key: string;
  label: string;
}

interface Props {
  publications: Publication[];
  symbolLegend: SymbolLegendItem[];
}

export default function PublicationPageClient({
  publications,
  symbolLegend,
}: Props) {
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set());
  const [selectedDomains, setSelectedDomains] = useState<Set<string>>(
    new Set()
  );
  const [filtersOpen, setFiltersOpen] = useState(false);

  const availableYears = useMemo(() => {
    const years = [...new Set(publications.map((p) => p.year))];
    return years.sort((a, b) => Number(b) - Number(a));
  }, [publications]);

  const availableDomains = useMemo(() => {
    const domainKeys = new Set(publications.map((p) => p.emoji));
    return symbolLegend.filter((s) => domainKeys.has(s.key));
  }, [publications, symbolLegend]);

  const filtered = useMemo(() => {
    return publications.filter((pub) => {
      const yearOk =
        selectedYears.size === 0 || selectedYears.has(pub.year);
      const domainOk =
        selectedDomains.size === 0 || selectedDomains.has(pub.emoji);
      return yearOk && domainOk;
    });
  }, [publications, selectedYears, selectedDomains]);

  const groupedByYear = useMemo(() => {
    const grouped: Record<string, Publication[]> = {};
    for (const pub of filtered) {
      if (!grouped[pub.year]) grouped[pub.year] = [];
      grouped[pub.year].push(pub);
    }
    const years = Object.keys(grouped).sort(
      (a, b) => Number(b) - Number(a)
    );
    return { grouped, years };
  }, [filtered]);

  function toggleYear(year: string) {
    setSelectedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  }

  function toggleDomain(key: string) {
    setSelectedDomains((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function clearFilters() {
    setSelectedYears(new Set());
    setSelectedDomains(new Set());
  }

  const hasActiveFilters = selectedYears.size > 0 || selectedDomains.size > 0;

  const filterContent = (
    <>
      <div className="filter-section">
        <h3 className="filter-section-header">Year</h3>
        {availableYears.map((year) => (
          <label key={year} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedYears.has(year)}
              onChange={() => toggleYear(year)}
            />
            <span>{year}</span>
          </label>
        ))}
      </div>

      <div className="filter-section">
        <h3 className="filter-section-header">Domain</h3>
        {availableDomains.map((s) => (
          <label key={s.key} className="filter-checkbox">
            <input
              type="checkbox"
              checked={selectedDomains.has(s.key)}
              onChange={() => toggleDomain(s.key)}
            />
            <span className="inline-flex items-center gap-1">
              <CategoryIcon category={s.key} />
              {s.label}
            </span>
          </label>
        ))}
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-sm mt-2 text-[var(--global-theme-color)] hover:underline cursor-pointer"
        >
          Clear filters
        </button>
      )}
    </>
  );

  return (
    <div>
      {/* Mobile filter toggle */}
      <div className="sm:hidden mb-4">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Publication</h1>
        </header>
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="text-sm font-mono px-3 py-1.5 border border-gray-300 rounded-md hover:border-[var(--global-theme-color)] hover:text-[var(--global-theme-color)] transition-colors cursor-pointer"
        >
          {filtersOpen ? "Hide filters" : "Show filters"}
          {hasActiveFilters && ` (${selectedYears.size + selectedDomains.size})`}
        </button>
        {filtersOpen && (
          <div className="mt-3 p-3 border border-gray-200 rounded-md">
            {filterContent}
          </div>
        )}
      </div>

      <article className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="filter-sidebar hidden sm:block w-48 flex-shrink-0">
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">Publication</h1>
          </header>
          {filterContent}
        </aside>

        {/* Publications list */}
        <div className="flex-1 min-w-0">
          <div className="publications">
            {groupedByYear.years.map((year) => (
              <div key={year}>
                <h2 className="year-header">{year}</h2>
                <ol className="list-none p-0 mt-8">
                  {groupedByYear.grouped[year].map((pub) => (
                    <PublicationEntry key={pub.key} pub={pub} />
                  ))}
                </ol>
              </div>
            ))}

            {filtered.length === 0 && (
              <p className="text-gray-500 text-sm mt-4">
                No publications match the selected filters.
              </p>
            )}

            <h2 className="year-header">Symbol</h2>
            <div className="mt-8 grid grid-cols-2 gap-2">
              {symbolLegend.map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <CategoryIcon category={s.key} /> {s.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
