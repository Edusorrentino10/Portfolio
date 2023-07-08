import { useLanguage } from '@/hooks/useLanguage'
import {
  BoxDescription,
  FlexBox,
  GithubBox,
  ImagesStyles,
  LinkBox,
  NextStylesResponsive,
  ProjectText,
  ProjectTitle,
  ProjectsContainer,
  ResponsiveGap,
  ResponsiveShortImageProject,
  TechStyles,
} from './styles'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import intercambyusSVG from '@/assets/intercambyus.svg'
import financialSystemSVG from '@/assets/financialSystem.svg'
import gallerySVG from '@/assets/Gallery.svg'
import multiStepSVG from '@/assets/MultiStep.svg'
import TsSVG from '@/assets/TS.svg'
import ReactSVG from '@/assets/REACT.svg'
import NextDarkSVG from '@/assets/NextDark.svg'
import NextLightSVG from '@/assets/NextLight.svg'
import StitchesSVG from '@/assets/STITCHES.svg'
import StyledComponentsSVG from '@/assets/StyledComponents.svg'
import firebaseSVG from '@/assets/FIREBASE.svg'
import { GithubLogo } from 'phosphor-react'
import { useTheme } from '@/contexts/useTheme'
import { Tooltip } from '@chakra-ui/react'

export function Projects() {
  const { t } = useLanguage()

  const { isDark } = useTheme()

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
    <ProjectsContainer id="projects">
      <motion.h1 ref={ref} animate={animation}>
        {t('projectsTitle')}
      </motion.h1>
      <FlexBox isReverse={true}>
        <Image className={ImagesStyles} src={intercambyusSVG} alt="" />
        <BoxDescription>
          <ProjectTitle>IntercamByUs</ProjectTitle>
          <ProjectText>{t('projectTextIntercambyus')}</ProjectText>
          <div className={ResponsiveGap}>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="https://intercambyus.netlify.app/"
              fontSize="sm"
            >
              <LinkBox href="https://intercambyus.netlify.app" target="_blank">
                https://intercambyus.netlify.app/
              </LinkBox>
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Github"
              fontSize="sm"
            >
              <GithubBox
                href="https://github.com/Edusorrentino10/IntercamByUs"
                target="_blank"
              >
                <GithubLogo
                  size={25}
                  color={isDark ? '#f4f4f4' : '#252525'}
                  weight="bold"
                />
              </GithubBox>
            </Tooltip>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="TypeScript"
              fontSize="sm"
            >
              <Image className={TechStyles} src={TsSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="React"
              fontSize="sm"
            >
              <Image className={TechStyles} src={ReactSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Next"
              fontSize="sm"
            >
              {isDark ? (
                <Image
                  className={`${TechStyles} ${NextStylesResponsive}`}
                  src={NextLightSVG}
                  alt=""
                />
              ) : (
                <Image
                  className={`${TechStyles} ${NextStylesResponsive}`}
                  src={NextDarkSVG}
                  alt=""
                />
              )}
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Stitches"
              fontSize="sm"
            >
              <Image className={TechStyles} src={StitchesSVG} alt="" />
            </Tooltip>
          </div>
        </BoxDescription>
      </FlexBox>
      <FlexBox isReverse={false}>
        <BoxDescription>
          <ProjectTitle>{t('projectTitleFinancial')}</ProjectTitle>
          <ProjectText>{t('projectTextFinancial')}</ProjectText>
          <div className={ResponsiveGap}>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="https://sorrentinofinancas.netlify.app/"
              fontSize="sm"
            >
              <LinkBox
                href="https://sorrentinofinancas.netlify.app/"
                target="_blank"
              >
                https://sorrentinofinancas.netlify.app/
              </LinkBox>
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Github"
              fontSize="sm"
            >
              <GithubBox
                href="https://github.com/Edusorrentino10/SistemaFinanceiro"
                target="_blank"
              >
                <GithubLogo
                  size={25}
                  color={isDark ? '#f4f4f4' : '#252525'}
                  weight="bold"
                />
              </GithubBox>
            </Tooltip>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="TypeScript"
              fontSize="sm"
            >
              <Image className={TechStyles} src={TsSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="React"
              fontSize="sm"
            >
              <Image className={TechStyles} src={ReactSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Styled Components"
              fontSize="sm"
            >
              <Image className={TechStyles} src={StyledComponentsSVG} alt="" />
            </Tooltip>
          </div>
        </BoxDescription>
        <ResponsiveShortImageProject isShorter={true}>
          <Image className={ImagesStyles} src={financialSystemSVG} alt="" />
        </ResponsiveShortImageProject>
      </FlexBox>
      <FlexBox isReverse={true}>
        <Image className={ImagesStyles} src={gallerySVG} alt="" />
        <BoxDescription>
          <ProjectTitle>{t('galleryTitle')}</ProjectTitle>
          <ProjectText>{t('galleryText')}</ProjectText>
          <div className={ResponsiveGap}>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="https://sorrentinogaleria.netlify.app/"
              fontSize="sm"
            >
              <LinkBox
                href="https://sorrentinogaleria.netlify.app/"
                target="_blank"
              >
                https://sorrentinogaleria.netlify.app/
              </LinkBox>
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Github"
              fontSize="sm"
            >
              <GithubBox
                href="https://github.com/Edusorrentino10/gallery"
                target="_blank"
              >
                <GithubLogo
                  size={25}
                  color={isDark ? '#f4f4f4' : '#252525'}
                  weight="bold"
                />
              </GithubBox>
            </Tooltip>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="TypeScript"
              fontSize="sm"
            >
              <Image className={TechStyles} src={TsSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="React"
              fontSize="sm"
            >
              <Image className={TechStyles} src={ReactSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Styled Components"
              fontSize="sm"
            >
              <Image className={TechStyles} src={StyledComponentsSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Firebase"
              fontSize="sm"
            >
              <Image className={TechStyles} src={firebaseSVG} alt="" />
            </Tooltip>
          </div>
        </BoxDescription>
      </FlexBox>
      <FlexBox isReverse={false}>
        <BoxDescription>
          <ProjectTitle>{t('multiStepTitle')}</ProjectTitle>
          <ProjectText>{t('multiStepText')}</ProjectText>
          <div className={ResponsiveGap}>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="https://sorrentinomultiform.netlify.app/"
              fontSize="sm"
            >
              <LinkBox
                href="https://sorrentinomultiform.netlify.app/"
                target="_blank"
              >
                https://sorrentinomultiform.netlify.app/
              </LinkBox>
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Github"
              fontSize="sm"
            >
              <GithubBox
                href="https://github.com/Edusorrentino10/multiform"
                target="_blank"
              >
                <GithubLogo
                  size={25}
                  color={isDark ? '#f4f4f4' : '#252525'}
                  weight="bold"
                />
              </GithubBox>
            </Tooltip>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}
          >
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="TypeScript"
              fontSize="sm"
            >
              <Image className={TechStyles} src={TsSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="React"
              fontSize="sm"
            >
              <Image className={TechStyles} src={ReactSVG} alt="" />
            </Tooltip>
            <Tooltip
              bg={isDark ? '#F4F4F4' : '#252525'}
              color={isDark ? '#252525' : '#F4F4F4'}
              label="Styled Components"
              fontSize="sm"
            >
              <Image className={TechStyles} src={StyledComponentsSVG} alt="" />
            </Tooltip>
          </div>
        </BoxDescription>
        <Image className={ImagesStyles} src={multiStepSVG} alt="" />
      </FlexBox>
    </ProjectsContainer>
  )
}
