import { useLanguage } from '@/hooks/useLanguage'
import {
  FlexBoxes,
  FlexTags,
  SkillBox,
  SkillTag,
  SkillText,
  SkillsContainer,
} from './styles'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import HtmlSvg from '@/assets/HTML.svg'
import CssSvg from '@/assets/CSS.svg'
import JsSvg from '@/assets/JS.svg'
import TsSvg from '@/assets/TS.svg'
import ReactSvg from '@/assets/REACT.svg'
import NextLightSvg from '@/assets/NextLight.svg'
import NextDarkSvg from '@/assets/NextDark.svg'
import Image from 'next/image'
import { Tooltip } from '@chakra-ui/react'
import { useTheme } from '@/contexts/useTheme'
import { BookOpen } from 'phosphor-react'

export function Skills() {
  const { t } = useLanguage()

  const { isDark } = useTheme()

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
    <SkillsContainer ref={ref} id="skills">
      <motion.h1 animate={animation}>{t('skillsTitle')}</motion.h1>
      <motion.div animate={animation2} className={FlexBoxes}>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="HTML"
            fontSize="sm"
          >
            <Image src={HtmlSvg} alt="" />
          </Tooltip>
        </SkillBox>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="CSS"
            fontSize="sm"
          >
            <Image src={CssSvg} alt="" />
          </Tooltip>
        </SkillBox>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="JavaScript"
            fontSize="sm"
          >
            <Image src={JsSvg} alt="" />
          </Tooltip>
        </SkillBox>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="TypeScript"
            fontSize="sm"
          >
            <Image src={TsSvg} alt="" />
          </Tooltip>
        </SkillBox>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="React"
            fontSize="sm"
          >
            <Image src={ReactSvg} alt="" />
          </Tooltip>
        </SkillBox>
        <SkillBox>
          <Tooltip
            bg={isDark ? '#F4F4F4' : '#252525'}
            color={isDark ? '#252525' : '#F4F4F4'}
            label="Next"
            fontSize="sm"
          >
            {isDark ? (
              <Image src={NextLightSvg} alt="" />
            ) : (
              <Image src={NextDarkSvg} alt="" />
            )}
          </Tooltip>
        </SkillBox>
      </motion.div>
      <motion.div
        animate={animation2}
        style={{ marginTop: '6vh', display: 'flex' }}
      >
        <BookOpen
          style={{ position: 'absolute' }}
          size={20}
          color="#daa520"
          weight="bold"
        />
        <SkillText>{t('skillsTexts')}</SkillText>
      </motion.div>
      <motion.div animate={animation2} className={FlexTags}>
        <SkillTag style={{ background: '#E76FF1' }}>Styled-Components</SkillTag>
        <SkillTag style={{ background: '#ffffff5e' }}>Stitches</SkillTag>
        <SkillTag style={{ background: '#ec5990f2' }}>React-Hook-Form</SkillTag>
        <SkillTag style={{ background: '#ac9de7f2' }}>Figma</SkillTag>
        <SkillTag style={{ background: '#00ddb3f2' }}>Lottie</SkillTag>
        <SkillTag style={{ background: '#f546aaf2' }}>Framer Motion</SkillTag>
        <SkillTag style={{ background: '#7430f9f2' }}>Bootstrap</SkillTag>
        <SkillTag style={{ background: '#dbd5f2cc' }}>Radix</SkillTag>
        <SkillTag style={{ background: '#f44d27f2' }}>Git</SkillTag>
      </motion.div>
    </SkillsContainer>
  )
}
