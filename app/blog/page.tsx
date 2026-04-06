'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function BlogPage() {
  const { t } = useLanguage()

  const articles = [
    {
      slug: 'how-to-get-clients-sarasota',
      title: 'How to Get Clients for a Small Business in Sarasota',
      subtitle: '(Without Wasting $5K/Month)',
      excerpt: 'You\'ve got a great service. But nobody knows about it. You\'ve tried "being on Facebook," spent money on ads that went nowhere, or hired someone who didn\'t deliver. Meanwhile, your competitors seem to have an endless stream of clients.',
      date: 'April 2024',
      readTime: '8 min read',
      category: 'Marketing Strategy'
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
            <span className="text-xl font-semibold tracking-wide">Blog</span>
          </div>
          <Link
            href="/"
            className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
          >
            Back Home
          </Link>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl font-semibold md:text-6xl">Marketing Insights</h1>
          <p className="mt-6 text-xl text-white/60">
            Practical strategies for growing your Sarasota business
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block"
            >
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
                className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 transition hover:border-pink-200/25 hover:bg-white/[0.08] hover:scale-[1.02] backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-sm text-pink-200/70">
                  <span className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold leading-tight group-hover:text-pink-200 transition">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {article.subtitle}
                </p>

                <p className="mt-4 leading-6 text-white/70 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm text-white/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-pink-200 group-hover:gap-3 transition-all">
                  <span className="text-sm font-medium">Read Article</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 rounded-3xl border border-pink-200/20 bg-pink-500/10 p-8 text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold">Want more marketing insights?</h3>
          <p className="mt-4 text-white/70">
            Get personalized strategies for your Sarasota business growth.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
