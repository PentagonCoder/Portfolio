// About.jsx
export default function About() {
  return (
    <section id="about" className="grid gap-8 py-16 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">A little about me</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Building the systems behind great experiences.</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">I’m Harsh Sharma, a backend developer passionate about secure APIs, Docker and Linux deployments, and algorithmic problem-solving. I enjoy taking a complex requirement and making it feel simple for the person using it.</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[['Node.js', 'APIs & services'], ['React', 'Practical interfaces'], ['MongoDB', 'Flexible data'], ['Docker', 'Reliable delivery']].map(([name, detail]) => <div key={name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><p className="text-lg font-bold text-slate-900">{name}</p><p className="mt-1 text-sm text-slate-500">{detail}</p></div>)}
      </div>
    </section>
  );
}
