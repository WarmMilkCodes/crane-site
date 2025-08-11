export const metadata = { title: "Contact — City of Crane (Demo)" };

export default function ContactPage() {
  return (
    <section className="card p-6 md:p-8 max-w-2xl">
      <h1 className="text-xl md:text-2xl font-semibold">Contact City Hall</h1>

      <form className="mt-6 space-y-3" action="mailto:clerk@crane-mo.com" method="post" encType="text/plain">
        <input required name="name" placeholder="Your name" className="card px-3 py-2 w-full" />
        <input required type="email" name="email" placeholder="Email" className="card px-3 py-2 w-full" />
        <textarea required name="message" placeholder="How can we help?" rows={6} className="card px-3 py-2 w-full" />
        <button className="btn-primary">Send</button>
      </form>

      <p className="text-xs text-white/50 mt-3">Demo form — wire to Resend/Mailgun later.</p>
    </section>
  );
}
