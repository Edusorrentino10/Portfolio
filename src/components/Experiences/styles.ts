import { css, styled } from '@/styles'

export const ExperiencesContainer = styled('section', {
  width: '80%',
  background: '$primary',
  margin: 'auto',
  marginTop: '13vh',
  marginBottom: '6vh',
  position: 'relative',

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

export const Flex = styled('div', {
  marginTop: '7vh',
  position: 'relative',
  width: '80vw',

  '@media (max-width: 1500px)': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '12vh',
  },
})

export const Grid = styled('div', {
  display: 'grid',
  color: '$tertiary',
  maxWidth: '500px',
  textAlign: 'center',
  position: 'absolute',

  '@media (max-width: 1500px)': {
    position: 'relative',
    margin: 'auto',
  },
})

export const GridLeft = css({
  left: '5%',
  top: 0,

  '@media (max-width: 1500px)': {
    left: 0,
  },
}).toString()

export const GridRight = css({
  right: '5%',
  top: 0,

  '@media (max-width: 1500px)': {
    right: 0,
  },
}).toString()

export const ExpTitle = styled('span', {
  fontWeight: 'bold',
  fontSize: '1.5rem',

  '@media (max-width: 1055px)': {
    fontSize: '1.3rem',
  },
})

export const ExpJob = styled('span', {
  fontSize: '1.125rem',
  opacity: '0.67',
  marginTop: '3px',

  '@media (max-width: 1055px)': {
    fontSize: '1rem',
  },
})

export const ExpPeriod = styled('span', {
  opacity: '0.67',
  marginTop: '5px',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})

export const ExpDescription = styled('span', {
  marginTop: '20px',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})
