// Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 px-6 py-14 text-center text-white shadow-xl shadow-indigo-200 sm:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-200">Start a conversation</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Have an idea worth building?</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-100">Want to collaborate or just say hi? I&apos;d love to hear what you&apos;re working on.</p>
        <a href="mailto:your.email@example.com" className="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50">Email me <span aria-hidden="true">→</span></a>
      </div>
    </section>
  );
}
