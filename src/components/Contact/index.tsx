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
            <BoxMidia>
              <LinkedinLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia>
              <GithubLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia>
              <WhatsappLogo
                className={MidiaStyles}
                size={40}
                color={isDark ? '#F4F4F4' : ' #252525'}
                weight="bold"
              />
            </BoxMidia>
            <BoxMidia>
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
