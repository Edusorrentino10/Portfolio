'use client'

import { HeaderComponent } from '@/components/Header'
import { MainPage } from '@/components/MainPage'
import { Container } from './styles'
import { useTheme } from '@/contexts/useTheme'
import { MenuContext } from '@/contexts/menuMobileContext'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

export default function Home() {
  const { theme } = useTheme()
  const { toggleSidebar, handleMenuMobile } = MenuContext()

  const { ref, inView } = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.2,
        },
      })

      animation2.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 2.5,
          bounce: 0.1,
        },
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
      animation2.start({ x: '-100vw' })
    }
  }, [animation, animation2, inView])

  return (
    <Container className={theme}>
      <HeaderComponent
        toggleSidebar={toggleSidebar}
        handleMenuMobile={handleMenuMobile}
      />
      <MainPage toggleSidebar={toggleSidebar} />

      <div
        ref={ref}
        id="about"
        style={{
          marginTop: '50px',
          height: '100vh',
          width: '100vw',
          color: 'white',
          background: 'red',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
        }}
      >
        {' '}
        <motion.h1 animate={animation}>
          Uma pirueta, duas piruetas, dale, dale
        </motion.h1>
        <motion.h2 animate={animation2}>
          Uma pirueta, duas piruetas, dale, dale
        </motion.h2>
        <motion.h2 animate={animation2}>
          Uma pirueta, duas piruetas, dale, dale
        </motion.h2>
      </div>
      <div
        id="skills"
        style={{
          height: '100vh',
          width: '100vw',
          color: 'white',
          background: 'blue',
        }}
      >
        <h1>Uma pirueta, duas piruetas, dale, dale</h1>
      </div>
      <div
        id="projects"
        style={{ height: '100vh', width: '100vw', background: 'yellow' }}
      >
        <h1>Uma pirueta, duas piruetas, dale, dale</h1>
      </div>
      <div
        id="experience"
        style={{ height: '100vh', width: '100vw', background: 'pink' }}
      >
        <h1>Uma pirueta, duas piruetas, dale, dale</h1>
      </div>
      <div
        id="contact"
        style={{ height: '100vh', width: '100vw', background: 'orange' }}
      >
        <h1>Uma pirueta, duas piruetas, dale, dale</h1>
      </div>
    </Container>
  )
}
