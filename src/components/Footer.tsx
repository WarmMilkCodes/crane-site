export function Footer() {
  return (
    <footer className="mt-10 border-t border-[var(--color-outline)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 py-8 text-sm text-[var(--color-muted)]">
        <div className="font-semibold text-[var(--color-text)]">City of Crane, Missouri</div>
        <div className="mt-1">PO Box 17 · Crane, MO 65633 · (417) 723-5000</div>
        <div className="mt-4 text-xs">
          Demo site for presentation purposes. Not an official website.
        </div>
      </div>
    </footer>
  );
}
