// Projects.jsx
const projects = [
  {
    title: "AI Assignment Generator",
    description: "Integrated Gemini API to auto-create assignments with classroom context.",
    link: "https://github.com/PentagonCoder/education-system",
  },  
  {
    title: "Workspace Dashboard",
    description: "React + Tailwind UI for project management with protected routes.",
    link: "https://github.com/PentagonCoder/Necllo",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="border-y border-slate-200 py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Selected work</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Projects with purpose.</h2></div><span className="rounded-full bg-indigo-50 px-3 py-1.5 text-sm font-semibold text-indigo-700">02 featured projects</span></div>
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <article key={idx} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
            <div className={`mb-8 grid h-11 w-11 place-items-center rounded-xl text-sm font-black ${idx === 0 ? "bg-violet-100 text-violet-700" : "bg-cyan-100 text-cyan-700"}`}>0{idx + 1}</div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">{proj.title}</h3>
            <p className="mt-3 leading-7 text-slate-600">{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer"
              className="mt-7 inline-flex font-bold text-indigo-600 transition group-hover:gap-2">
              View project <span className="ml-1">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
