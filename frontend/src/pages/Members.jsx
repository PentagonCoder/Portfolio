function Members() {
  const members = ["Harsh Sharma", "Aarav Mehta", "Priya Singh"];
  return (
    <section>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Collaboration</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4"><div><h2 className="text-3xl font-bold tracking-tight text-slate-900">Members</h2><p className="mt-2 text-slate-500">The people contributing to this workspace.</p></div><button className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">Invite member</button></div>
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {members.map((member, index) => <div key={member} className="flex items-center justify-between border-b border-slate-100 p-5 last:border-0"><div className="flex items-center gap-3"><div className="grid h-10 w-10 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{member.split(" ").map((part) => part[0]).join("")}</div><div><p className="font-semibold text-slate-800">{member}</p><p className="text-sm text-slate-500">{index === 0 ? "Owner" : "Member"}</p></div></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">Active</span></div>)}
      </div>
    </section>
  );
}

export default Members;
