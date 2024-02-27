import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Montserrat } from 'next/font/google'

import Header from '@/components/Header'
import { CheckCircle } from 'phosphor-react'
import {
  Box1,
  Box2,
  Check,
  Check2,
  Cotas,
  MainContainer,
} from '@/styles/cotas.styles'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const gerarNumerosAleatorios = (quantidade: number) => {
  const numeros: number[] = []
  for (let i = 0; i < quantidade; i++) {
    const numeroAleatorio = Math.floor(1000000 + Math.random() * 9000000) // Garante 7 dígitos
    numeros.push(numeroAleatorio)
  }
  return numeros
}

export default function Compra() {
  const router = useRouter()
  const { quantidade } = router.query
  const [numerosAleatorios, setNumerosAleatorios] = useState<number[]>([])

  useEffect(() => {
    if (quantidade) {
      const numeros = gerarNumerosAleatorios(Number(quantidade))
      setNumerosAleatorios(numeros)
    }
  }, [quantidade])

  return (
    <>
      <Head>
        <title>Alto Prêmio</title>
        <meta name="Alto Prêmio" content="Mansão, lamborghni e bmw 1250" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.jpg" />
      </Head>

      <MainContainer className={Vietnam.className}>
        <Header />
        <Box1>
          <Check>
            <CheckCircle size={50} color="#edb707" />
            <Check2>
              <h3>Minhas Cotas!</h3>
              <p>Suas cotas estão prontas!</p>
            </Check2>
          </Check>
          <Box2>
            {numerosAleatorios.map((numero, index) => (
              <Cotas key={index}>{numero}</Cotas>
            ))}
          </Box2>
        </Box1>
      </MainContainer>
    </>
  )
}
