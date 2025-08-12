import { Calendar, FileText, Megaphone, CreditCard } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function HeroTiles() {
  const tiles = [
    { href: "/news", label: "News & Notices" },
    { href: "/calendar", label: "Calendar Events" },
    { href: "/documents", label: "Agendas & Minutes" },
    { href: "https://secure.cpteller.com/terminal/portal/?op=5ROuHHTbXPsj", label: "Pay Utility Bill" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {tiles.map((t) => (
        <Link key={t.href} href={t.href} className="link-tile">
          <span className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
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
