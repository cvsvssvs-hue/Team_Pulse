'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/language-context'

export default function BlogPost() {
  const { t } = useLanguage()

  const sections = [
    {
      title: "Stop Being Invisible: Claim Your Local Presence",
      content: "First step? Make sure you exist to customers looking for you.\n\n• Google Business Profile: This is non-negotiable. 80% of 'near me' searches happen on Google. Your profile should have: real photos, hours, service area (Sarasota + surrounding), and most importantly—reviews.\n\n• Expected result: 20-40% of local searchers will find you instead of your competitor"
    },
    {
      title: "Pick Your Customer Avatar (Stop Marketing to Everyone)",
      content: "This is where most businesses fail. They try to appeal to everyone and speak to no one.\n\nAsk yourself:\n• Who actually buys from you?\n• What's their biggest pain?\n• Where do they hang out online?\n\nExample: A luxury salon in Sarasota shouldn't target 18-year-olds—target women 35-60 with disposable income, interested in luxury wellness."
    },
    {
      title: "Paid Ads Work (If Done Right)",
      content: "Most small business owners fail at ads because they:\n• Set a budget and just 'hope'\n• Target too broad or too narrow\n• Don't have a clear offer\n• Never optimize based on results\n\nThe right way:\n• Start with $500-$1K budget (test)\n• Target hyper-specific audience (location + interests + behaviors)\n• Have ONE clear offer ('Free consultation,' 'Buy now,' 'Book appointment')\n• Check results daily and adjust\n• Scale what works"
    },
    {
      title: "Content Builds Authority (Ads Generate Urgency)",
      content: "Ads get people to look at you today. Content builds trust so they come back tomorrow.\n\nYou don't need viral videos. You need:\n• Regular posts on Instagram/Facebook showing your work\n• Behind-the-scenes content (people buy from people, not faceless companies)\n• Local partnerships and testimonials\n• Educational content that positions you as an expert"
    },
    {
      title: "Track Everything (If You Can't Measure It, You Can't Improve It)",
      content: "• Where are your customers coming from? (Google? Instagram? Referral?)\n• How much did that customer cost you?\n• What's their lifetime value?\n\nUse: Google Analytics, CRM, UTM codes on ads.\n\nThis data is how you know what's working and what's wasteful."
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

      <section className="relative z-10 mx-auto max-w-4xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl font-semibold md:text-6xl">How to Get Clients for a Small Business in Sarasota</h1>
          <p className="mt-4 text-lg text-white/60">(Without Wasting $5K/Month)</p>
          <p className="mt-6 text-white/70">Posted on April 2024 • 8 min read</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 space-y-12"
        >
          <div>
            <h2 className="text-3xl font-semibold">The Real Problem</h2>
            <p className="mt-4 leading-7 text-white/70">
              You've got a great service. But nobody knows about it. You've tried "being on Facebook," spent money on ads that went nowhere, or hired someone who didn't deliver. Meanwhile, your competitors seem to have an endless stream of clients.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Here's what most small businesses don't realize: <strong>getting clients isn't hard—getting them profitably and predictably is.</strong>
            </p>
            <p className="mt-4 leading-7 text-white/70">This guide shows you exactly how.</p>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-semibold">{section.title}</h2>
              <p className="mt-4 whitespace-pre-line leading-7 text-white/70">{section.content}</p>
            </div>
          ))}

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8">
            <h2 className="text-2xl font-semibold">The Competitive Advantage: Consistency</h2>
            <p className="mt-4 leading-7 text-white/70">
              Your competitor will post 3 times then quit. You post consistently for 90 days while they don't.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Your competitor will spend $2K on ads with no strategy. You spend $500 with a clear system.
            </p>
            <p className="mt-4 leading-7 text-white/70">
              Your competitor will answer inquiry emails on no schedule. You respond within 2 hours.
            </p>
            <p className="mt-6 font-semibold text-pink-200">Consistency beats talent when talent isn't consistent.</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold">The Timeline</h2>
            <div className="mt-6 space-y-4">
              {[
                { month: "Month 1", item: "Setup + strategy" },
                { month: "Month 2", item: "First results (leads, inquiries)" },
                { month: "Month 3", item: "Optimization (scaling what works)" },
                { month: "Month 6", item: "Predictable customer flow" }
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
            <h2 className="text-2xl font-semibold">The Bottom Line</h2>
            <p className="mt-4 leading-7 text-white/70">
              Getting clients in Sarasota isn't a mystery. It's:
            </p>
            <div className="mt-4 space-y-2 text-white/70">
              <p>1. Being visible where customers search</p>
              <p>2. Speaking directly to your ideal customer</p>
              <p>3. Paid ads for speed + organic for trust</p>
              <p>4. Consistent execution</p>
              <p>5. Tracking and optimizing</p>
            </div>
            <p className="mt-6 leading-7 text-white/70">
              Most businesses either don't do this at all, or they do it poorly. That's your opportunity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 text-center backdrop-blur-sm"
        >
          <h3 className="text-2xl font-semibold">Ready to stop guessing and start getting actual clients?</h3>
          <p className="mt-4 text-white/70">Let's build a predictable client acquisition system for your business.</p>
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
