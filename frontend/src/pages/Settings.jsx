function Settings() {
  return (
    <section className="max-w-3xl">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Preferences</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Settings</h2>
      <p className="mt-2 text-slate-500">Manage how your workspace looks and feels.</p>
      <div className="mt-8 space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h3 className="font-bold text-slate-900">Profile visibility</h3><p className="mt-1 text-sm text-slate-500">Allow collaborators to see your public profile details.</p><button className="mt-4 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">Manage profile</button></div>
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div><h3 className="font-bold text-slate-900">Email updates</h3><p className="mt-1 text-sm text-slate-500">Receive a weekly summary of activity.</p></div><button aria-label="Toggle email updates" className="h-7 w-12 rounded-full bg-indigo-600 p-1"><span className="block ml-auto h-5 w-5 rounded-full bg-white shadow" /></button></div>
      </div>
    </section>
  );
}

export default Settings;
