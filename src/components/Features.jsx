const features = [
  {
    title: "Instant Scaffolding",
    desc: "Spin up React + FastAPI projects with Tailwind and live preview baked in.",
  },
  {
    title: "Database Ready",
    desc: "MongoDB connection is pre-wired so you persist data from day one.",
  },
  {
    title: "AI Pair Programming",
    desc: "Describe your idea and watch it turn into a working product.",
  },
  {
    title: "Beautiful UI",
    desc: "Shipped with modern components, icons, and animations.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why teams choose us</h2>
          <p className="mt-3 text-slate-700">A focused toolkit for shipping faster without sacrificing quality.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
