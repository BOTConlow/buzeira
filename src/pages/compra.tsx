/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import { MainContainer } from '@/styles/compra.styles'

import Header from '@/components/Header'
import QRCode from 'qrcode.react'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Compra() {
  const chavePix = '06df0db0-b004-4fc0-9ea5-b7c27d486c53'
  const valorTotalCotas = 1000

  // Montar o payload PIX
  const payload = `00020101021126BR.GOV.BCB.PIX${chavePix}5204000053039865406${valorTotalCotas}5802BR5913AltoPremio6008BRASILIA62070503***6304A3E5`

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
        <h1>oi</h1>
      </MainContainer>
    </>
  )
}
