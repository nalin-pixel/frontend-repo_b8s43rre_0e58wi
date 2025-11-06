export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-10 ring-1 ring-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold">Ready to build something great?</h2>
              <p className="mt-2 text-slate-300">Start from a solid foundation and iterate with confidence.</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium shadow hover:shadow-md transition-shadow"
            >
              Create a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
