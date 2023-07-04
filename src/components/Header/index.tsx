'use client'

import { Switcher } from '../SwitchComponent'
import {
  FlexFlagsStyles,
  FlexLinksStyles,
  Header,
  LinkStyles,
  LogoStyles,
  MenuIconStyles,
} from './styles'
import Image from 'next/image'
import LogoLightTheme from '@/assets/logo-light.svg'
import LogoDarkTheme from '@/assets/logo-dark.svg'
import { FlagsLanguage } from '../FlagsLanguage'
import { useTheme } from '@/contexts/useTheme'
import { darkTheme } from '@/styles/themes/dark'
import Link from 'next/link'
import { useLanguage } from '@/hooks/useLanguage'
import { List } from 'phosphor-react'

interface HeaderProps {
  toggleSidebar: boolean
  handleMenuMobile: () => void
}

export function HeaderComponent({
  toggleSidebar,
  handleMenuMobile,
}: HeaderProps) {
  const { theme } = useTheme()
  const { t } = useLanguage()

  return (
    <Header toggleSidebar={toggleSidebar}>
      {theme === darkTheme ? (
        <Link href="#home">
          <Image
            className={LogoStyles({ toggleSidebar })}
            src={LogoDarkTheme}
            alt=""
          />
        </Link>
      ) : (
        <Link href="#home">
          <Image
            className={LogoStyles({ toggleSidebar })}
            src={LogoLightTheme}
            alt=""
          />
        </Link>
      )}
      <FlexLinksStyles toggleSidebar={toggleSidebar}>
        <a className={LinkStyles} href="#about">
          {t('about')}
        </a>
        <a className={LinkStyles} href="#skills">
          {t('skills')}
        </a>
        <a className={LinkStyles} href="#projects">
          {t('projects')}
        </a>
        <a className={LinkStyles} href="#experience">
          {t('experience')}
        </a>
        <a className={LinkStyles} href="#contact">
          {t('contact')}
        </a>
      </FlexLinksStyles>
      <FlexFlagsStyles toggleSidebar={toggleSidebar}>
        <Switcher />
        <FlagsLanguage />
      </FlexFlagsStyles>
      <List
        onClick={handleMenuMobile}
        className={MenuIconStyles({ toggleSidebar })}
        size={45}
        color={theme === darkTheme ? '#F4F4F4' : '#252525'}
        weight="bold"
      />
    </Header>
  )
}
