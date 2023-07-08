import { useLanguage } from '@/hooks/useLanguage'
import { AboutContainer, TopicTexts } from './styles'
import { DiamondsFour } from 'phosphor-react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

export function AboutMe() {
  const { t } = useLanguage()

  const { ref, inView } = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.2,
        },
      })

      animation2.start({
        y: 0,
        transition: {
          type: 'spring',
          duration: 2,
          bounce: 0.1,
        },
      })
    }
    if (!inView) {
      animation.start({ y: '10vh' }) // Altere para um valor maior que a altura da tela
      animation2.start({ y: '10vh' }) // Altere para um valor maior que a altura da tela
    }
  }, [animation, animation2, inView])

  return (
    <AboutContainer ref={ref} id="about">
      <motion.h1 animate={animation}>{t('aboutTitle')}</motion.h1>
      <motion.div animate={animation2} style={{ position: 'relative' }}>
        <DiamondsFour
          style={{ position: 'absolute' }}
          size={20}
          color="#daa520"
          weight="bold"
        />
        <TopicTexts>{t('topic1aboutme')}</TopicTexts>
      </motion.div>
      <motion.div animate={animation2} style={{ position: 'relative' }}>
        <DiamondsFour
          style={{ position: 'absolute' }}
          size={20}
          color="#daa520"
          weight="bold"
        />
        <TopicTexts>{t('topic2aboutme')}</TopicTexts>
      </motion.div>
      <motion.div animate={animation2} style={{ position: 'relative' }}>
        <DiamondsFour
          style={{ position: 'absolute' }}
          size={20}
          color="#daa520"
          weight="bold"
        />
        <TopicTexts>{t('topic3aboutme')}</TopicTexts>
      </motion.div>
      <motion.div animate={animation2} style={{ position: 'relative' }}>
        <DiamondsFour
          style={{ position: 'absolute' }}
          size={20}
          color="#daa520"
          weight="bold"
        />
        <TopicTexts>{t('topic4aboutme')}</TopicTexts>
      </motion.div>
    </AboutContainer>
  )
}
