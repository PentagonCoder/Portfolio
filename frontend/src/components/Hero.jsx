// Hero.jsx
export default function Hero({ fullname }) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-white shadow-2xl shadow-indigo-200 sm:px-12 sm:py-24">
      <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-indigo-500/40 blur-3xl" />
      <div className="absolute -bottom-36 left-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative max-w-3xl">
        <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-100">AVAILABLE FOR NEW OPPORTUNITIES</p>
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Hi, I&apos;m {fullname || "Harsh"}. I turn ideas into reliable software.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Backend developer, React enthusiast, and problem solver focused on secure APIs and clean, useful interfaces.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-indigo-50">Explore my work <span aria-hidden="true">→</span></a>
          <a href="#contact" className="rounded-xl border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Let&apos;s talk</a>
        </div>
      </div>
    </section>
  );
}
