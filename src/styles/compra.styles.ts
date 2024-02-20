import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  maxWidth: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  alignItems: 'center',
})

export const Box1 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#191919',
  borderRadius: 20,
  padding: '1rem',
  gap: '.8rem',
})
