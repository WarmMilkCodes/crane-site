type AlertVariant = "gold" | "blue" | "red";

export function AlertBar({
  text,
  variant = "gold",
}: {
  text?: string;
  variant?: AlertVariant;
}) {
  if (!text) return null;

  const variantClasses: Record<AlertVariant, string> = {
    gold: "border-[var(--color-gold-600)] bg-[var(--color-gold-600)] text-white",
    blue: "border-[var(--color-accent)] bg-[var(--color-accent)] text-white",
    red: "border-[var(--color-danger)] bg-[var(--color-danger)] text-white",
  };

  return (
    <div role="status" className={`rounded-lg px-4 py-3 ${variantClasses[variant]}`}>
      <strong className="mr-2">Notice:</strong>
      {text}
    </div>
  );
}
