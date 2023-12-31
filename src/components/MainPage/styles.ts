import { css, keyframes, styled } from '@/styles'

export const HomeContainer = styled('main', {
  color: '$tertiary',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  paddingTop: '102px',
  overflow: 'hidden',
  backgroundImage:
    'linear-gradient(135deg, $backgroundHomeLeft 50%, $primary 50%)',

  '@media (max-width: 720px)': {
    paddingTop: '100px',
  },
})

export const FlexDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '5px',

  marginBottom: '150px',

  '@media (max-width: 720px)': {
    alignItems: 'center',
    gap: '8px',
  },

  '@media (max-width: 630px)': {
    marginLeft: '5%',
  },

  '@media (max-width: 550px)': {
    marginLeft: '7%',
    marginRight: '7%',
    gap: '5px',
  },

  '@media (max-width: 460px)': {
    marginLeft: '5%',
    marginRight: '5%',
  },
})

export const WelcomeTitle = styled('h3', {
  fontSize: '1.75rem',
  fontFamily: 'Roboto, sans-serif',
  lineHeight: 1.2,
  fontWeight: 400,
  textTransform: 'uppercase',
  zIndex: 1,

  marginLeft: '3px',
  paddingRight: '5px',

  '@media (max-width: 1055px)': {
    fontSize: '1.45rem',
  },

  '@media (max-width: 930px)': {
    fontSize: '1.3rem',
  },

  '@media (max-width: 830px)': {
    fontSize: '1.15rem',
    fontWeight: 'bold',
  },
})

export const Name = styled('h1', {
  fontSize: '4.75rem',
  color: '$secondary',
  fontFamily: 'Roboto, sans-serif',
  lineHeight: 1.25,
  textTransform: 'capitalize',
  padding: 0,
  zIndex: 1,

  '&::selection': {
    color: '$primary',
    background: '$secondary',
  },

  '@media (max-width: 1055px)': {
    fontSize: '4rem',
  },

  '@media (max-width: 930px)': {
    fontSize: '3.65rem',
  },

  '@media (max-width: 830px)': {
    fontSize: '3.3rem',
  },

  '@media (max-width: 720px)': {
    fontSize: '2.5rem',
    textTransform: 'uppercase',
  },

  '@media (max-width: 530px)': {
    fontSize: '1.4rem',
  },

  '@media (max-width: 400px)': {
    fontSize: '1.3rem',
  },

  '@media (max-width: 375px)': {
    fontSize: '1.2rem',
  },

  // '@media (max-width: 380px)': {
  //   fontSize: '1.6rem',
  // },

  // '@media (max-width: 365px)': {
  //   fontSize: '1.5rem',
  // },
})

export const JobDescription = styled('div', {
  fontSize: '2.15rem',
  fontFamily: 'Roboto, sans-serif',
  fontWeight: 700,
  position: 'relative',
  display: 'inline-block',
  textTransform: 'uppercase',

  color: '$primary',

  cursor: 'default',
  userSelect: 'none',

  marginTop: '5px',
  padding: '5px',

  span: {
    background: '$tertiary',
    padding: '10px',
    borderRadius: '2px',

    '@media (max-width: 550px)': {
      fontSize: '80%',
      padding: '6px',
    },
  },

  '@media (max-width: 1055px)': {
    fontSize: '1.9rem',
  },

  '@media (max-width: 930px)': {
    fontSize: '1.725rem',
  },

  '@media (max-width: 830px)': {
    fontSize: '1.5rem',
  },

  '@media (max-width: 720px)': {
    fontSize: '1.4rem',
  },

  '@media (max-width: 550px)': {
    fontSize: '1.3rem',
    marginTop: '0px',
  },

  '@media (max-width: 485px)': {
    fontSize: '1.2rem',
    // paddingBottom: '0px',
    // paddingLeft: '6px',
    // paddingRight: '6px',
  },

  '@media (max-width: 385px)': {
    fontSize: '1rem',
    // paddingBottom: '1px',
  },

  // '&:after': {
  //   content: '',
  //   borderRadius: '50%',
  //   width: '6px',
  //   paddingBottom: '6px',
  //   background: '$secondary',
  //   display: 'block',
  //   position: 'absolute',
  //   bottom: 12,
  //   right: 6,
  // },
})

