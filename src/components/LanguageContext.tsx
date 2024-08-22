import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

type Language = 'original' | 'translated';

const tg = Telegram?.WebApp

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('original')

  useEffect(() => {
    const defaultLanguage = tg.initDataUnsafe?.user?.language_code === 'ru' ? 'original' : 'translated'
    setLanguage(defaultLanguage)
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}