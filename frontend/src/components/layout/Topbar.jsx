// src/components/layout/Topbar.jsx
export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-[#f7f8fc]/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-indigo-200">H</span><span className="font-bold tracking-tight text-slate-900">Harsh Sharma</span></a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex"><a className="transition hover:text-indigo-600" href="#about">About</a><a className="transition hover:text-indigo-600" href="#projects">Projects</a><a className="transition hover:text-indigo-600" href="#contact">Contact</a></nav>
        <a href="#contact" className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-600">Let&apos;s connect</a>
      </div>
    </header>
  );
}
