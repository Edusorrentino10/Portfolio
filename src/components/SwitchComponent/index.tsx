import { Switch } from '@chakra-ui/react'
import { lightTheme } from '@/styles/themes/light'
import { useTheme } from '@/contexts/useTheme'

export function Switcher() {
  const { theme, handleToggleTheme } = useTheme()

  return (
    <Switch
      colorScheme="blackAlpha"
      size="md"
      onChange={handleToggleTheme}
      isChecked={theme === lightTheme}
    />
  )
}
