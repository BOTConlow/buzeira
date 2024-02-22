/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import { MainContainer } from '@/styles/compra.styles'

import Header from '@/components/Header'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Compra() {
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
