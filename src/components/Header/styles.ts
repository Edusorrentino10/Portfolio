import { css, keyframes, styled } from '@/styles'

export const Header = styled('header', {
  backgroundColor: '$primary',
  color: '$tertiary',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  margin: 'auto',
  paddingLeft: '7%',
  paddingRight: '7%',
  position: 'fixed',
  height: '100px',
  zIndex: 5,

  boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.03)',

  variants: {
    toggleSidebar: {
      true: {
        '@media (max-width:770px)': {
          height: '100vh',
          alignItems: 'flex-start',
          transition: '0.5s',
        },
      },
    },
  },
})

export const ArrowCircleStyles = css({
  cursor: 'pointer',
}).toString()

const lineAnimation = keyframes({
  '0%': { width: '0%' },
  '100%': { width: '100%' },
})

export const LinkStyles = css({
  position: 'relative',
  display: 'inline-block',
  fontSize: '1.125rem',
  cursor: 'pointer',

  '&::after': {
    content: "''",
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '0%',
    height: '2px',
    borderRadius: '50px',
    backgroundColor: '$secondary',
    animation: `${lineAnimation} 500ms linear`,
    transition: 'width 300ms',
    willChange: 'width',
  },

  '&:hover::after': {
    width: '100%',
  },

  '@media (max-width:930px)': {
    fontSize: '1rem',
  },

  '@media (max-width:770px)': {
    fontSize: '1.25rem',
  },
}).toString()

export const LogoStyles = css({
  cursor: 'pointer',

  '@media (max-width:930px)': {
    width: '85px',
  },

  variants: {
    toggleSidebar: {
      true: {
        '@media (max-width:770px)': {
          marginTop: '8px',
        },
      },
    },
  },
})

export const FlexLinksStyles = styled('div', {
  display: 'flex',
  gap: '40px',

  '@media (max-width:930px)': {
    gap: '25px',
  },

  '@media (max-width:770px)': {
    display: 'none',
  },

  variants: {
    toggleSidebar: {
      true: {
        '@media (max-width:770px)': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          height: '100vh',

          position: 'absolute',
          left: '50%',
          top: '30px',
          transform: 'translateX(-50%)',
        },
      },
    },
  },
})

export const FlexFlagsStyles = styled('div', {
  display: 'flex',
  gap: '30px',
  minHeight: '50px',
  alignItems: 'center',

  '@media (max-width:930px)': {
    gap: '25px',
  },

  '@media (max-width:790px)': {
    gap: '20px',
  },

  '@media (max-width:770px)': {
    display: 'none',
  },

  variants: {
    toggleSidebar: {
      true: {
        '@media (max-width:770px)': {
          display: 'flex',
          justifyContent: 'center',
          gap: '60px',
          width: '100vw',
          position: 'absolute',
          left: 0,
          marginTop: '120px',
          paddingBottom: '45px',
          transition: '0.2s',
        },
      },
    },
  },
})

export const MenuIconStyles = css({
  display: 'none',
  cursor: 'pointer',

  '@media (max-width:770px)': {
    display: 'flex',
  },

  variants: {
    toggleSidebar: {
      true: {
        marginTop: '28px',
      },
    },
  },
})
