// src/components/layout/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, ChartPieIcon, UsersIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ open, onToggle }) {
  const loc = useLocation();
  const nav = [
    { to: "/user/dashboard", label: "Overview", icon: ChartPieIcon },
    { to: "/members", label: "Members", icon: UsersIcon },
    { to: "/settings", label: "Settings", icon: Cog6ToothIcon },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-30 flex h-screen flex-col border-r border-slate-200 bg-white/95 px-2 py-4 shadow-sm backdrop-blur transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-black text-white shadow-lg shadow-indigo-200">H</div>
          {open && <span className="whitespace-nowrap text-lg font-bold tracking-tight text-slate-900">Harsh.dev</span>}
        </div>
        <button aria-label="Toggle sidebar" onClick={onToggle} className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
          {open ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
        </button>
      </div>
      <nav className="mt-10 space-y-1">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${loc.pathname === n.to ? "bg-indigo-50 text-indigo-700" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
          >
            <n.icon className="h-5 w-5 shrink-0" />
            {open && <span className="whitespace-nowrap">{n.label}</span>}
          </Link>
        ))}
      </nav>
      {open && <div className="mt-auto rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500">Building thoughtful digital experiences, one project at a time.</div>}
    </aside>
  );
}
