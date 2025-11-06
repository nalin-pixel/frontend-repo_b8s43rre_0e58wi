import { Rocket, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 grid place-items-center text-white">
            <Rocket size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">Vibe Coding</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-slate-900 transition-colors">Showcase</a>
          <a href="#cta" className="hover:text-slate-900 transition-colors">Get Started</a>
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition-shadow">
          <Star size={16} />
          Star Project
        </button>
      </nav>
    </header>
  );
}
