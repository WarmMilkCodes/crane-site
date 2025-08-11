import { notFound } from "next/navigation";

const db: Record<string, { title: string; body: string; date: string }> = {
  "boil-order-lifted": {
    title: "Boil Order Lifted",
    date: "2025-07-18",
    body: "The precautionary boil order has been lifted following satisfactory test results. Thank you for your patience.",
  },
  "city-pool-extended-hours": {
    title: "City Pool Extended Hours",
    date: "2025-07-12",
    body: "Due to heat advisories, the pool will remain open until 9:00 PM this week. Regular admission applies.",
  },
};

export default function Post({ params }: { params: { slug: string } }) {
  const post = db[params.slug];
  if (!post) return notFound();

  return (
    <article className="card p-6 md:p-8 prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <p className="text-sm text-white/60">{new Date(post.date).toLocaleString()}</p>
      <p>{post.body}</p>
    </article>
  );
}
