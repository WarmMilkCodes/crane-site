import { AlertBar } from "@/components/AlertBar";
import { HeroTiles } from "@/components/HeroTiles";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="card p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-semibold">City of Crane, Missouri</h1>
        <p className="text-white/70 mt-2">Modern demo — fast, mobile-first, ADA-friendly.</p>

        <div className="mt-6">
          <AlertBar text="Water service interruption planned on Maple St, Wed 10–2pm." />
          <HeroTiles />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card p-5">
            <h2 className="text-lg font-semibold">News</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/news/boil-order-lifted">Boil Order Lifted</Link> • Jul 18</li>
              <li><Link className="hover:underline" href="/news/city-pool-extended-hours">City Pool Extended Hours</Link> • Jul 12</li>
            </ul>
          </div>
          <div className="card p-5">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/events/board-of-aldermen-aug">Board of Aldermen</Link> • Mon, Aug 18, 6:30pm</li>
              <li><Link className="hover:underline" href="/events/park-board-aug">Park Board</Link> • Thu, Aug 21, 5:00pm</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
