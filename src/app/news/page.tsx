import Link from "next/link";

const posts = [
  { slug: "boil-order-lifted", title: "Boil Order Lifted", date: "2025-07-18" },
  { slug: "city-pool-extended-hours", title: "City Pool Extended Hours", date: "2025-07-12" },
];

export default function NewsPage() {
  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">News & Notices</h1>
      <ul className="mt-6 divide-y divide-white/10">
        {posts.map(p => (
          <li key={p.slug} className="py-3">
            <Link className="hover:underline" href={`/news/${p.slug}`}>{p.title}</Link>
            <div className="text-xs text-white/60">{new Date(p.date).toLocaleDateString()}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