export const WelcomeMessage = styled('p', {
  marginTop: '25px',
  maxWidth: '920px',
  paddingLeft: '5px',
  fontSize: '1.25rem',

  zIndex: 1,

  '@media (max-width: 1055px)': {
    fontSize: '1.05rem',
    maxWidth: '750px',
  },

  '@media (max-width: 930px)': {
    fontSize: '0.95rem',
    maxWidth: '750px',
  },

  '@media (max-width: 830px)': {
    fontSize: '0.875rem',
    maxWidth: '620px',
  },

  '@media (max-width: 720px)': {
    maxWidth: '530px',
  },

  '@media (max-width: 630px)': {
    maxWidth: '90%',
  },

  '@media (max-width: 550px)': {
    textAlign: 'center',
    marginTop: '30px',
  },

  '@media (max-width: 485px)': {
    maxWidth: '530px',
  },
})

export const FlexBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '40px',

  marginTop: '40px',
  zIndex: 1,

  '@media (max-width: 550px)': {
    gap: '20px',
  },
})

export const ButtonBox = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
  border: '2px solid $tertiary',
  borderRadius: '6px',
  padding: '6px 10px',
  cursor: 'pointer',

  '&:hover': {
    transition: '0.2s',
    background: '$buttonHover',
    borderColor: '$secondary',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },

  span: {
    paddingTop: '3px',
    fontSize: '0.725rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  '@media (max-width: 420px)': {
    gap: '4px',
    padding: '5px 8px',
  },

  '@media (max-width: 360px)': {
    gap: '2px',
    padding: '4px 7px',
  },
})

const flutter = keyframes({
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-13px)',
  },
  '100%': {
    transform: 'translateY(0px)',
  },
})

export const ArrowDown = styled('div', {
  display: 'flex',
  position: 'absolute',
  cursor: 'pointer',
  bottom: '25px',
  zIndex: 2,

  animation: `${flutter} 2.5s infinite`,

  '@media (max-width: 520px)': {
    bottom: '32px',
  },

  variants: {
    toggleSidebar: {
      true: {
        '@media (max-width: 770px)': {
          display: 'none',
        },
      },
      false: {
        display: 'flex',
      },
    },
  },
})

export const PhosphorSocialStyles = css({
  width: '23px',

  '@media (max-width: 1055px)': {
    width: '20px',
  },

  '@media (max-width: 930px)': {
    width: '18px',
  },
}).toString()

export const ArrowDownStyles = css({
  width: '40px',

  '@media (max-width: 1055px)': {
    width: '30px',
  },

  '@media (max-width: 930px)': {
    width: '27px',
  },

  '@media (max-width: 830px)': {
    width: '25px',
  },
}).toString()

export const LottieStyles = css({
  width: '120%',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 0,

  variants: {
    isDark: {
      true: {
        opacity: '0.35',
      },
      false: {
        opacity: '0.015',
      },
    },
  },

  '@media (max-width: 1585px)': {
    width: '130%',
  },

  '@media (max-width: 1500px)': {
    width: '140%',
  },

  '@media (max-width: 1275px)': {
    width: '150%',
  },

  '@media (max-width: 1055px)': {
    width: '160%',
  },

  '@media (max-width: 720px)': {
    width: '190%',
  },

  '@media (max-width: 620px)': {
    width: '220%',
  },

  '@media (max-width: 575px)': {
    width: '240%',
  },

  '@media (max-width: 520px)': {
    width: '260%',
  },

  '@media (max-width: 470px)': {
    width: '280%',
  },

  '@media (max-width: 430px)': {
    width: '300%',
  },

  '@media (max-width: 380px)': {
    width: '320%',
  },

  '@media (max-width: 350px)': {
    width: '330%',
  },
})

export const LastNameOptional = styled('span', {
  '@media (max-width: 720px)': {
    display: 'none',
  },

  '&::selection': {
    color: '$primary',
    background: '$secondary',
  },
})
