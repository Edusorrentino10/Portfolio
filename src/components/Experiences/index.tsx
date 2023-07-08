import { useLanguage } from '@/hooks/useLanguage'
import {
  ExpDescription,
  ExpJob,
  ExpPeriod,
  ExpTitle,
  ExperiencesContainer,
  Flex,
  Grid,
  GridLeft,
  GridRight,
} from './styles'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import mainstreamSVG from '@/assets/Mainstream.svg'
import githubSVG from '@/assets/Github.svg'

export function Experiences() {
  const { t } = useLanguage()

  const { ref, inView } = useInView()
  const animation = useAnimation()

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
    }
    if (!inView) {
      animation.start({ y: '10vh' }) // Altere para um valor maior que a altura da tela
    }
  }, [animation, inView])

  return (
    <ExperiencesContainer ref={ref} id="experience">
      <motion.h1 animate={animation}>{t('experienceTitle')}</motion.h1>
      <Flex>
        <Grid className={GridLeft}>
          <Image
            style={{ margin: 'auto', marginBottom: '5px', width: '75px' }}
            src={mainstreamSVG}
            alt=""
          />
          <ExpTitle>Mainstream IT</ExpTitle>
          <ExpJob>{t('job')}</ExpJob>
          <ExpPeriod>{t('mainstreamPeriod')}</ExpPeriod>
          <ExpDescription>{t('mainstreamDescription')}</ExpDescription>
        </Grid>
        <Grid className={GridRight}>
          <Image
            style={{ margin: 'auto', marginBottom: '16px' }}
            src={githubSVG}
            alt=""
          />
          <ExpTitle>{t('expTitleGithub')}</ExpTitle>
          <ExpJob>{t('expTextGithub')}</ExpJob>
          <ExpPeriod>{t('expPeriodGithub')}</ExpPeriod>
          <ExpDescription>{t('githubDescription')}</ExpDescription>
        </Grid>
      </Flex>
    </ExperiencesContainer>
  )
}
