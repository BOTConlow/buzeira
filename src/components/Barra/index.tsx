import { ProgressBar, Progress, Timer } from './styles'
import { useState, useEffect } from 'react'

export default function Barra() {
  const [timeLeft, setTimeLeft] = useState(600) // 5 minutos em segundos

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft - 1)

      if (timeLeft <= 0) {
        clearInterval(interval)
        // O tempo acabou, você pode adicionar código de redirecionamento ou qualquer outra ação aqui
      }
    }, 1000) // Atualize a cada segundo

    return () => clearInterval(interval)
  }, [timeLeft])

  const progressPercent = ((600 - timeLeft) / 600) * 100

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
    seconds,
  ).padStart(2, '0')}`

  return (
    <>
      <Timer>
        <p>
          Você tem <span>{formattedTime}</span> para pagar
        </p>
        <ProgressBar>
          <Progress style={{ width: `${progressPercent}%` }} />
        </ProgressBar>
      </Timer>
    </>
  )
}
