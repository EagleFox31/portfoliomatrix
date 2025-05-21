import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1 text-sm font-mono bg-[hsl(var(--matrix-dark-green))]/70 hover:bg-[hsl(var(--matrix-dark-green))] text-[hsl(var(--matrix-green))] py-1 px-3 rounded border border-[hsl(var(--matrix-green))]/30 transition-all duration-300"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer en Français'}
    >
      <span className={`${language === 'fr' ? 'font-bold' : 'opacity-70'}`}>FR</span>
      <span className="mx-1">|</span>
      <span className={`${language === 'en' ? 'font-bold' : 'opacity-70'}`}>EN</span>
    </button>
  );
};