import { notFound } from "next/navigation";

const db: Record<string, { title: string; start: string; end?: string; location: string; body?: string }> = {
  "board-of-aldermen-aug": { title: "Board of Aldermen", start: "2025-08-18T18:30:00", location: "Fire Station Training Room", body: "Regular session." },
  "park-board-aug": { title: "Park Board", start: "2025-08-21T17:00:00", location: "City Hall" },
};

function googleCalendarUrl({ title, start, end, location }: { title: string; start: string; end?: string; location?: string }) {
  const fmt = (s: string) => s.replace(/[-:]/g, "").replace(/\.\d+Z$/, "Z");
  const s = fmt(new Date(start).toISOString());
  const e = fmt(new Date(end ?? new Date(new Date(start).getTime() + 60*60*1000)).toISOString());
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${s}/${e}`, location: location ?? "" });
  return `https://www.google.com/calendar/render?${params.toString()}`;
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const ev = db[params.slug];
  if (!ev) return notFound();

  return (
    <article className="card p-6 md:p-8 prose prose-invert max-w-none">
      <h1>{ev.title}</h1>
      <p className="text-sm text-white/60">{new Date(ev.start).toLocaleString()} • {ev.location}</p>
      <p>{ev.body ?? ""}</p>
      <p>
        <a className="btn-primary" href={googleCalendarUrl({ title: ev.title, start: ev.start, location: ev.location })} target="_blank" rel="noreferrer">Add to Google Calendar</a>
      </p>
    </article>
  );
}
