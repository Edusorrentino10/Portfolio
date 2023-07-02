import { TFunction } from 'i18next'
import { FormEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface UseStorageProps {
  currentLang: string
  handleChangeLanguage: (e: FormEvent) => void
  t: TFunction<'translation', undefined>
}

export function useLanguage(): UseStorageProps {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()

  const [currentLang, setCurrentLang] = useState(language)

  useEffect(() => {
    const languageInStorage = localStorage.getItem('lang@pt-en')

    if (languageInStorage === null) {
      changeLanguage('pt')
      setCurrentLang('pt')
      localStorage.setItem('lang@pt-en', 'pt')
    } else {
      changeLanguage(languageInStorage === 'pt' ? 'pt' : 'en')
      setCurrentLang(languageInStorage === 'pt' ? 'pt' : 'en')
    }
  }, [changeLanguage])

  function handleChangeLanguage(e: FormEvent) {
    e.preventDefault()
    const newLang = currentLang === 'en' ? 'pt' : 'en'
    localStorage.setItem('lang@pt-en', newLang)
    changeLanguage(newLang === 'pt' ? 'pt' : 'en')
    setCurrentLang(newLang === 'pt' ? 'pt' : 'en')
  }

  return { currentLang, handleChangeLanguage, t }
}
