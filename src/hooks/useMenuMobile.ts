import { useState } from 'react'

interface UseMenuProps {
  toggleSidebar: boolean
  handleMenuMobile: () => void
}

export function useMenuMobile(): UseMenuProps {
  const [toggleSidebar, setToggleSidebar] = useState(false)

  function handleMenuMobile() {
    setToggleSidebar((state) => !state)
  }

  return { toggleSidebar, handleMenuMobile }
}
