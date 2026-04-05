"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations } from './translations';

type Translations = typeof translations;
export type Language = keyof Translations;

type TranslationNode = string | ReadonlyArray<TranslationNode> | { [key: string]: TranslationNode };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru'); // Default to Russian

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: TranslationNode | undefined = translations[language] as TranslationNode;

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as { [key: string]: TranslationNode })[k];
      } else {
        value = undefined;
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}