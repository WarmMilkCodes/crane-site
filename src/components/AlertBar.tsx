export function AlertBar({ text }: { text?: string }) {
  if (!text) return null;

  return (
    <div
      role="status"
      className="rounded-lg border border-[var(--color-accent-warm)]/50 bg-[var(--color-accent-warm)]/10 text-[var(--color-accent-warm)] px-4 py-3"
    >
      <strong className="mr-2">Notice:</strong>
      {text}
    </div>
  );
}
