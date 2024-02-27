/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import {
  Alert,
  Box1,
  Box2,
  Check,
  Check2,
  Copiar,
  Detalhes,
  Detalhes1,
  Escritas,
  Info1,
  InputContainer,
  MainContainer,
  PagamentoCheck,
  Separator,
  SpanContainer,
} from '@/styles/compra.styles'
import { useEffect, useState } from 'react'

import Header from '@/components/Header'
import { QrCodePix } from 'qrcode-pix'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CheckCircle, Checks, Info, QrCode } from 'phosphor-react'
import Barra from '@/components/Barra'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Compra() {
  const [code, setCode] = useState('')
  const [pixCode, setPixCode] = useState('')
  const [dataHoraAtual] = useState(new Date())
  const router = useRouter()
  const { valor, quantidade, comprador, telefone, cpf } = router.query
  const [button, setButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setButton(true)
    }, 5000)
  }, [])

  useEffect(() => {
    const handleGeneratePix = async () => {
      if (!comprador || !valor) {
        return
      }

      const qrCodePix = QrCodePix({
        city: 'São Paulo',
        transactionId: Math.floor(Math.random() * 100000).toString(),
        key: '06df0db0-b004-4fc0-9ea5-b7c27d486c53',
        name: 'Alto Premio',
        value: parseFloat(String(valor)),
        version: '01',
      })

      const copiaCola = qrCodePix.payload()
      const data = await qrCodePix.base64()
      setCode(data)
      setPixCode(copiaCola)
    }

    handleGeneratePix()
  }, [comprador, valor])

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(pixCode)
      .then(() => {
        alert('Código copiado com sucesso!')
      })
      .catch((error) => {
        console.error('Erro ao copiar o código!', error)
      })
  }

  const formatarDataHora = (data: Date) => {
    const dia = String(data.getDate()).padStart(2, '0')
    const mes = String(data.getMonth() + 1).padStart(2, '0')
    const ano = data.getFullYear()
    const horas = String(data.getHours()).padStart(2, '0')
    const minutos = String(data.getMinutes()).padStart(2, '0')

    return `${dia}/${mes}/${ano} às ${horas}h${minutos}`
  }

  const handleCotas = () => {
    router.push(`/cotas?quantidade=${quantidade}`)
  }

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
              <h3>Aguardando pagamento!</h3>
              <p>Finalize o pagamento</p>
            </Check2>
          </Check>
          <Separator />
          <Box2>
            <Barra />
            <SpanContainer>
              <p>
                <span>1</span>
                Copie o código PIX abaixo.
              </p>
            </SpanContainer>
            <InputContainer>
              <input readOnly value={pixCode} />
              <Copiar onClick={handleCopyToClipboard}>Copiar</Copiar>
            </InputContainer>
            <SpanContainer>
              <p>
                <span>2</span>
                Abra o app do seu banco e escolha a opção PIX, como se fosse
                fazer uma transferência.
              </p>
            </SpanContainer>
            <SpanContainer>
              <p>
                <span>3</span>
                Selecione a opção PIX cópia e cola, cole a chave copiada e
                confirme o pagamento.
              </p>
            </SpanContainer>
            <Alert color="yellow">
              Este pagamento só pode ser realizado dentro do tempo, após este
              período, caso o pagamento não for confirmado os números voltam a
              ficar disponíveis.
            </Alert>
            {button && (
              <PagamentoCheck onClick={handleCotas}>
                <Checks size={16} weight="bold" />
                Já fiz o pagamento
              </PagamentoCheck>
            )}
            <Separator />
            <Image
              src={code}
              alt="qrcode"
              width={228}
              height={228}
              quality={100}
            />
            <Escritas>
              <h5>
                <QrCode size={20} weight="bold" />
                QR Code
              </h5>
              <p>
                Acesse o APP do seu banco e escolha a opção pagar com QR Code,
                escaneie o código ao lado e confirme o pagamento.
              </p>
            </Escritas>
          </Box2>
          <Alert color="blue">
            <Info size={20} color="#307499" />
            Após o pagamento aguarde até 5 minutos para a confirmação, caso já
            tenha efetuado o pagamento, clique no botão{' '}
            <b>Já fiz o pagamento.</b>
          </Alert>
          <Box2>
            <Detalhes>
              <Detalhes1>
                <Info size={16} />
                Detalhes da sua compra
              </Detalhes1>
              <p>dfd168e2c57e8b7977cd534a168fa7fa</p>
              <Info1>
                <h4>Comprador:</h4>
                <span>{comprador}</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>CPF:</h4>
                <span>{cpf}</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>Telefone:</h4>
                <span>{telefone}</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>Data/horário:</h4>
                <span>{formatarDataHora(dataHoraAtual)}</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>Situação:</h4>
                <span>Aguardando pagamento</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>Total:</h4>
                <span>R$ {valor}</span>
              </Info1>
              <Separator color="secondary" />
              <Info1>
                <h4>Cotas:</h4>
                <span>Os títulos são liberados após o pagamento</span>
              </Info1>
            </Detalhes>
          </Box2>
        </Box1>
      </MainContainer>
    </>
  )
}
