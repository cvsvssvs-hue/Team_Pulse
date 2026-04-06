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
            <span className="text-xl font-semibold tracking-wide">Case Studies</span>
          </div>
          <Link
            href="/"
            className="rounded-full border border-pink-200/25 bg-white/5 px-5 py-2 text-sm font-medium text-pink-100 transition hover:bg-white/10"
          >
            Back Home
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
          <h1 className="text-5xl font-semibold md:text-6xl">Case Studies</h1>
          <p className="mt-6 text-lg text-white/70">Real results from real businesses</p>
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
              <h2 className="text-3xl font-semibold">Salsa Fresca Restaurant & Bar</h2>
              <p className="mt-2 text-white/60">Sarasota Downtown</p>
            </div>
          </div>

          <div className="mb-8 border-b border-white/10 pb-8">
            <h3 className="mb-4 text-xl font-semibold text-pink-200">The Challenge</h3>
            <p className="leading-7 text-white/70">
              After opening in January 2024, Salsa Fresca was struggling to gain traction despite a prime downtown location. They were getting only ~15 customers per week with ineffective Google Ads spending ($3K/month with no strategy). No organic social presence. Competing directly against established chains with 10x the marketing budget.
            </p>
          </div>

          <div className="mb-8 border-b border-white/10 pb-8">
            <h3 className="mb-4 text-xl font-semibold text-pink-200">Our Strategy</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Week 1-2: Audit & Strategy Sprint</h4>
                <p className="mt-2 text-white/70">
                  • Analyzed competitor keywords (local searches: "authentic Mexican Sarasota," "dinner Siesta Key")<br/>
                  • Built Facebook/Instagram content calendar (3 posts/week: food, behind-scenes, local events)<br/>
                  • Restructured Google Ads (cut waste, focused on high-intent keywords)
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Week 3-4: Execution</h4>
                <p className="mt-2 text-white/70">
                  • Launched targeted Meta Ads to Sarasota locals ($800/month, laser-focused)<br/>
                  • Posted first TikTok videos (food prep, owner story)<br/>
                  • Optimized Google Business Profile with local keywords
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="mb-6 text-xl font-semibold text-pink-200">The Results (30 Days)</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">+353%</div>
                <div className="mt-2 text-sm text-white/60">Customers/week (15 → 68)</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">+183%</div>
                <div className="mt-2 text-sm text-white/60">Monthly Revenue ($12K → $34K)</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">180%</div>
                <div className="mt-2 text-sm text-white/60">Google Ads ROI (was 20%)</div>
              </div>
              <div className="rounded-2xl border border-pink-200/20 bg-pink-500/10 p-6">
                <div className="text-3xl font-bold text-pink-200">-77%</div>
                <div className="mt-2 text-sm text-white/60">Cost per Customer ($200 → $45)</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="italic text-white/80">
              "We didn't know what we were doing. They turned our ads from money-wasting into a customer machine. We're now fully booked Thursday-Saturday." – Owner, Salsa Fresca
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="mb-6 text-2xl font-semibold">Ready for results like this?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >
            Book Your Free Strategy Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
