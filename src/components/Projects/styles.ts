import { css, styled } from '@/styles'

export const ProjectsContainer = styled('section', {
  width: '80%',
  background: '$primary',
  margin: 'auto',
  marginTop: '22vh',
  marginBottom: '6vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
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
    '&::selection': {
      color: '$primary',
      background: '$secondary',
    },

    '@media (max-width: 1055px)': {
      fontSize: '3.825rem',
      marginBottom: '-80px',
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

export const FlexBox = styled('div', {
  color: '$tertiary',
  display: 'flex',
  alignItems: 'center',
  marginTop: '130px',
  gap: '170px',

  variants: {
    isReverse: {
      true: {
        '@media (max-width: 1120px)': {
          flexDirection: 'column-reverse',
        },
      },
      false: {
        '@media (max-width: 1120px)': {
          flexDirection: 'column',
        },
      },
    },
  },

  '@media (max-width: 1250px)': {
    gap: '140px',
  },

  '@media (max-width: 1150px)': {
    gap: '120px',
  },

  '@media (max-width: 1120px)': {
    gap: '20px',
  },
})

export const ImagesStyles = css({
  width: '460px',

  '@media (max-width: 1250px)': {
    width: '430px',
  },

  '@media (max-width: 720px)': {
    width: '400px',
  },

  '@media (max-width: 520px)': {
    width: '370px',
  },
}).toString()

export const ResponsiveShortImageProject = styled('div', {
  variants: {
    isShorter: {
      true: {
        marginTop: '67px',
      },
    },
  },
})

export const BoxDescription = styled('div', {
  maxWidth: '600px',

  '@media (max-width: 1250px)': {
    width: '570px',
  },

  '@media (max-width: 1150px)': {
    width: '540px',
  },

  '@media (max-width: 640px)': {
    width: '80vw',
  },
})

export const ProjectTitle = styled('h2', {
  fontSize: '2.75rem',
  color: '#DAB65A',
  textAlign: 'center',
  marginBottom: '2vh',

  '@media (max-width: 1350px)': {
    fontSize: '2.5rem',
  },

  '@media (max-width: 1300px)': {
    fontSize: '2.3rem',
  },

  '@media (max-width: 830px)': {
    fontSize: '2.1rem',
  },

  '@media (max-width: 720px)': {
    fontSize: '1.9rem',
  },

  '@media (max-width: 520px)': {
    fontSize: '1.7rem',
  },
})

export const ProjectText = styled('span', {
  display: 'block',
  paddingBottom: '30px',
  textAlign: 'center',

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },
})

export const LinkBox = styled('a', {
  padding: '12px 20px',
  borderRadius: '4px',
  color: '$secondary',
  fontWeight: 'bold',
  background: '$backgroundSkills',

  '&:hover': {
    opacity: '0.93',
  },

  '@media (max-width: 1055px)': {
    fontSize: '0.925rem',
  },

  '@media (max-width: 520px)': {
    fontSize: '0.9rem',
    padding: '8px 15px',
  },
})

export const GithubBox = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  padding: '12px',
  cursor: 'pointer',

  background: '$backgroundGithub',

  '&:hover': {
    opacity: '0.93',
  },

  '@media (max-width: 520px)': {
    padding: '8px',
  },
})

export const TechStyles = css({
  width: '45px',
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center',

  '@media (max-width: 520px)': {
    width: '35px',
  },
}).toString()

export const NextStylesResponsive = css({
  width: '42px',

  '@media (max-width: 520px)': {
    width: '33px',
  },
}).toString()

export const ResponsiveGap = css({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',

  '@media (max-width: 520px)': {
    gap: '8px',
  },
}).toString()
