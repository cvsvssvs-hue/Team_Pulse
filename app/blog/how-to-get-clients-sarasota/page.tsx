'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function BlogPost() {
  const { t } = useLanguage()

  const sections = [
    {
      title: t('blogArticle.sections.0.title'),
      content: t('blogArticle.sections.0.content')
    },
    {
      title: t('blogArticle.sections.1.title'),
      content: t('blogArticle.sections.1.content')
    },
    {
      title: t('blogArticle.sections.2.title'),
      content: t('blogArticle.sections.2.content')
    },
    {
      title: t('blogArticle.sections.3.title'),
      content: t('blogArticle.sections.3.content')
    },
    {
      title: t('blogArticle.sections.4.title'),
      content: t('blogArticle.sections.4.content')
    }
  ]

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
            <span className="text-xl font-semibold tracking-wide">{t('blogPage.title')}</span>
          </div>
          <Link
            href="/"
            className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
          >
            {t('buttons.backHome')}
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-semibold md:text-6xl">{t('blogArticle.title')}</h1>
          <p className="mt-4 text-lg text-white/60">{t('blogArticle.subtitle')}</p>
          <p className="mt-6 text-white/70">{t('blogArticle.meta')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 space-y-12"
        >
          <div>
            <h2 className="text-3xl font-semibold">{t('blogArticle.introTitle')}</h2>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.introP1')}
            </p>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.introP2')}
            </p>
            <p className="mt-4 leading-7 text-white/70">{t('blogArticle.introP3')}</p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <p className="mt-4 whitespace-pre-line leading-7 text-white/70">{section.content}</p>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">{t('blogArticle.advantageTitle')}</h2>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.advantageP1')}
            </p>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.advantageP2')}
            </p>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.advantageP3')}
            </p>
            <p className="mt-6 font-semibold text-pink-200">{t('blogArticle.advantageQuote')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">{t('blogArticle.timelineTitle')}</h2>
            <div className="mt-6 space-y-4">
              {[
                { month: t('blogArticle.timeline.0.month'), item: t('blogArticle.timeline.0.item') },
                { month: t('blogArticle.timeline.1.month'), item: t('blogArticle.timeline.1.item') },
                { month: t('blogArticle.timeline.2.month'), item: t('blogArticle.timeline.2.item') },
                { month: t('blogArticle.timeline.3.month'), item: t('blogArticle.timeline.3.item') }
              ].map((entry, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-pink-200" />
                  <div>
                    <div className="font-semibold">{entry.month}</div>
                    <div className="text-white/70">{entry.item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-pink-200/20 bg-pink-500/10 p-8">
            <h2 className="text-2xl font-semibold">{t('blogArticle.bottomLineTitle')}</h2>
            <p className="mt-4 leading-7 text-white/70">
              {t('blogArticle.bottomLineIntro')}
            </p>
            <div className="mt-4 space-y-2 text-white/70">
              <p>1. {t('blogArticle.bottomLineItems.0')}</p>
              <p>2. {t('blogArticle.bottomLineItems.1')}</p>
              <p>3. {t('blogArticle.bottomLineItems.2')}</p>
              <p>4. {t('blogArticle.bottomLineItems.3')}</p>
              <p>5. {t('blogArticle.bottomLineItems.4')}</p>
            </div>
            <p className="mt-6 leading-7 text-white/70">
              {t('blogArticle.bottomLineOutro')}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold">{t('blogArticle.ctaTitle')}</h3>
          <p className="mt-4 text-white/70">{t('blogArticle.ctaText')}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >
            {t('buttons.bookCall')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}