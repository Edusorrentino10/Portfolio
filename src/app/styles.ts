import { styled } from '@/styles'

export const Container = styled('div', {
  backgroundColor: '$primary',
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden',
  overflowY: 'scroll',

  scrollBehavior: 'smooth',
  scrollPadding: '100px',

  /* width */
  '&::-webkit-scrollbar': {
    width: '10px',
  },

  /* Track */
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  /* Handle */
  '&::-webkit-scrollbar-thumb': {
    background: '#888',
  },

  /* Handle on hover */
  '&::-webkit-scrollbar-thumb:hover': {
    background: '#555555',
  },
})
