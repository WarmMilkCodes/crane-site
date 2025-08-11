export function AlertBar({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <div role="status" className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 text-yellow-900 px-4 py-3">
      <strong className="mr-2">City Notice:</strong>{text}
    </div>
  );
}
