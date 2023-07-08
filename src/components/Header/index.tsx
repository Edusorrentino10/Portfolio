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
        <a onClick={handleMenuMobile} href="#home">
          <Image
            className={LogoStyles({ toggleSidebar })}
            src={LogoDarkTheme}
            alt=""
          />
        </a>
      ) : (
        <a onClick={handleMenuMobile} href="#home">
          <Image
            className={LogoStyles({ toggleSidebar })}
            src={LogoLightTheme}
            alt=""
          />
        </a>
      )}
      <FlexLinksStyles toggleSidebar={toggleSidebar}>
        <a onClick={handleMenuMobile} className={LinkStyles} href="#about">
          {t('about')}
        </a>
        <a onClick={handleMenuMobile} className={LinkStyles} href="#skills">
          {t('skills')}
        </a>
        <a onClick={handleMenuMobile} className={LinkStyles} href="#projects">
          {t('projects')}
        </a>
        <a onClick={handleMenuMobile} className={LinkStyles} href="#experience">
          {t('experience')}
        </a>
        <a onClick={handleMenuMobile} className={LinkStyles} href="#contact">
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
