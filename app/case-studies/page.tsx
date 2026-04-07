'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function CaseStudies() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-pink-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-rose-300/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex flex-col">
            <Link href="/" className="text-xs uppercase tracking-[0.45em] text-pink-200/70 transition hover:text-pink-200">
              {t('header.teamPulse')}
            </Link>
            <span className="text-xl font-semibold tracking-wide">{t('caseStudiesPage.title')}</span>
          </div>
          <Link
            href="/"
            className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
          >
            {t('buttons.backHome')}
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-semibold md:text-6xl">{t('caseStudiesPage.heading')}</h1>
          <p className="mt-6 text-lg text-white/70">{t('caseStudiesPage.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 backdrop-blur-sm lg:p-12"
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="text-5xl">🌮</div>
            <div>
              <h2 className="text-3xl font-semibold">{t('caseStudiesPage.caseTitle')}</h2>
              <p className="mt-2 text-white/60">{t('caseStudiesPage.caseLocation')}</p>
            </div>
          </div>

          <div className="mb-8 border-b border-white/10 pb-8">
            <h3 className="mb-4 text-xl font-semibold text-pink-200">{t('caseStudiesPage.challengeTitle')}</h3>
            <p className="leading-7 text-white/70">
              {t('caseStudiesPage.challengeText')}
            </p>
          </div>

          <div className="mb-8 border-b border-white/10 pb-8">
            <h3 className="mb-4 text-xl font-semibold text-pink-200">{t('caseStudiesPage.strategyTitle')}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">{t('caseStudiesPage.strategyWeek1Title')}</h4>
                <p className="mt-2 whitespace-pre-line text-white/70">{t('caseStudiesPage.strategyWeek1Text')}</p>
              </div>
              <div>
                <h4 className="font-semibold">{t('caseStudiesPage.strategyWeek2Title')}</h4>
                <p className="mt-2 whitespace-pre-line text-white/70">{t('caseStudiesPage.strategyWeek2Text')}</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-6 text-xl font-semibold text-pink-200">{t('caseStudiesPage.resultsTitle')}</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">+353%</div>
                <div className="mt-2 text-sm text-white/60">{t('caseStudiesPage.results.0')}</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">+183%</div>
                <div className="mt-2 text-sm text-white/60">{t('caseStudiesPage.results.1')}</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">180%</div>
                <div className="mt-2 text-sm text-white/60">{t('caseStudiesPage.results.2')}</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">-77%</div>
                <div className="mt-2 text-sm text-white/60">{t('caseStudiesPage.results.3')}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="italic text-white/80">
              &ldquo;{t('caseStudiesPage.testimonial')}&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 backdrop-blur-sm"
        >
          <h2 className="mb-6 text-3xl font-semibold text-center">{t('caseStudiesPage.provenTitle')}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">353%</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.0')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">67%</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.1')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">94%</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.2')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">$2.8M</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.3')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">50+</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.4')}</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-200 mb-2">4.9/5</div>
              <div className="text-white/70">{t('caseStudiesPage.provenLabels.5')}</div>
            </div>
          </div>
          <p className="mt-8 text-center text-white/80 leading-relaxed">
            {t('caseStudiesPage.provenText')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="mb-6 text-2xl font-semibold">{t('caseStudiesPage.ctaTitle')}</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >
            {t('buttons.bookCall')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
