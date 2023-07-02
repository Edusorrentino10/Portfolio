import { useStorage } from '@/hooks/useStorage'
import { ReactNode, createContext, useContext } from 'react'

interface ThemeContextData {
  theme: string
  handleToggleTheme: () => void
  isDark: boolean
}

interface ThemeContextProps {
  children: ReactNode
}

const ThemeContext = createContext({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeContextProps) => {
  const { theme, handleToggleTheme, isDark } = useStorage()

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)

  return context
}
