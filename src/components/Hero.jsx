import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7zWv2t8f1mJ0lp9y/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Build beautiful apps with AI, faster
          </h1>
          <p className="mt-6 text-lg text-slate-700 max-w-xl">
            Spin up full-stack experiences in minutes. Design, code, and iterate
            in a live sandbox where ideas become products.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-6 py-3 font-medium shadow hover:shadow-md transition-shadow">
              Start building
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-6 py-3 font-medium border border-slate-200 shadow-sm hover:shadow transition-all">
              See examples
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white to-white/0" />
    </section>
  );
}
