import { styled } from './stitches.config'
import { keyframes } from '@stitches/react'

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
  gap: '.5rem',
})

export const Check = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5rem',
})

export const Check2 = styled('div', {
  textAlign: 'left',
  color: '#E0E0E0',

  h3: {
    fontSize: '1.1em',
    fontWeight: '500',
  },

  p: {
    fontSize: '.8em',
  },
})

export const Separator = styled('div', {
  width: '100%',
  height: '1px',

  variants: {
    color: {
      primary: {
        background: '#CCCCCC50',
      },
      secondary: {
        background: '#CCCCCC20',
      },
    },
  },

  defaultVariants: {
    color: 'primary', // Definindo 'primary' como a variante padrão
  },
})

export const Box2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#101010',
  borderRadius: '.375rem',
  padding: '10px',
  gap: '1rem',
})

export const SpanContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  textAlign: 'left',

  p: {},

  span: {
    background: '#198754',
    borderRadius: '.375rem',
    padding: '.35em .65em',
    fontWeight: '700',
    fontSize: '.75em',
    marginRight: '.3rem',
  },
})

export const InputContainer = styled('div', {
  width: '100%',
  display: 'flex',

  input: {
    width: '100%',
    padding: '.375rem .75rem',
    border: '1px solid #202020 ',
    borderRadius: '.375rem',
    fontSize: '1rem',
    fontWeight: '400',
    outline: 'none',
    appearance: 'none',
    background: '#0e0e0e',
    color: '#212529',
  },
})

export const Copiar = styled('button', {
  color: '#fff',
  padding: '.375rem .75rem',
  background: '#198754',
  fontSize: '1rem',
  fontWeight: '600',
  borderTopRightRadius: '.375rem',
  borderBottomRightRadius: '.375rem',
})

export const Alert = styled('p', {
  padding: '.5rem',
  borderRadius: '.375rem',
  fontSize: '.8em',
  fontWeight: '400',

  svg: {
    paddingTop: '.4rem',
    flexShrink: 0,
  },

  variants: {
    color: {
      yellow: {
        color: '#664d03',
        background: '#ffe69c',
        textAlign: 'left',
      },
      blue: {
        color: '#055160',
        background: '#CFF4FC',
        textAlign: 'center',
      },
    },
  },
})

export const PagamentoCheck = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '.3rem',
  padding: '.375rem .75rem',
  borderRadius: '.375rem',
  color: '#fff',
  background: '#198754',
  fontSize: '1rem',
  fontWeight: '600',
  textDecoration: 'none',
  cursor: 'pointer',
})

export const Escritas = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '.5rem',
  color: '#E5E5E5',

  h5: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.25rem',
    fontWeight: '500',
  },

  p: {
    fontSize: '.8em',
  },
})

export const Detalhes = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '.3rem',
  color: '#E5E5E5',
  fontSize: '.9em',

  p: {
    fontSize: '.9em',
    color: '#E5E5E5',
    opacity: '.5',
  },
})

export const Detalhes1 = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '.1rem',
  fontSize: '.9em',
  color: '#E5E5E5',
  opacity: '.75',
})

export const Info1 = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '.3rem',
  color: '#E5E5E5',

  h4: {
    fontWeight: '500',
    fontSize: '15px',
  },

  span: {
    fontSize: '.9em',
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

export const Timer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',

  p: {
    fontSize: '16px',
    color: '#e5e5e5',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '1.3em',
  },
})

export const ProgressBar = styled('div', {
  width: '100%',
  height: 16,
  backgroundColor: '#191b1d',
  borderRadius: '.375rem',
  overflow: 'hidden',
})

export const Progress = styled('div', {
  height: 16,
  backgroundColor: '#DC3545',
})

export const AnimPic = keyframes({
  from: { transform: 'scale(1.0)' },
  to: { transform: 'scale(1.2)' },
})
