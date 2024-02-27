import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

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
