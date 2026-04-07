"use client";

import { motion } from "framer-motion";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/language-context";
import LanguageSwitcher from "../../components/LanguageSwitcher";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      title: t('servicesPage.cards.0.title'),
      desc: t('servicesPage.cards.0.desc'),
      results: [
        t('servicesPage.cards.0.results.0'),
        t('servicesPage.cards.0.results.1'),
        t('servicesPage.cards.0.results.2')
      ]
    },
    {
      title: t('servicesPage.cards.1.title'),
      desc: t('servicesPage.cards.1.desc'),
      results: [
        t('servicesPage.cards.1.results.0'),
        t('servicesPage.cards.1.results.1'),
        t('servicesPage.cards.1.results.2')
      ]
    },
    {
      title: t('servicesPage.cards.2.title'),
      desc: t('servicesPage.cards.2.desc'),
      results: [
        t('servicesPage.cards.2.results.0'),
        t('servicesPage.cards.2.results.1'),
        t('servicesPage.cards.2.results.2')
      ]
    },
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
            <BadgeCheck className="h-4 w-4" />
            {t('servicesPage.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 text-4xl font-semibold leading-tight md:text-5xl"
          >
            {t('services.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-white/70"
          >
            {t('services.subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-fuchsia-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200/30 to-fuchsia-300/20 transition-transform group-hover:scale-110">
                  <BadgeCheck className="h-6 w-6 text-pink-100" />
                </div>
                <h3 className="mb-4 text-2xl font-semibold">{service.title}</h3>
                <p className="mb-6 leading-7 text-white/70 group-hover:text-white/90">{service.desc}</p>
                <div className="space-y-2">
                  {service.results.map((result) => (
                    <div key={result} className="flex items-start gap-2 text-sm text-pink-200/80">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pink-200/80 flex-shrink-0" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            {t('buttons.bookCall')}
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.03] p-8 text-center backdrop-blur-sm lg:p-12"
        >
          <h3 className="text-2xl font-semibold">{t('servicesPage.seeResults')}</h3>
          <p className="mt-4 text-white/70">{t('servicesPage.resultsText')}</p>
          <Link
            href="/case-studies"
            className="mt-6 inline-flex items-center gap-2 text-pink-200 transition hover:text-pink-100"
          >
            {t('buttons.viewCaseStudy')}
          </Link>
        </motion.div>
      </section>
    </main>
  );
}