import { AlertBar } from "@/components/AlertBar";
import { HeroTiles } from "@/components/HeroTiles";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="card p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-serif)" as any }}>
          City of Crane, Missouri
        </h1>
        <p className="text-[var(--color-muted)] mt-2">
          Official-style demo — mobile-friendly, accessible, and easy to maintain.
        </p>

        <div className="mt-6">
          <AlertBar text="Water service interruption planned on Maple St, Wed 10–2pm." />
          <HeroTiles />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="card p-5">
            <h2 className="text-lg font-semibold">News</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li><Link className="text-[var(--color-accent-2)] hover:underline" href="/news/city-pool-extended-hours">City Pool Extended Hours</Link> • Jul 14</li>
              <li><Link className="text-[var(--color-accent-2)] hover:underline" href="/news/public-hearing-7-14-25">Public Hearing Announcement</Link> • Jul 13</li>
            </ul>
          </div>
          <div className="card p-5">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li><Link className="text-[var(--color-accent-2)] hover:underline" href="/events/board-of-aldermen-aug">Board of Aldermen</Link> • Mon, Aug 18, 6:30pm</li>
              <li><Link className="text-[var(--color-accent-2)] hover:underline" href="/events/park-board-aug">Park Board</Link> • Thu, Aug 21, 5:00pm</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
