"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../lib/language-context";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function HomePage() {
  const { t } = useLanguage();
  const stats = [
    { value: t('stats.0.value'), label: t('stats.0.label') },
    { value: t('stats.1.value'), label: t('stats.1.label') },
    { value: t('stats.2.value'), label: t('stats.2.label') },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#07070a] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-pink-400/15 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.45em] text-pink-200/70">
              {t('header.teamPulse')}
            </span>
            <span className="text-xl font-semibold tracking-wide">
              {t('header.agency')}
            </span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="/services" className="transition hover:text-white">
              {t('header.services')}
            </Link>
            <Link href="/about" className="transition hover:text-white">
              {t('header.about')}
            </Link>
            <Link href="/process" className="transition hover:text-white">
              {t('header.process')}
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              {t('header.contact')}
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
            >
              {t('header.startProject')}
            </Link>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-28">
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-pink-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-pink-100/80"
          >
            <Sparkles className="h-4 w-4" />
            {t('hero.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="max-w-3xl text-5xl font-semibold leading-tight md:text-6xl"
          >
            {t('hero.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/70"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]"
            >
              Get Your First Clients in 14 Days
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5"
            >
              {t('hero.viewServices')}
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12 + index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
              >
                <div className="text-3xl font-semibold text-pink-100">
                  {item.value}
                </div>
                <div className="mt-1 text-sm text-white/60">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute h-[30rem] w-[30rem] rounded-full border border-pink-200/10" />
          <div className="absolute h-[24rem] w-[24rem] rounded-full border border-pink-200/10" />

          <div className="relative w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.35em] text-pink-200/70">
                  Featured
                </div>
                <div className="mt-1 text-2xl font-semibold">
                  Brand Experience
                </div>
              </div>
              <div className="rounded-full border border-pink-200/20 px-3 py-1 text-xs text-pink-100/80">
                Team Pulse Style
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-[#15111a] via-[#120b14] to-[#201019] p-5">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <div className="text-sm text-white/50">Agency concept</div>
                  <div className="text-xl font-medium">
                    Luxury + soft pink contrast
                  </div>
                </div>
                <div className="text-3xl">🌸</div>
              </div>

              <div className="grid gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-sm text-white/50">Offer</div>
                  <div className="mt-1 font-medium">
                    Websites, ads, content, reels, strategy
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-sm text-white/50">Client feeling</div>
                  <div className="mt-1 font-medium">
                    Premium, modern, memorable
                  </div>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-sm text-white/50">Goal</div>
                  <div className="mt-1 font-medium">
                    More trust, more clicks, more leads
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-4">
                <span className="text-xs uppercase tracking-[0.45em] text-pink-200/70">
                  {t('header.teamPulse')}
                </span>
                <span className="text-xl font-semibold tracking-wide">
                  Team Pulse
                </span>
              </div>
              <p className="text-white/60 max-w-md">
                Premium marketing agency creating exceptional digital experiences
                that drive real business results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/services" className="block text-white/60 hover:text-white transition">
                  {t('header.services')}
                </Link>
                <Link href="/about" className="block text-white/60 hover:text-white transition">
                  {t('header.about')}
                </Link>
                <Link href="/blog" className="block text-white/60 hover:text-white transition">
                  Blog
                </Link>
                <Link href="/case-studies" className="block text-white/60 hover:text-white transition">
                  Case Studies
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-white/60">
                <div>Sarasota, Florida</div>
                <div>@theteampulse</div>
                <div>teampulsemarketing1@gmail.com</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/40">
            <p>&copy; 2024 Team Pulse Marketing Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
