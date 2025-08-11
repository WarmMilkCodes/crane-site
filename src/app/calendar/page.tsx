import Link from "next/link";

const events = [
  { slug: "board-of-aldermen-aug", title: "Board of Aldermen", date: "2025-08-18T18:30:00", location: "Fire Station Training Room" },
  { slug: "park-board-aug", title: "Park Board", date: "2025-08-21T17:00:00", location: "City Hall" },
];

export default function CalendarPage() {
  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Calendar</h1>
      <ul className="mt-6 space-y-3">
        {events.map(e => (
          <li key={e.slug} className="link-tile !p-4">
            <div>
              <div className="font-medium"><Link href={`/events/${e.slug}`} className="hover:underline">{e.title}</Link></div>
              <div className="text-sm text-white/60">
                {new Date(e.date).toLocaleString()} • {e.location}
              </div>
            </div>
            <span aria-hidden>›</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
