"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/language-context";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#07070a] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-pink-400/15 blur-3xl" />
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.45em] text-pink-200/70">
              {t('header.teamPulse')}
            </span>
            <span className="text-xl font-semibold tracking-wide">
              {t('header.agency')}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="/" className="transition hover:text-white">
              {t('header.home')}
            </Link>
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-pink-200/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-pink-100/80"
          >
            <Sparkles className="h-4 w-4" />
            {t('aboutPage.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 text-4xl font-semibold leading-tight md:text-5xl"
          >
            {t('about.title')}
          </motion.h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold">{t('aboutPage.whyChooseUs')}</h3>
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 transition hover:bg-black/30">
                {t('whyUs.0')}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 transition hover:bg-black/30">
                {t('whyUs.1')}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 px-6 py-4 transition hover:bg-black/30">
                {t('whyUs.2')}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold">{t('aboutPage.mission')}</h3>
            <p className="leading-7 text-white/70">
              {t('aboutPage.missionText')}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 p-4 text-center">
                <div className="text-2xl font-bold text-pink-200">500+</div>
                <div className="text-sm text-white/60">{t('aboutPage.projectsCompleted')}</div>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/10 to-purple-500/10 p-4 text-center">
                <div className="text-2xl font-bold text-fuchsia-200">98%</div>
                <div className="text-sm text-white/60">{t('aboutPage.clientSatisfaction')}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <section className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl font-semibold mb-6"
          >
            {t('about.contactsTitle')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col gap-4 md:flex-row"
          >
            <a
              href="https://t.me/theteampulse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-pink-200/25 bg-white/5 px-6 py-3 text-sm font-medium text-pink-100 transition hover:bg-white/10"
            >
              <span>{t('aboutPage.telegramLabel')}: {t('about.contacts.telegram')}</span>
            </a>
            <a
              href="mailto:teampulsemarketing1@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-pink-200/25 bg-white/5 px-6 py-3 text-sm font-medium text-pink-100 transition hover:bg-white/10"
            >
              <span>{t('aboutPage.emailLabel')}: {t('about.contacts.email')}</span>
            </a>
          </motion.div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/25"
          >
            {t('buttons.workWithUs')}
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}