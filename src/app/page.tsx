'use client'

import { HeaderComponent } from '@/components/Header'
import { MainPage } from '@/components/MainPage'
import { Container } from './styles'
import { useTheme } from '@/contexts/useTheme'
import { MenuContext } from '@/contexts/menuMobileContext'
import { AboutMe } from '@/components/About'
import { Skills } from '@/components/Skills'
import { useEffect, useState } from 'react'
import { Projects } from '@/components/Projects'
import { Experiences } from '@/components/Experiences'
import { Contact } from '@/components/Contact'

export default function Home() {
  const { theme } = useTheme()
  const { toggleSidebar, handleMenuMobile } = MenuContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <div></div>
  }

  return (
    <Container className={theme}>
      <HeaderComponent
        toggleSidebar={toggleSidebar}
        handleMenuMobile={handleMenuMobile}
      />
      <MainPage toggleSidebar={toggleSidebar} />
      <AboutMe />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
    </Container>
  )
}
