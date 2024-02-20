import { styled } from '../../styles/stitches.config'

export const Header1 = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70px',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const Header2 = styled('div', {
  width: '100vw',
  height: '70px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '1000',
  background: '#101010',
  position: 'fixed',

  '@media (max-width: 768px)': {
    width: '100%',
  },
})

export const Header3 = styled('div', {
  width: 600,
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  zIndex: '1000',
  position: 'fixed',

  img: {
    width: '185px',
    height: 'auto',
  },

  '@media (max-width: 768px)': {
    width: '100%',
    padding: '0 12px',
  },
})
