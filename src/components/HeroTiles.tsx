import Link from "next/link";
import { Calendar, FileText, Megaphone, CreditCard } from "lucide-react";

export function HeroTiles() {
  const tiles = [
    { href: "/news", label: "News & Notices", icon: Megaphone },
    { href: "/calendar", label: "Calendar Events", icon: Calendar },
    { href: "/documents", label: "Agendas & Minutes", icon: FileText },
    { href: "/utilities", label: "Pay Utility Bill", icon: CreditCard },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {tiles.map((t) => (
        <Link key={t.href} href={t.href} className="link-tile">
          <span className="flex items-center gap-3">
            <t.icon className="text-[var(--color-accent-2)]" size={18} />
            <span className="font-medium">{t.label}</span>
          </span>
          <span aria-hidden="true" className="text-[var(--color-muted)]">
            ›
          </span>
        </Link>
      ))}
    </div>
  );
}
