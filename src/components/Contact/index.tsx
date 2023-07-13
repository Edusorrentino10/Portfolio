import { useLanguage } from '@/hooks/useLanguage'
import {
  BoxMidia,
  Content,
  CopyrightSection,
  FooterContainer,
  MidiaContent,
  MidiaStyles,
  SocialMidia,
  SocialMidiaContent,
  Titles,
} from './styles'
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from 'phosphor-react'
import { useTheme } from '@/contexts/useTheme'

export function Contact() {
  const { t } = useLanguage()

  const { isDark } = useTheme()

  return (
    <FooterContainer id="contact">
      <Titles>
        <SocialMidia>{t('socialMidia')}</SocialMidia>
      </Titles>
      <Content>
        <SocialMidiaContent>
          <MidiaContent>
            <BoxMidia
              href="https://www.linkedin.com/in/eduardo-sorrentino/"
              target="_blank"
            >
              <LinkedinLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia href="https://github.com/Edusorrentino10" target="_blank">
              <GithubLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia
              href="https://web.whatsapp.com/send?phone=5527997947148"
              target="_blank"
            >
              <WhatsappLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia href="mailto:eduardo.sorrentino5@gmail.com">
              <Envelope
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
          </MidiaContent>
          <p>{t('address')}</p>
        </SocialMidiaContent>
      </Content>
      <CopyrightSection>
        <span>Copyright © 2023 - Eduardo Sorrentino.</span>
      </CopyrightSection>
    </FooterContainer>
  )
}
