import Link from "next/link";
import { notFound } from "next/navigation";
import { getDepartments, getDepartmentBySlug } from "../../../data/departments";

export async function generateStaticParams() {
  return getDepartments().map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const d = getDepartmentBySlug(params.slug);
  return { title: d ? `${d.name} — City of Crane (Demo)` : "Department — City of Crane (Demo)" };
}

function phoneHref(s?: string) {
  return s ? `tel:${(s.match(/\d+/g) || []).join("")}` : undefined;
}

export default function DepartmentDetail({ params }: { params: { slug: string } }) {
  const d = getDepartmentBySlug(params.slug);
  if (!d) return notFound();

  const ONE_YEAR_MS = 365 * 24 * 60 * 60 * 1000;
  const isStale = d.lastUpdated
    ? Date.now() - new Date(d.lastUpdated).getTime() > ONE_YEAR_MS
    : false;

  return (
    <section className="card p-6 md:p-8">
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-xl md:text-2xl font-semibold">{d.name}</h1>
        <Link href="/departments" className="btn">← Back to Departments</Link>
      </div>

      <p className="text-[var(--color-muted)] mt-2">{d.summary}</p>

      {isStale && (
        <div className="mt-4 rounded-lg border border-[var(--color-gold-600)] bg-[var(--color-gold-600)] text-white px-4 py-3">
          <strong className="mr-2">Heads up:</strong>
          Information on this page may be out of date. Please contact City Hall to confirm.
        </div>
      )}

      <dl className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
        {d.phone && (
          <div className="section-alt p-4">
            <dt className="font-medium">Phone</dt>
            <dd className="mt-1">
              <a href={phoneHref(d.phone)} className="hover:underline">{d.phone}</a>
            </dd>
          </div>
        )}
        {d.email && (
          <div className="section-alt p-4">
            <dt className="font-medium">Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${d.email}`} className="hover:underline">{d.email}</a>
            </dd>
          </div>
        )}
        {d.hours && (
          <div className="section-alt p-4">
            <dt className="font-medium">Hours</dt>
            <dd className="mt-1">{d.hours}</dd>
          </div>
        )}
        {d.address && (
          <div className="section-alt p-4">
            <dt className="font-medium">Address</dt>
            <dd className="mt-1">{d.address}</dd>
          </div>
        )}
        {d.notes && (
          <div className="section-alt p-4 md:col-span-2">
            <dt className="font-medium">Notes</dt>
            <dd className="mt-1">{d.notes}</dd>
          </div>
        )}
      </dl>

      {/* Members */}
      {d.members?.length ? (
        <div className="mt-8">
          <h2 className="text-lg font-semibold">Members</h2>
          <ul className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {d.members.map((m, i) => (
              <li key={i} className="section-alt p-4">
                <div className="font-medium">{m.name}</div>
                {m.title && <div className="text-sm text-[var(--color-muted)]">{m.title}</div>}
                {(m.district || m.term) && (
                  <div className="text-sm text-[var(--color-muted)]">
                    {m.district}{m.district && m.term ? " • " : ""}{m.term}
                  </div>
                )}
                {(m.email || m.phone) && (
                  <div className="mt-2 space-x-2">
                    {m.email && <a className="btn" href={`mailto:${m.email}`}>Email</a>}
                    {m.phone && <a className="btn" href={phoneHref(m.phone)}>Call</a>}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {d.lastUpdated && (
        <p className="text-xs text-[var(--color-muted)] mt-6">
          Last updated: {new Date(d.lastUpdated).toLocaleDateString()}
        </p>
      )}
    </section>
  );
}
