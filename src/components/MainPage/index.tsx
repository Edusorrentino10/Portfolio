import { useLanguage } from '@/hooks/useLanguage'
import {
  ArrowDown,
  ArrowDownStyles,
  ButtonBox,
  FlexBox,
  FlexDiv,
  HomeContainer,
  JobDescription,
  LottieStyles,
  Name,
  PhosphorSocialStyles,
  WelcomeMessage,
  WelcomeTitle,
} from './styles'
import { LinkedinLogo, GithubLogo, Envelope, CaretDown } from 'phosphor-react'
import { useTheme } from '@/contexts/useTheme'
import { darkTheme } from '@/styles/themes/dark'
import Link from 'next/link'
import Lottie from 'lottie-react'
import SphereAnimation from '@/animations/sphere.json'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

interface MainPageProps {
  toggleSidebar: boolean
}

export function MainPage({ toggleSidebar }: MainPageProps) {
  const { theme, isDark } = useTheme()
  const { t } = useLanguage()

  const [name] = useTypewriter({
    words: ['Eduardo Sorrentino Vieira'],
    typeSpeed: 80,
    loop: 1,
  })

  return (
    <HomeContainer id="home">
      <FlexDiv>
        <Lottie
          className={LottieStyles({ isDark })}
          animationData={SphereAnimation}
          loop={true}
        />
        <WelcomeTitle>{t('welcome')}</WelcomeTitle>
        <Name>
          {name}
          <span style={{ color: '#DAA520' }}>
            <Cursor cursorStyle="|" />
          </span>
        </Name>
        <div>
          <JobDescription>{t('job')}</JobDescription>
        </div>
        <WelcomeMessage>{t('welcome-message')}</WelcomeMessage>
        <FlexBox>
          <Link
            href="https://www.linkedin.com/in/eduardo-sorrentino/"
            target="_blank"
          >
            <ButtonBox>
              <LinkedinLogo
                className={PhosphorSocialStyles}
                size={23}
                weight="bold"
                color={theme === darkTheme ? '#f4f4f4' : '#242424'}
              />
              <span>Linkedin</span>
            </ButtonBox>
          </Link>
          <Link href="https://github.com/Edusorrentino10" target="_blank">
            <ButtonBox>
              <GithubLogo
                className={PhosphorSocialStyles}
                size={23}
                weight="bold"
                color={theme === darkTheme ? '#f4f4f4' : '#242424'}
              />
              <span>Github</span>
            </ButtonBox>
          </Link>
          <Link href="mailto:eduardo.sorrentino5@gmail.com">
            <ButtonBox>
              <Envelope
                className={PhosphorSocialStyles}
                size={23}
                weight="bold"
                color={theme === darkTheme ? '#f4f4f4' : '#242424'}
              />
              <span>E-mail</span>
            </ButtonBox>
          </Link>
        </FlexBox>
      </FlexDiv>
      <Link href="#about">
        <ArrowDown toggleSidebar={toggleSidebar}>
          <CaretDown
            className={ArrowDownStyles}
            size={40}
            weight="bold"
            color={theme === darkTheme ? '#f4f4f4' : '#242424'}
          />
        </ArrowDown>
      </Link>
    </HomeContainer>
  )
}
