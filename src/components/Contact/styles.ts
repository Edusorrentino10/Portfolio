import { styled } from '@/styles'

export const ContactContainer = styled('section', {
  width: '100%',
  background: '$primary',
  margin: 'auto',
  marginTop: '8vh',
  marginBottom: '6vh',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  color: '$tertiary',

  '@media (max-width: 1055px)': {
    gap: '15px',
  },
})

export const AboutTitle = styled('h1', {})

export const TopicTexts = styled('span', {
  marginLeft: '35px',
  color: '$tertiary',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})
