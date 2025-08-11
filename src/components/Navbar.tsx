"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const links = [
  { href: "/news", label: "News" },
  { href: "/calendar", label: "Calendar" },
  { href: "/documents", label: "Documents" },
  { href: "/departments", label: "Departments" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b border-white/10 bg-[var(--color-surface)]/70 backdrop-blur supports-[backdrop-filter]:bg-[var(--color-surface)]/50">
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">
          City of <span className="text-[var(--color-accent)]">Crane</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>

        <button aria-label="Open menu" className="md:hidden btn" onClick={() => setOpen(v => !v)}>
          {open ? <X size={18}/> : <Menu size={18}/>}
        </button>
      </div>

      <div className={clsx("md:hidden border-t border-white/10", open ? "block" : "hidden")}>
        <div className="px-4 py-3 space-y-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="block link-tile !p-3" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
