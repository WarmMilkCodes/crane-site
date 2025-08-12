type Doc = { title: string; type: "Agenda" | "Minutes" | "Ordinance"; year: number; url: string };
const docs: Doc[] = [
  { title: "Agenda — Jul 2025", type: "Agenda", year: 2025, url: "/docs/agenda-jul-2025.pdf" },
  { title: "Minutes — Jun 2025", type: "Minutes", year: 2025, url: "/docs/minutes-jun-2025.pdf" },
  { title: "Ordinance 2024-12", type: "Ordinance", year: 2024, url: "/docs/ord-2024-12.pdf" },
];

export default async function DocumentsPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string; year?: string; q?: string }>;
}) {
  const sp = await searchParams;

  const type = sp.type as Doc["type"] | undefined;
  const year = sp.year ? Number(sp.year) : undefined;
  const q = (sp.q ?? "").toLowerCase();

  const filtered = docs.filter((d) =>
    (!type || d.type === type) &&
    (!year || d.year === year) &&
    (!q || d.title.toLowerCase().includes(q))
  );

  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Documents</h1>

      <form className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <input name="q" placeholder="Search…" defaultValue={q} className="card px-3 py-2 outline-none" />
        <select name="type" defaultValue={type ?? ""} className="card px-3 py-2">
          <option value="">All Types</option>
          <option>Agenda</option>
          <option>Minutes</option>
          <option>Ordinance</option>
        </select>
        <select name="year" defaultValue={year ?? ""} className="card px-3 py-2">
          <option value="">All Years</option>
          {[2025, 2024].map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
        <button className="btn-primary sm:col-span-3 w-full sm:w-auto">Filter</button>
      </form>

      <ul className="mt-6 divide-y divide-[var(--color-outline)]">
        {filtered.map((d) => (
          <li key={d.url} className="py-3 flex items-center justify-between">
            <div>
              <div className="font-medium">{d.title}</div>
              <div className="text-xs text-[var(--color-muted)]">{d.type} • {d.year}</div>
            </div>
            <a className="btn" href={d.url} target="_blank" rel="noreferrer">Open PDF</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
