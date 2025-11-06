import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/40 dark:bg-neutral-900/40 border-b border-white/20 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-wide text-neutral-900 dark:text-white">
            <span className="text-lg sm:text-xl">Ariana</span>
            <span className="mx-2 opacity-60">&</span>
            <span className="text-lg sm:text-xl">Rafael</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-200">
            <a href="#details" className="hover:text-amber-600 transition-colors">Details</a>
            <a href="#rsvp" className="hover:text-amber-600 transition-colors">RSVP</a>
          </nav>
          <a
            href="#rsvp"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-amber-500/30 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
          >
            RSVP
          </a>
        </div>
      </div>
    </header>
  );
}
