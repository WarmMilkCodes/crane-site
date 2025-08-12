import Link from "next/link";
import { getDocuments, getYearsFor } from "@/data/documents";
import type { DocCategory } from "@/data/documents";

type Search = { q?: string; category?: string; year?: string };

export const metadata = { title: "Documents — City of Crane (Demo)" };

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  const sp = await searchParams;

  const all = getDocuments();
  const q = (sp.q ?? "").toLowerCase().trim();

  const category = (sp.category as DocCategory | undefined) || undefined;

  // Ensure `year` is a number or undefined
  const year: number | undefined =
    sp.year && !Number.isNaN(Number(sp.year)) ? Number(sp.year) : undefined;

  const filtered = all.filter((d) =>
    (category == null || d.category === category) &&
    (year == null || d.year === year) &&
    (!q ||
      d.title.toLowerCase().includes(q) ||
      (d.description ?? "").toLowerCase().includes(q) ||
      (d.tags ?? []).some((t) => t.toLowerCase().includes(q)))
  );

  const years = getYearsFor(category);

  const groups: Record<string, typeof filtered> = {};
  filtered.forEach((d) => {
    const key =
      d.category === "Ordinance"
        ? "Code of Ordinances"
        : d.category === "Budget"
        ? "City Budget"
        : "City Audit Report";
    (groups[key] ||= []).push(d);
  });

  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Documents</h1>
      <p className="text-[var(--color-muted)] mt-2">
        Code of Ordinances, adopted budgets, and audit reports. PDFs open in a new tab.
      </p>

      {/* Filters */}
      <form className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-3">
        <input
          name="q"
          placeholder="Search titles or descriptions…"
          defaultValue={q}
          className="card px-3 py-2 outline-none sm:col-span-2"
        />
        <select name="category" defaultValue={category ?? ""} className="card px-3 py-2">
          <option value="">All Categories</option>
          <option value="Ordinance">Code of Ordinances</option>
          <option value="Budget">City Budget</option>
          <option value="Audit">City Audit Report</option>
        </select>
        <select name="year" defaultValue={year ?? ""} className="card px-3 py-2">
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        <button className="btn-primary sm:col-span-4 w-full sm:w-auto">Filter</button>
      </form>

      {/* Groups */}
      <div className="mt-6 space-y-6">
        {Object.entries(groups).map(([heading, docs]) => (
          <div key={heading} className="section-alt p-5">
            <h2 className="text-lg font-semibold">{heading}</h2>
            <ul className="mt-4 divide-y divide-[var(--color-outline)]">
              {docs
                .sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.title.localeCompare(b.title))
                .map((d) => (
                  <li key={d.id} className="py-3 flex items-start justify-between gap-4">
                    <div>
                      <div className="font-medium">
                        <a
                          href={d.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--color-accent)] hover:underline"
                        >
                          {d.title}
                        </a>
                      </div>
                      <div className="text-xs text-[var(--color-muted)]">
                        {(d.category === "Budget" || d.category === "Audit") && d.year
                          ? `${d.year} • `
                          : ""}
                        {d.description ?? ""}
                      </div>
                    </div>
                    <div className="shrink-0">
                      <a
                        href={d.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        aria-label={`Open ${d.title} PDF in new tab`}
                      >
                        Open PDF
                      </a>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="section-alt p-5">
            <p className="text-[var(--color-muted)]">No documents matched your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
