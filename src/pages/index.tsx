/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import {
  Adquira,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Header1,
  Header2,
  Headline,
  ImageBox1,
  ImageBox2,
  ImageBox3,
  InputDiv,
  MainContainer,
  ModalContent,
  ModalOverlay,
  Preco,
  Quant,
  Redes1,
  Redes2,
  Vernumber,
} from '@/styles/index.styles'
import Image from 'next/image'

import Logo from '../../public/logo.jpg'
import Foto from '../../public/foto.jpeg'
import Icon1 from '../../public/icon1.svg'
import Icon2 from '../../public/icon2.svg'
import Icon3 from '../../public/icon3.svg'
import Icon4 from '../../public/icon4.svg'
import { ChangeEvent, useState } from 'react'
import {
  CheckCircle,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  X,
} from 'phosphor-react'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const [quantidade, setQuantidade] = useState(7) // Definindo quantidade inicial como 7
  // eslint-disable-next-line prettier/prettier
  const precoUnitarioInicial = 1.50 // Preço unitário por cota
  const total: number = quantidade * getPrecoPorCota(quantidade)
  const [telefone, setTelefone] = useState('')

  function getPrecoPorCota(quantidade: number): number {
    if (quantidade >= 1000) {
      return 1
    } else if (quantidade >= 500) {
      return 1.1
    } else if (quantidade >= 100) {
      return 1.2
    } else if (quantidade >= 50) {
      return 1.3
    } else if (quantidade >= 25) {
      return 1.4
    } else {
      return precoUnitarioInicial
    }
  }

  const handleCompra = (qtd: number) => {
    const novaQuantidade: number = qtd
    setQuantidade(novaQuantidade)
  }

  const handleCompra2 = (qtd: number) => {
    const novaQuantidade: number = Math.max(7, quantidade + qtd)
    setQuantidade(novaQuantidade)
  }

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Aplicar a máscara de telefone
    const inputTelefone = event.target.value.replace(/\D/g, '')
    const formattedTelefone = inputTelefone
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')

    setTelefone(formattedTelefone)
  }

  const handleConsultaCompra = () => {
    alert('Nenhum registro de compra foi encontrado')
  }

  return (
    <>
      <Head>
        <title>Ação milionária :: Alto Prêmio</title>
        <meta
          name="Ação milionária  :: Alto Prêmio"
          content="Mansão, lamborghni e bmw 1250"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/log.jpg" />
      </Head>

      <MainContainer className={Vietnam.className}>
        <Header1>
          <Header2>
            <Image src={Logo} quality={100} alt="logo" width={185} />
          </Header2>
        </Header1>
        <Box1>
          <ImageBox1>
            <ImageBox2>
              <Image src={Foto} alt="foto" quality={100} />
              <Adquira>Adquira já!</Adquira>
            </ImageBox2>
            <ImageBox3>
              <a href="/">Ação milionária</a>
              <p>Mansão, lamborghni e bmw 1250</p>
            </ImageBox3>
          </ImageBox1>
          <Preco>
            <p>
              POR APENAS{' '}
              <span
                style={{
                  color: '#fff',
                  background: '#101010',
                  padding: '4px 8px',
                  fontWeight: '600',
                }}
              >
                R$ 1,50
              </span>
            </p>
          </Preco>
          <Redes1>
            <Redes2>
              <p>
                Sorteio <span>17/02/24 às 19h00</span>
              </p>
            </Redes2>
            <Redes2>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.altopremio.me%2Fsorteio%2Facao-milionaria-36435"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Compartilhe no Facebook"
                  src={Icon1}
                  quality={100}
                />
              </a>
              <a
                href="https://t.me/share/url?url=https://www.altopremio.me/sorteio/acao-milionaria-36435&text=Ação%20milionária"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Compartilhe no Telegram"
                  src={Icon2}
                  quality={100}
                />
              </a>
              <a
                href="https://twitter.com/share?url=https://www.altopremio.me/sorteio/acao-milionaria-36435"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Compartilhe no Twitter"
                  src={Icon3}
                  quality={100}
                  width={32}
                />
              </a>
              <a
                href="https://wa.me/?text=Ação%20milionária%20:%20https://www.altopremio.me/sorteio/acao-milionaria-36435"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  alt="Compartilhe no Whatsapp"
                  src={Icon4}
                  quality={100}
                />
              </a>
            </Redes2>
          </Redes1>
          <Headline>
            <h1>📣 Promoção</h1>
            <p>Compre mais barato!</p>
          </Headline>
          <Box2>
            <button onClick={() => handleCompra(25)}>
              <b>25</b> por R$ <b>35,00</b>
            </button>
            <button onClick={() => handleCompra(50)}>
              <b>50</b> por R$ <b>65,00</b>
            </button>
            <button onClick={() => handleCompra(100)}>
              <b>100</b> por R$ <b>120,00</b>
            </button>
            <button onClick={() => handleCompra(500)}>
              <b>500</b> por R$ <b>550,00</b>
            </button>
            <button onClick={() => handleCompra(1000)}>
              <b>1000</b> por R$ <b>1.000,00</b>
            </button>
          </Box2>
          <Headline>
            <h1>⚡Cotas</h1>
            <p>Escolha sua sorte</p>
          </Headline>
          <Vernumber onClick={openModal}>
            <ShoppingCart size={14} color="#fff" />
            Ver meus números
          </Vernumber>
          <Box3>
            <p
              style={{
                paddingTop: '8px',
                marginBottom: '1rem',
                color: '#EDEDED',
                fontSize: '.9em',
              }}
            >
              Selecione a quantidade de números
            </p>
            <Box4>
              <Box5 onClick={() => handleCompra2(1)}>
                <h3>
                  <small>+</small>
                  01
                </h3>
                <p>Selecionar</p>
              </Box5>
              <Box5 popular="true" onClick={() => handleCompra2(2)}>
                <h3>
                  <small>+</small>
                  02
                </h3>
                <p>Selecionar</p>
              </Box5>
              <Box5 onClick={() => handleCompra2(5)}>
                <h3>
                  <small>+</small>
                  05
                </h3>
                <p>Selecionar</p>
              </Box5>
              <Box5 onClick={() => handleCompra2(10)}>
                <h3>
                  <small>+</small>
                  10
                </h3>
                <p>Selecionar</p>
              </Box5>
              <Box5 onClick={() => handleCompra2(50)}>
                <h3>
                  <small>+</small>
                  50
                </h3>
                <p>Selecionar</p>
              </Box5>
              <Box5 onClick={() => handleCompra2(100)}>
                <h3>
                  <small>+</small>
                  100
                </h3>
                <p>Selecionar</p>
              </Box5>
            </Box4>
            <Quant>
              <button onClick={() => handleCompra2(-1)}>
                <MinusCircle size={25} color="#fff" />
              </button>
              <input type="text" value={quantidade} readOnly />
              <button onClick={() => handleCompra2(+1)}>
                <PlusCircle size={25} color="#fff" />
              </button>
            </Quant>
          </Box3>
          <div>
            <p>Preço por cota: R$ {getPrecoPorCota(quantidade).toFixed(2)}</p>
            <p>Total: R$ {total.toFixed(2)}</p>
          </div>
        </Box1>

        {modalVisible && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
                borderBottom: '1px solid rgba(255, 255, 255, .1)',
              }}
            >
              <h6>
                Consulta de compras{' '}
                <button onClick={closeModal}>
                  <X size={25} color="#000" />
                </button>
              </h6>
            </ModalContent>
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              style={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
              }}
            >
              <label>Informe seu telefone</label>
              <InputDiv>
                <input
                  type="text"
                  value={telefone}
                  onChange={handleTelefoneChange}
                  maxLength={15}
                />
                <button onClick={handleConsultaCompra}>
                  <CheckCircle size={16} color="#fff" weight="bold" />
                </button>
              </InputDiv>
            </ModalContent>
          </ModalOverlay>
        )}
      </MainContainer>
    </>
  )
}
