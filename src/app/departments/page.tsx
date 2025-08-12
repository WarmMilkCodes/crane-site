import Link from "next/link";
import { getDepartments } from "@/data/departments";

export const metadata = { title: "Departments — City of Crane (Demo)" };

export default function DepartmentsPage() {
  const departments = getDepartments();

  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Departments</h1>
      <p className="text-[var(--color-muted)] mt-2">
        Contact information and responsibilities for city departments and offices.
      </p>

      <nav aria-label="Departments" className="mt-4">
        <ul className="flex flex-wrap gap-2 text-sm">
          {departments.map((d) => (
            <li key={d.slug}>
              <a className="btn" href={`#${d.slug}`}>{d.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {departments.map((d) => (
          <article key={d.slug} id={d.slug} className="section-alt p-5">
            <header className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{d.name}</h2>
              <Link href={`/departments/${d.slug}`} className="btn-secondary whitespace-nowrap">
                View details
              </Link>
            </header>

            <p className="mt-2 text-sm text-[var(--color-muted)]">{d.summary}</p>

            <dl className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              {d.phone && (
                <div className="card p-3">
                  <dt className="font-medium">Phone</dt>
                  <dd><a href={`tel:${d.phone.replace(/[^\d]/g, "")}`} className="hover:underline">{d.phone}</a></dd>
                </div>
              )}
              {d.email && (
                <div className="card p-3">
                  <dt className="font-medium">Email</dt>
                  <dd><a href={`mailto:${d.email}`} className="hover:underline">{d.email}</a></dd>
                </div>
              )}
              {d.hours && (
                <div className="card p-3">
                  <dt className="font-medium">Hours</dt>
                  <dd>{d.hours}</dd>
                </div>
              )}
              {d.address && (
                <div className="card p-3">
                  <dt className="font-medium">Address</dt>
                  <dd>{d.address}</dd>
                </div>
              )}
              {d.notes && (
                <div className="card p-3 sm:col-span-2">
                  <dt className="font-medium">Notes</dt>
                  <dd>{d.notes}</dd>
                </div>
              )}
            </dl>
          </article>
        ))}
      </div>

      <p className="text-xs text-[var(--color-muted)] mt-6">
        Demo content. Please verify information with City Hall before publishing.
      </p>
    </section>
  );
}
