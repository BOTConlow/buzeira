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
  background: '#00000035',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,
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

  '@media (max-width: 768px)': {
    width: '100%',
  },

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

export const ModalOverlay2 = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: '#00000035',
  backdropFilter: 'blur(10px)',
  zIndex: 1000,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const ModalContent2 = styled('div', {
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

  '@media (max-width: 768px)': {
    width: '100%',
  },

  h6: {
    width: '100%',
    fontSize: '1.25rem',
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

export const InputDiv2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '.5rem',

  label: {
    fontWeight: '600',
    fontSize: '.84em',
  },

  input: {
    width: '100%',
    appearance: 'none',
    outline: 'none',
    padding: '.375rem .75rem',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.05)',
    borderRadius: '10px',
    background: '#2b2b3d',
    border: '1px solid #434351',
    color: '#c9c9c9',
    fontSize: '1rem',
  },
})

export const Box3 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '10px',
  padding: '10px',
  borderRadius: '10px',
  background: '#101010',
})

export const Box4 = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexWrap: 'wrap',
  gap: '8px',
})

export const Box5 = styled('div', {
  width: '40%',
  minWidth: '130px',
  minHeight: '80px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px',
  borderRadius: '5px',
  background: 'rgba(0,0,0,.1)',
  cursor: 'pointer',
  position: 'relative',

  h3: {
    color: '#A1A1A1',
    fontWeight: '500',
    fontSize: 'calc(1.3rem + .6vw)',
  },

  p: {
    fontSize: '.8em',
    color: '#EDEDED',
    textTransform: 'uppercase',
  },

  small: {
    fontSize: '20px',
    color: '#212529',
  },

  variants: {
    popular: {
      true: {
        border: '2px solid #198754',
        position: 'relative',
        background: 'Black',

        h3: {
          fontSize: '1.8em',
        },

        '&::before': {
          content: '"Mais popular"',
          position: 'absolute',
          background: '#198754',
          padding: '4px',
          borderRadius: '20px',
          fontSize: '.8em',
          width: '110px',
          color: '#fff',
          zIndex: 2,
          top: '-14px',
        },
      },
    },
  },
})

export const Quant = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',

  input: {
    width: '45%',
    textAlign: 'center',
    padding: '6px 12px',
    borderRadius: '10px',
    fontSize: '1.4em',
    fontWeight: '600',
    background: '#0E0E0E',
    color: '#fff',
    border: '1px solid #202020  ',
    appearance: 'none',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
})

export const Participar = styled('button', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '8px 12px',
  gap: '30%',
  borderRadius: '.375rem',
  background: '#198754',
  color: '#fff',
  fontWeight: '600',
  fontSize: '1rem',

  '@media (max-width: 768px)': {
    gap: '14%',
  },

  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '.3rem',
  },
})

export const Footer = styled('footer', {
  width: '100vw',
  padding: '1rem',
  textAlign: 'center',
  background: '#191919',
  color: '#e0e0e0',
  fontSize: '.8em',
  lineHeight: '170%',
})

export const Alert = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '.3rem',
  padding: '8px',
  textAlign: 'left',
  borderRadius: '.375rem',

  svg: {
    flexShrink: 0,
  },

  span: {
    fontWeight: '500',
  },

  variants: {
    type: {
      one: {
        fontSize: '.9em',
        color: '#055160',
        background: '#CFF4FC',
        borderRadius: '1px solid #9eeaf9',
      },
      two: {
        fontSize: '.8em',
        color: '#664D03',
        background: '#FFF3CD',
      },
    },
  },
})

export const Continuar = styled('button', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px 12px',
  borderRadius: '.375rem',
  gap: '.2rem',
  background: '#0d6efd',
  color: '#fff',
  fontWeight: '600',
  fontSize: '1rem',

  variants: {
    color: {
      default: {
        background: '#0d6efd',
      },
      green: {
        background: '#198754',
      },
    },
  },
})

export const Mensagem = styled('div', {
  color: '#fff',
  borderRadius: '10px',
  fontWeight: '600',
  fontSize: '.7em',

  variants: {
    result: {
      sucess: {
        padding: '6px 12px',
        background: 'green',
      },
      error: {
        padding: '6px 12px',
        background: 'red',
      },
    },
  },
})
