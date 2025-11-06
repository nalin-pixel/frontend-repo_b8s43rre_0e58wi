export default function Showcase() {
  return (
    <section id="showcase" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Live preview, live results</h2>
          <p className="mt-3 text-slate-700">Interact with your app while you build it. No compile dance, no waiting.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-indigo-200 via-violet-200 to-fuchsia-200" />
            <h3 className="mt-4 font-semibold text-slate-900">Frontend</h3>
            <p className="text-sm text-slate-700">Vite + React + Tailwind with hot reloads and modern DX.</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-teal-200 via-emerald-200 to-lime-200" />
            <h3 className="mt-4 font-semibold text-slate-900">Backend</h3>
            <p className="text-sm text-slate-700">FastAPI with MongoDB integration and typed schemas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
