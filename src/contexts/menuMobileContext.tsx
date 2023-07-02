import { useMenuMobile } from '@/hooks/useMenuMobile'
import { ReactNode, createContext, useContext } from 'react'

interface MenuMobileContextData {
  toggleSidebar: boolean
  handleMenuMobile: () => void
}

interface MenuMobileContextProps {
  children: ReactNode
}

const MenuMobileContext = createContext({} as MenuMobileContextData)

export const MenuMobileProvider = ({ children }: MenuMobileContextProps) => {
  const { toggleSidebar, handleMenuMobile } = useMenuMobile()

  return (
    <MenuMobileContext.Provider value={{ toggleSidebar, handleMenuMobile }}>
      {children}
    </MenuMobileContext.Provider>
  )
}

export function MenuContext() {
  const context = useContext(MenuMobileContext)

  return context
}
