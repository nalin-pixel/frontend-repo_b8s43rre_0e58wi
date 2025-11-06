import React from 'react';
import { MapPin, CalendarDays, Clock } from 'lucide-react';

export default function Details() {
  return (
    <section id="details" className="relative py-20 sm:py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Detail Acara</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Berikut waktu dan lokasi pelaksanaan akad & resepsi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/40 backdrop-blur p-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Akad Nikah</h3>
            </div>
            <div className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-neutral-500" /> 09.00 - 10.00 WIB</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neutral-500" /> Masjid Raya, Jakarta</p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/70 dark:bg-neutral-900/40 backdrop-blur p-6">
            <div className="flex items-center gap-3">
              <CalendarDays className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Resepsi</h3>
            </div>
            <div className="mt-4 space-y-2 text-neutral-700 dark:text-neutral-300">
              <p className="flex items-center gap-2"><Clock className="w-4 h-4 text-neutral-500" /> 11.00 - 14.00 WIB</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-neutral-500" /> Grand Ballroom, Jakarta</p>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#rsvp" className="inline-flex items-center justify-center rounded-full bg-amber-600 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-amber-500/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-500/50">
            Simpan Tanggal & RSVP
          </a>
        </div>
      </div>
    </section>
  );
}
