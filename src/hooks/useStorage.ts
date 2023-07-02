import { darkTheme } from '@/styles/themes/dark'
import { lightTheme } from '@/styles/themes/light'
import { useEffect, useState } from 'react'

interface UseStorageProps {
  theme: string
  handleToggleTheme: () => void
  isDark: boolean
}

export function useStorage(): UseStorageProps {
  const [theme, setTheme] = useState(darkTheme)
  const [isDark, setIsDark] = useState(theme === darkTheme)

  useEffect(() => {
    const themeInStorage = localStorage.getItem('mode@theme')

    if (themeInStorage === null) {
      setTheme(lightTheme)
      setIsDark(theme === darkTheme)
      localStorage.setItem('mode@theme', 'dark')
    } else {
      setTheme(themeInStorage === 'dark' ? darkTheme : lightTheme)
      setIsDark(theme === darkTheme)
    }
  }, [theme])

  function handleToggleTheme() {
    const newTheme = theme === darkTheme ? 'light' : 'dark'
    localStorage.setItem('mode@theme', newTheme)
    setTheme(newTheme === 'dark' ? darkTheme : lightTheme)
    setIsDark(newTheme === darkTheme)
  }

  return { theme, handleToggleTheme, isDark }
}
