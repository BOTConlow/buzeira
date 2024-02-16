import { keyframes } from '@stitches/react'
import { styled } from './stitches.config'

export const MainContainer = styled('main', {
  maxWidth: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto',
  alignItems: 'center',
})

export const Header1 = styled('div', {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#101010',
  padding: '1rem',
})

export const Header2 = styled('div', {
  width: 600,
  display: 'flex',
  justifyContent: 'left',
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
  gap: '.5rem',
})

export const ImageBox1 = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
})

export const ImageBox2 = styled('div', {
  width: '100%',
  height: 290,
  overflow: 'hidden',
  position: 'relative !important',

  img: {
    width: '100%',
    height: 290,
    objectFit: 'cover',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})

export const Adquira = styled('div', {
  background: '#198754BF',
  fontSize: '.7em',
  padding: '4px 8px',
  positon: 'absolute !important',
  bottom: '5rem',
  left: '3rem',
  zIndex: '1000',
})

export const ImageBox3 = styled('div', {
  width: '100%',
  padding: '8px 8px',
  textAlign: 'left',
  background: '#0f0f0f',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,

  a: {
    textDecoration: 'none',
    color: '#fff',
  },

  p: {
    fontSize: '.75em',
    color: '#FFFFFFB3',
  },
})

export const Preco = styled('div', {
  width: '100%',
  textAlign: 'center',

  p: {
    fontSize: '.9rem',
    color: '#E0E0E0',
  },
})

export const Redes1 = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Redes2 = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.2rem',

  span: {
    boxShadow: '0 4px 3px rgba(0,0,0,.08)',
    fontWeight: '600',
    fontSize: '.8em',
    background: '#8c8c8c',
    padding: '4px 8px',
    borderRadius: '0.25rem',
    color: '#212529',
    transition: '300ms',

    '&:hover': {
      color: '#fff',
      cursor: 'pointer',
    },
  },

  p: {
    fontSize: '.9em',
    color: '#e0e0e0',
  },
})

export const Headline = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '.3rem',

  h1: {
    fontSize: '1.3em',
    fontWeight: '600',
  },

  p: {
    paddingTop: '11px',
    fontSize: '.9em',
    color: '#FFFFFF80',
  },
})

export const Box2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px',
  padding: '10px',
  borderRadius: '10px',
  background: '#101010',

  button: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: '.8em',
    background: '#198754',
    padding: '2px 8px',
    borderRadius: '3px',
  },
})

export const Vernumber = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3px',
  padding: '4px 8px',
  borderRadius: '0.25rem',
  background: '#6C757D',
  fontWeight: '600',
  fontSize: '0.875rem',
  cursor: 'pointer',
})

export const ModalOverlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const FadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const ModalContent = styled('div', {
  width: 500,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  textAlign: 'center',
  padding: '1rem',
  gap: '.5rem',
  backgroundColor: '#101010',
  color: '#DADADA',
  animation: `${FadeIn} 0.3s ease`,

  h6: {
    width: '100%',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#DADADA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const InputDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  input: {
    width: '100%',
    outline: 'none',
    padding: '6px 12px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },

  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '7.5px 12px',
    background: '#6C757D',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
  },
})
