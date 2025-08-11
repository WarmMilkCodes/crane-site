const depts = [
  { name: "City Hall", phone: "(417) 723-5000", email: "clerk@crane-mo.com", hours: "Mon–Fri 8–4:30" },
  { name: "Police", phone: "(417) 723-5001", email: "police@crane-mo.com", hours: "24/7" },
];

export default function DepartmentsPage() {
  return (
    <section className="card p-6 md:p-8">
      <h1 className="text-xl md:text-2xl font-semibold">Departments</h1>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {depts.map(d => (
          <div key={d.name} className="card p-4">
            <div className="font-medium">{d.name}</div>
            <div className="text-sm text-white/70">{d.phone}</div>
            <div className="text-sm text-white/70">{d.email}</div>
            <div className="text-xs text-white/50 mt-1">{d.hours}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
