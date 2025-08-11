import Link from "next/link";
import { HeroTiles } from "@/components/HeroTiles";
import HeroHeader from "@/components/HeroHeader";

export default function Page() {
  return (
    <div className="space-y-6">
      <HeroHeader
        title="City of Crane, Missouri"
        subtitle="Modern demo — mobile-friendly, accessible, and easy to keep updated."
        imageSrc="/header.jpg"
      />

      <section className="card p-6 md:p-10">
        {/* keep the Notice + tiles + sections as-is */}
        <div
          role="status"
          className="rounded-lg border border-[var(--color-accent-warm)]/50 bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-4 py-3"
        >
          <strong className="mr-2">Notice:</strong>
          Sidewalk project continues along Rose Ave.
        </div>

        <div className="mt-6">
          <HeroTiles />
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="section-alt p-5">
            <h2 className="text-lg font-semibold">News</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>
                <Link
                  className="text-[var(--color-accent-2)] hover:underline"
                  href="/news/boil-order-lifted"
                >
                  Boil Order Lifted
                </Link>{" "}
                • Jul 18
              </li>
              <li>
                <Link
                  className="text-[var(--color-accent-2)] hover:underline"
                  href="/news/city-pool-extended-hours"
                >
                  City Pool Extended Hours
                </Link>{" "}
                • Jul 12
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/news" className="btn-secondary">
                View all news
              </Link>
            </div>
          </div>

          <div className="section-alt p-5">
            <h2 className="text-lg font-semibold">Upcoming Meetings</h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--color-muted)]">
              <li>
                <Link
                  className="text-[var(--color-accent-2)] hover:underline"
                  href="/events/board-of-aldermen-aug"
                >
                  Board of Aldermen
                </Link>{" "}
                • Mon, Aug 18, 6:30pm
              </li>
              <li>
                <Link
                  className="text-[var(--color-accent-2)] hover:underline"
                  href="/events/park-board-aug"
                >
                  Park Board
                </Link>{" "}
                • Thu, Aug 21, 5:00pm
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/calendar" className="btn-secondary">
                Open calendar
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt p-6 md:p-10">
        <h2 className="text-lg font-semibold">Quick Information</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm text-[var(--color-muted)]">
          <div className="card p-4">
            <div className="font-medium text-[var(--color-text)]">City Hall</div>
            <div>PO Box 17 · Crane, MO 65633</div>
            <div>(417) 723-5000</div>
            <div className="text-xs mt-1">Mon–Fri, 8:00 AM – 4:30 PM</div>
          </div>
          <div className="card p-4">
            <div className="font-medium text-[var(--color-text)]">Utilities</div>
            <div>Start/Stop Service • Billing</div>
            <div className="mt-2">
              <Link href="/utilities" className="btn-primary">
                Pay Utility Bill
              </Link>
            </div>
          </div>
          <div className="card p-4">
            <div className="font-medium text-[var(--color-text)]">Contact</div>
            <div>Questions or concerns?</div>
            <div className="mt-2">
              <Link href="/contact" className="btn">
                Contact City Hall
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
