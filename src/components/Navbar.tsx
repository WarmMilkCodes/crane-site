"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur border-b border-[var(--color-outline)] transition-shadow",
        scrolled && "shadow-[0_4px_12px_rgba(17,24,39,.06)]"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-wide">
          {/* tiny “seal” placeholder */}
          <span className="inline-block h-8 w-8 rounded-lg bg-[var(--color-accent)] ring-1 ring-black/5" />
          <span className="text-[var(--color-accent)]">City of Crane</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[var(--color-muted)] hover:text-[var(--color-text)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 border border-[var(--color-outline)] bg-white hover:bg-gray-50"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div className={clsx("md:hidden border-t border-[var(--color-outline)]", open ? "block" : "hidden")}>
        <div className="px-4 py-3 space-y-2 bg-[var(--color-surface)]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-lg border border-[var(--color-outline)] bg-white px-4 py-3 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
