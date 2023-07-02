import { css, keyframes, styled } from '@/styles'

export const FlagsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '6px',
  alignItems: 'center',
})

const rotate360 = keyframes({
  '0%': { transform: 'rotate(0)' },
  '100%': { transform: 'rotate(-360deg)' },
})

export const ArrowCircleStyles = css({
  cursor: 'pointer',
  animation: `${rotate360} 600ms`,

  '@media (max-width: 930px)': {
    width: '16px',
  },
}).toString()

export const FlagStyles = css({
  cursor: 'pointer',

  '@media (max-width: 930px)': {
    width: '35px',
  },
}).toString()
