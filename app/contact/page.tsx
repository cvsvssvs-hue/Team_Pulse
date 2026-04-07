"use client";

import { motion } from "framer-motion";
import { Phone, Send, AtSign, Globe, Mail, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "../../lib/language-context";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    contact: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', brand: '', contact: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Home
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
            <Mail className="h-4 w-4" />
            Get In Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mb-6 text-4xl font-semibold leading-tight md:text-5xl"
          >
            {t('contact.title')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto max-w-2xl text-lg leading-8 text-white/70"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-200/30 to-rose-300/20">
                    <Phone className="h-5 w-5 text-pink-100" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Phone</div>
                    <div className="font-medium">+1 (941) 735-6655</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-200/30 to-rose-300/20">
                    <Send className="h-5 w-5 text-pink-100" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Telegram</div>
                    <div className="font-medium">@theteampulse</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-200/30 to-rose-300/20">
                    <Send className="h-5 w-5 text-pink-100" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">WhatsApp</div>
                    <div className="font-medium">+1 (941) 735-6655</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-200/30 to-rose-300/20">
                    <AtSign className="h-5 w-5 text-pink-100" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Instagram</div>
                    <div className="font-medium">@the.team.pulse</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-200/30 to-rose-300/20">
                    <Send className="h-5 w-5 text-pink-100" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Reddit</div>
                    <div className="font-medium">u/Individual_Might3830</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <h4 className="mb-4 font-semibold">Business Hours</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 22 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-2xl font-semibold">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/30 focus:border-pink-200/50"
                    placeholder={t('contact.form.name')}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-white/70">
                    {t('contact.form.brand')}
                  </label>
                  <input
                    type="text"
                    name="brand"
                    value={formData.brand}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/30 focus:border-pink-200/50"
                    placeholder={t('contact.form.brand')}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {t('contact.form.contact')}
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/30 focus:border-pink-200/50"
                  placeholder={t('contact.form.contact')}
                />
              </div>
              <div>
                <label className="mb-2 block text-sm text-white/70">
                  {t('contact.form.message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none placeholder:text-white/30 focus:border-pink-200/50"
                  placeholder={t('contact.form.message')}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 rounded-2xl bg-green-500/10 border border-green-500/20 p-4">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 rounded-2xl bg-red-500/10 border border-red-500/20 p-4">
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-pink-200 via-rose-200 to-fuchsia-200 py-4 text-lg font-semibold text-black transition hover:scale-[1.01] hover:shadow-lg hover:shadow-pink-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : t('contact.form.send')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}