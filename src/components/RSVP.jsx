import React, { useState } from 'react';
import { CheckCircle2, Users } from 'lucide-react';

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="rsvp" className="relative py-20 sm:py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">Konfirmasi Kehadiran</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Mohon isi formulir di bawah ini untuk memberi tahu kami kehadiran Anda.</p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">Nama Lengkap</label>
              <input type="text" required className="w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Nama Anda" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">Jumlah Tamu</label>
              <div className="relative">
                <Users className="absolute left-3 top-3.5 h-5 w-5 text-neutral-400" />
                <input type="number" min="1" defaultValue={1} className="w-full pl-10 rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-2">Ucapan</label>
              <textarea rows={4} className="w-full rounded-xl border border-neutral-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-500" placeholder="Doa & harapan untuk kedua mempelai"></textarea>
            </div>
            <button type="submit" className="w-full rounded-full bg-amber-600 text-white px-6 py-3 font-semibold shadow-lg shadow-amber-500/30 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-amber-500/50">
              Kirim RSVP
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center text-center rounded-2xl border border-emerald-300/40 bg-emerald-50 dark:bg-emerald-900/20 p-8">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">Terima kasih!</h3>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300">Konfirmasi Anda sudah kami terima. Sampai jumpa di hari bahagia kami.</p>
          </div>
        )}
      </div>
    </section>
  );
}
