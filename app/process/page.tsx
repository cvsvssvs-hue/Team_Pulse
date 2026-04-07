"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/language-context";

export default function ProcessPage() {
  const { t } = useLanguage();

  const steps = [
    t('process.steps.0'),
    t('process.steps.1'),
    t('process.steps.2'),
    t('process.steps.3'),
  ];

  const detailedSteps = [
    {
      number: "01",
      title: t('processPage.stepTitles.0'),
      description: t('processPage.stepDescriptions.0'),
      duration: t('processPage.durations.0')
    },
    {
      number: "02",
      title: t('processPage.stepTitles.1'),
      description: t('processPage.stepDescriptions.1'),
      duration: t('processPage.durations.1')
    },
    {
      number: "03",
      title: t('processPage.stepTitles.2'),
      description: t('processPage.stepDescriptions.2'),
      duration: t('processPage.durations.2')
    },
    {
      number: "04",
      title: t('processPage.stepTitles.3'),
      description: t('processPage.stepDescriptions.3'),
      duration: t('processPage.durations.3')
    }
  ];

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

          <Link
            href="/contact"
            className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
          >
            {t('header.startProject')}
          </Link>
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
            <CheckCircle className="h-4 w-4" />
            {t('processPage.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 text-4xl font-semibold leading-tight md:text-5xl"
          >
            {t('process.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-white/70"
          >
            {t('processPage.subtitle')}
          </motion.p>
        </div>

        {/* Simple overview */}
        <div className="mb-20 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="mb-4 text-sm font-medium text-pink-100/80">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="leading-6 text-white/80">{step}</div>
            </motion.div>
          ))}
        </div>

        {/* Detailed process */}
        <div className="space-y-8">
          {detailedSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -22 : 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center"
            >
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200/30 to-fuchsia-300/20 text-2xl font-bold text-pink-100">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs text-pink-200">
                    {step.duration}
                  </span>
                </div>
                <p className="text-white/70">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/25"
          >
            {t('buttons.startProject')}
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </motion.div>
      </section>
    </main>
  );
}