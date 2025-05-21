import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, getTranslation, TranslationKey } from './translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Récupère la langue des préférences sauvegardées ou utilise le français par défaut
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'fr';
  });

  // Fonction de traduction qui utilise la langue actuelle
  const t = (key: TranslationKey): string => {
    return getTranslation(language, key);
  };

  // Met à jour la langue et la sauvegarde dans localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Initialise la langue du document HTML
  useEffect(() => {
    document.documentElement.lang = language;
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};