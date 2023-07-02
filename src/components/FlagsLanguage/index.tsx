import { ArrowsCounterClockwise } from 'phosphor-react'
import BrazilFlag from '@/assets/brazil.svg'
import USAFlag from '@/assets/usa.svg'
import Image from 'next/image'
import { ArrowCircleStyles, FlagsContainer } from './styles'
import { useTheme } from '@/contexts/useTheme'
import { darkTheme } from '@/styles/themes/dark'
import { FormEvent } from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export function FlagsLanguage() {
  const { theme } = useTheme()

  const { currentLang, handleChangeLanguage } = useLanguage()

  function handleToggleLanguage(event: FormEvent) {
    handleChangeLanguage(event)
    const button = document.getElementById('arrowLoop')
    if (button) {
      button.classList.add(ArrowCircleStyles)
      setTimeout(function () {
        button.classList.remove(ArrowCircleStyles)
      }, 600)
    }
  }

  return (
    <FlagsContainer>
      <ArrowsCounterClockwise
        id="arrowLoop"
        className={ArrowCircleStyles}
        size={20}
        color={theme === darkTheme ? '#f4f4f4' : '#242424'}
        onClick={handleToggleLanguage}
      />
      {currentLang === 'pt' ? (
        <Image
          style={{ cursor: 'pointer' }}
          src={BrazilFlag}
          width={40}
          alt=""
          onClick={handleToggleLanguage}
        />
      ) : (
        <Image
          style={{ cursor: 'pointer' }}
          src={USAFlag}
          width={40}
          alt=""
          onClick={handleToggleLanguage}
        />
      )}
    </FlagsContainer>
  )
}
