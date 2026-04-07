"use client";

import { type Language, useLanguage } from '../lib/language-context';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: Array<{ code: Language; name: string; flag: string }> = [
    { code: 'en', name: 'EN', flag: '🇺🇸' },
    { code: 'es', name: 'ES-MX', flag: '🇲🇽' },
    { code: 'ru', name: 'RU', flag: '🇷🇺' },
    { code: 'ko', name: 'KO', flag: '🇰🇷' }
  ];

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition ${
            language === lang.code
              ? 'bg-pink-200/20 text-pink-100 border border-pink-200/30'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          {lang.flag} {lang.name}
        </button>
      ))}
    </div>
  );
}