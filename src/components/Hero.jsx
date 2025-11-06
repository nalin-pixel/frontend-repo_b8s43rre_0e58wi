import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/20 dark:to-neutral-950/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.5),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-neutral-700/80 dark:text-neutral-200/80">Undangan Pernikahan</p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-neutral-900 via-amber-700 to-amber-500 dark:from-white dark:via-amber-300 dark:to-amber-200">
          Ariana & Rafael
        </h1>
        <p className="mt-4 text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          Dengan penuh sukacita kami mengundang Anda untuk hadir dan berbagi kebahagiaan pada hari pernikahan kami.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#rsvp" className="inline-flex items-center justify-center rounded-full bg-amber-600 text-white px-6 py-3 text-sm sm:text-base font-semibold shadow-lg shadow-amber-500/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-500/50">
            Konfirmasi Kehadiran
          </a>
          <a href="#details" className="inline-flex items-center justify-center rounded-full border border-neutral-300/70 dark:border-white/20 bg-white/70 dark:bg-neutral-900/50 backdrop-blur px-6 py-3 text-sm sm:text-base font-medium text-neutral-800 dark:text-neutral-100 hover:bg-white hover:dark:bg-neutral-900">
            Lihat Detail
          </a>
        </div>
        <p className="mt-6 text-sm text-neutral-600 dark:text-neutral-400">
          Sabtu, 21 Desember 2025 • Jakarta, Indonesia
        </p>
      </div>
    </section>
  );
}
