import { notFound } from "next/navigation";

const db: Record<string, { title: string; body: string; date: string }> = {
  "city-pool-extended-hours": {
    title: "Pool Hours Extended",
    date: "2025-07-14",
    body: "We are excited to announce that the Crane Public Pool will be extending its hours through the remainder of the season. On Mondays and Tuesdays our new hours will from 12:00 PM - 8:00 PM.",
  },
  "public-hearing-7-14-25": {
    title: "Public Hearing Announcement",
    date: "2025-07-13",
    body: "Join us Monday, July 14, at 6:30 PM at the Crane Fire Department Training Room (106 N. Commerce St.) for a public hearing on two CDBG grant applications to improve our ballfield complex and city park.\nPark improvements: New pavilion, playground, picnic areas, ADA paths\nBallfield Improvements: ADA upgrades, new lighting, seating, bathrooms, and safety updates\n\nEach project totals $450,000, with $400,000 requested from CDBG and a local math from the city. These projects will benefit over 64% low-to-moderate income residents.\nWe need your input to reflect the community's priorities!"
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
