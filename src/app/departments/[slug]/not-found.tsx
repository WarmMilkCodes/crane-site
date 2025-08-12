export default function NotFound() {
  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Department not found</h1>
      <p className="text-[var(--color-muted)] mt-2">Please return to the Departments page and try again.</p>
      <a href="/departments" className="btn mt-4">Back to Departments</a>
    </section>
  );
}