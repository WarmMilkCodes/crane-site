export function AlertBar({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div role="status" className="mb-4 rounded-xl border border-white/10 bg-red-500/10 text-red-300 px-4 py-3">
      <strong className="mr-2">Alert:</strong>{text}
    </div>
  );
}
