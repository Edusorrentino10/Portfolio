import { styled } from '@/styles'

export const AboutContainer = styled('section', {
  width: '80%',
  background: '$primary',
  margin: 'auto',
  marginTop: '8vh',
  marginBottom: '6vh',

  display: 'flex',
  flexDirection: 'column',
  gap: '10px',

  '@media (max-width: 1055px)': {
    gap: '15px',
  },

  '@media (max-width: 520px)': {
    width: '85%',
  },

  h1: {
    color: '$secondary',
    fontSize: '4.5rem',
    marginBottom: '4vh',

    '&::selection': {
      color: '$primary',
      background: '$secondary',
    },

    '@media (max-width: 1055px)': {
      fontSize: '3.825rem',
    },

    '@media (max-width: 930px)': {
      fontSize: '3.5rem',
    },

    '@media (max-width: 830px)': {
      fontSize: '3.2rem',
    },

    '@media (max-width: 720px)': {
      fontSize: '2.6rem',
    },

    '@media (max-width: 520px)': {
      fontSize: '2.2rem',
    },
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
