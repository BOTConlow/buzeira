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
  gap: '.5rem',
})

export const Box2 = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '10px',
  borderRadius: '.375rem',
  background: '#101010',
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

export const Cotas = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.3rem',
  padding: '.375rem .75rem',
  borderRadius: '.375rem',
  color: '#fff',
  background: '#198754',
  fontSize: '1rem',
  fontWeight: '600',
  textDecoration: 'none',
})
