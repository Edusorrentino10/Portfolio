import { css, styled } from '@/styles'

export const FooterContainer = styled('div', {
  position: 'relative',
  backgroundColor: '$contactColor',
  overflowX: 'hidden',
  marginTop: '550px',

  '@media (max-width: 1500px)': {
    marginTop: '220px',
  },
})

export const Titles = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
})

export const SocialMidia = styled('div', {
  width: '30%',
  padding: '18px',
  position: 'relative',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$tertiary',
  textTransform: 'uppercase',
  borderBottom: '2px solid $primary',

  '@media (max-width:630px)': {
    width: '50%',
  },

  '@media (max-width:430px)': {
    width: '60%',
  },

  '&:before': {
    content: '',
    width: '95px',
    borderBottom: '2px solid $secondary',
    position: 'absolute',
    bottom: '-2px',
    left: '0',

    '@media (max-width:850px)': {
      width: '70px',
    },

    '@media (max-width:630px)': {
      width: '50px',
    },

    '@media (max-width:430px)': {
      width: '50px',
    },
  },
})

export const Email = styled('div', {
  width: '30%',
  borderBottom: '2px solid $primary',
  padding: '18px',
  position: 'relative',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '$tertiary',
  textTransform: 'uppercase',

  '&:before': {
    content: '',
    width: '95px',
    borderBottom: '2px solid $secondary',
    position: 'absolute',
    bottom: '-2px',
    left: '0',

    '@media (max-width:830px)': {
      width: '10px',
    },
  },
})

export const SocialMidiaContent = styled('div', {
  width: '390px',
  position: 'relative',
  textAlign: 'center',
  color: '$tertiary',

  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  justifyContent: 'space-around',
})

export const EmailContent = styled('div', {
  width: '390px',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
  textTransform: 'none',
  color: '#212124',

  label: {
    marginTop: '10px',
    marginBottom: '2px',
    fontSize: '0.875rem',
    color: '$tertiary',
  },

  input: {
    padding: '12px',
    borderRadius: '6px',
    border: '0',

    '&:disabled': {
      cursor: 'not-allowed',
    },
  },

  textarea: {
    padding: '10px',
    borderRadius: '4px',
    height: '180px',
    border: '1px solid #253A44',
  },

  '[type="submit"]': {
    background: '$secondary',
    fontWeight: 'bold',
    marginTop: '22px',
    cursor: 'pointer',
    color: '$primary',
  },

  '@media (max-width:1130px)': {
    paddingRight: '10px',
  },

  '@media (max-width:760px)': {
    p: {
      fontSize: '0.875rem',
    },

    label: {
      '&:first-child': {
        marginTop: '5px',
      },
    },

    input: {
      padding: '10px',
    },

    '[type="submit"]': {
      background: '$secondary',
      fontWeight: 'bold',
      fontSize: '0.875rem',
      marginTop: '22px',
      cursor: 'pointer',
      color: 'blue',
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '50px',
})

export const BoxMidia = styled('a', {
  cursor: 'pointer',
  backgroundColor: '$primary',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '8px',

  '&:hover': {
    backgroundColor: '$secondary',
    transition: '0.2s',
  },
})

export const CopyrightSection = styled('div', {
  padding: '10px',
  textAlign: 'center',
  marginTop: '50px',
  border: '1px solid $primary',
  fontSize: '0.875rem',
  color: '$tertiary',

  '@media (max-width:760px)': {
    fontSize: '0.75rem',
  },
})

export const MidiaContent = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '25px',
})

export const MidiaStyles = css({
  width: '40px',

  '@media (max-width:630px)': {
    width: '35px',
  },

  '@media (max-width:430px)': {
    width: '35px',
  },
}).toString()
