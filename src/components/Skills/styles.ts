import { css, styled } from '@/styles'

export const SkillsContainer = styled('section', {
  width: '80%',
  background: '$primary',
  margin: 'auto',
  marginTop: '20vh',
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

export const FlexBoxes = css({
  display: 'flex',
  gap: '50px',
  flexWrap: 'wrap',

  '@media (max-width: 520px)': {
    justifyContent: 'center',
  },
}).toString()

export const SkillBox = styled('div', {
  padding: '22px',
  background: '$backgroundSkills',
  color: '$tertiary',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',

  '@media (max-width: 520px)': {
    padding: '16px',
  },
})

export const SkillText = styled('span', {
  color: '$tertiary',
  marginLeft: '35px',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})

export const FlexTags = css({
  marginTop: '6vh',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '40px',

  '@media (max-width: 1055px)': {
    fontSize: '20px',
  },

  '@media (max-width: 520px)': {
    justifyContent: 'center',
    gap: '30px',
  },
}).toString()

export const SkillTag = styled('span', {
  color: '$tertiary',
  padding: '6px 20px',
  borderRadius: '6px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.20)',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})
