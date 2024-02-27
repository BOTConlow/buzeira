/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
// eslint-disable-next-line camelcase
import { Montserrat } from 'next/font/google'
import {
  Adquira,
  Alert,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Continuar,
  Footer,
  Headline,
  ImageBox1,
  ImageBox2,
  ImageBox3,
  InputDiv,
  InputDiv2,
  MainContainer,
  Mensagem,
  ModalContent,
  ModalContent2,
  ModalContent3,
  ModalOverlay,
  ModalOverlay2,
  Participar,
  Preco,
  Quant,
  Redes1,
  Redes2,
  Vernumber,
} from '@/styles/index.styles'
import Image from 'next/image'

import Foto from '../../public/foto.jpeg'
import Icon1 from '../../public/icon1.svg'
import Icon2 from '../../public/icon2.svg'
import Icon3 from '../../public/icon3.svg'
import Icon4 from '../../public/icon4.svg'
import { ChangeEvent, useState } from 'react'
import * as z from 'zod'
import {
  ArrowCircleRight,
  ArrowRight,
  CheckCircle,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
  WarningCircle,
  X,
} from 'phosphor-react'
import Header from '@/components/Header'
import { useRouter } from 'next/router'

const Vietnam = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const registerDto = z.object({
  nome: z
    .string()
    .min(3, 'Por favor, digite seu nome completo.')
    .includes(' ', { message: 'Por favor, digite seu nome completo.' }),
  email: z.string().email('Por favor, digite um e-mail válido.'),
  celular: z.string().min(15, 'Por favor, digite um telefone válido'),
  dataNascimento: z
    .string()
    .min(10, 'Por favor, digite uma data de nascimento válida (dd/mm/aaaa)'),
  cpf: z.string().min(11, 'Por favor, digite um CPF válido'),
})

type RegisterDTO = z.infer<typeof registerDto>

export default function Home() {
  const router = useRouter()

  const [page, setPage] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [quantidade, setQuantidade] = useState(7) // Definindo quantidade inicial como 7
  // eslint-disable-next-line prettier/prettier
  const precoUnitarioInicial = 1.50 // Preço unitário por cota
  const total: number = quantidade * getPrecoPorCota(quantidade)
  const [registerForm, setRegisterForm] = useState({
    cpf: '',
    celular: '',
    dataNascimento: '',
    email: '',
    nome: '',
  } as RegisterDTO)
  const [mensagemSucess, setMensagemSucess] = useState('')
  const [mensagemError, setMensagemError] = useState('')
  const [telefone, setTelefone] = useState('')

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const openModal2 = () => {
    setModalVisible2(true)
  }

  const closeModal2 = () => {
    setModalVisible2(false)
  }

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

  const handleCelularChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputCelular = event.target.value.replace(/\D/g, '')
    let formattedCelular = inputCelular
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')

    if (formattedCelular.length > 15) {
      formattedCelular = formattedCelular.substr(0, 15)
    }

    setRegisterForm((prevRegister) => ({
      ...prevRegister,
      celular: formattedCelular,
    }))
  }

  const handleTelefoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Aplicar a máscara de telefone
    const inputTelefone = event.target.value.replace(/\D/g, '')
    const formattedTelefone = inputTelefone
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')

    setTelefone(formattedTelefone)
  }

  const handleDataNascimentoChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Formatando a data de nascimento enquanto o usuário digita
    const inputDataNascimento = event.target.value.replace(/\D/g, '')
    let formattedDataNascimento = inputDataNascimento
      .replace(/^(\d{2})(\d)/, '$1/$2')
      .replace(/^(\d{2})\/(\d{2})(\d)/, '$1/$2/$3')

    // Limitando o tamanho da data de nascimento
    if (formattedDataNascimento.length > 10) {
      formattedDataNascimento = formattedDataNascimento.substr(0, 10)
    }

    setRegisterForm((prevRegister) => ({
      ...prevRegister,
      dataNascimento: formattedDataNascimento,
    }))
  }

  const handleCpfChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Formatando o CPF enquanto o usuário digita
    const inputCpf = event.target.value.replace(/\D/g, '')
    let formattedCpf = inputCpf
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

    // Limitando o tamanho do CPF
    if (formattedCpf.length > 14) {
      formattedCpf = formattedCpf.substr(0, 14)
    }

    setRegisterForm((prevRegister) => ({
      ...prevRegister,
      cpf: formattedCpf,
    }))
  }

  const handleConsultaCompra = () => {
    alert('Nenhum registro de compra foi encontrado')
  }

  const handleSubmit = () => {
    const validationResult = registerDto.safeParse(registerForm)
    if (validationResult.success) {
      console.log('Formulário válido:', registerForm)
      setMensagemSucess('Formulário enviado com sucesso!')
      setMensagemError('')

      router.push(
        `/compra?valor=${total}&quantidade=${quantidade}&comprador=${registerForm.nome}&telefone=${registerForm.celular}&cpf=${registerForm.cpf}`,
      )
    } else {
      const errorMessages = validationResult.error.errors.map(
        (error) => error.message,
      )
      setMensagemError(errorMessages.join(' '))
      setMensagemSucess('')
    }
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
        <Header />
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
                Sorteio <span>28/02/24 às 19h00</span>
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
            <button
              onClick={() => {
                handleCompra(25)
                openModal2()
              }}
            >
              <b>25</b> por R$ <b>35,00</b>
            </button>
            <button
              onClick={() => {
                handleCompra(50)
                openModal2()
              }}
            >
              <b>50</b> por R$ <b>65,00</b>
            </button>
            <button
              onClick={() => {
                handleCompra(100)
                openModal2()
              }}
            >
              <b>100</b> por R$ <b>120,00</b>
            </button>
            <button
              onClick={() => {
                handleCompra(500)
                openModal2()
              }}
            >
              <b>500</b> por R$ <b>550,00</b>
            </button>
            <button
              onClick={() => {
                handleCompra(1000)
                openModal2()
              }}
            >
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
          <Participar onClick={openModal2}>
            <span>
              <CheckCircle size={16} weight="bold" />
              Participar do sorteio
            </span>
            <small>R$ {total.toFixed(2)}</small>
          </Participar>
        </Box1>
        <Footer>
          <p>
            Copyright © 2022 <b>ALTO PRÊMIO</b>
          </p>
          <p>Todos os direitos reservados.</p>
        </Footer>

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

        {modalVisible2 && (
          <ModalOverlay2>
            <ModalContent2
              onClick={(e) => e.stopPropagation()}
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, .1)',
              }}
            >
              <h6>
                Checkout{' '}
                <button onClick={closeModal2}>
                  <X size={25} color="#000" />
                </button>
              </h6>
            </ModalContent2>
            <ModalContent3 onClick={(e) => e.stopPropagation()}>
              <Alert type="one">
                <p>
                  <CheckCircle size={15} color="#055160" />
                  Você está adquirindo <span>{quantidade} títulos</span> da ação
                  entre amigos <span>Ação milionária</span> , seus números serão
                  gerados assim que concluir a compra.
                </p>
              </Alert>
              {page === 0 ? (
                <>
                  <InputDiv2>
                    <label>Celular</label>
                    <input
                      type="text"
                      value={registerForm.celular}
                      onChange={handleCelularChange}
                      maxLength={15}
                    />
                  </InputDiv2>
                  <Alert type="two">
                    <WarningCircle size={15} color="#055160" />
                    <p>Informe seu telefone para continuar.</p>
                  </Alert>
                  <Continuar
                    onClick={() => {
                      setPage(1)
                    }}
                  >
                    Continuar
                    <ArrowRight size={16} weight="bold" />
                  </Continuar>
                </>
              ) : page === 1 ? (
                <>
                  <InputDiv2>
                    <label>Nome completo</label>
                    <input
                      type="text"
                      value={registerForm.nome}
                      onChange={(e) =>
                        setRegisterForm((prevRegister) => ({
                          ...prevRegister,
                          nome: e.target.value,
                        }))
                      }
                    />
                  </InputDiv2>
                  <InputDiv2>
                    <label>E-mail</label>
                    <input
                      type="text"
                      value={registerForm.email}
                      onChange={(e) =>
                        setRegisterForm((prevRegister) => ({
                          ...prevRegister,
                          email: e.target.value,
                        }))
                      }
                    />
                  </InputDiv2>
                  <InputDiv2>
                    <label>Celular</label>
                    <input
                      type="text"
                      value={registerForm.celular}
                      onChange={handleCelularChange}
                      maxLength={15}
                    />
                  </InputDiv2>
                  <InputDiv2>
                    <label>Data de Nascimento</label>
                    <input
                      type="text"
                      value={registerForm.dataNascimento}
                      onChange={handleDataNascimentoChange}
                      maxLength={10}
                    />
                  </InputDiv2>
                  <InputDiv2>
                    <label>CPF</label>
                    <input
                      type="text"
                      value={registerForm.cpf}
                      onChange={handleCpfChange}
                      maxLength={14}
                    />
                  </InputDiv2>
                  <Alert type="two">
                    <WarningCircle size={15} color="#055160" />
                    <p>
                      Informe os dados corretos para recebimento das premiações.
                    </p>
                  </Alert>
                  <p
                    style={{
                      textAlign: 'left',
                      fontSize: '.9em',
                      color: '#7B7F83BF',
                    }}
                  >
                    Ao realizar este pagamento e confirmar minha participação
                    nesta ação entre amigos, declaro ter lido e concordado com
                    os <span style={{ color: '#fff' }}>termos de uso</span>{' '}
                    desta plataforma.
                  </p>
                  <Continuar color="green" onClick={handleSubmit}>
                    Concluir cadastro e pagar
                    <ArrowCircleRight size={16} />
                  </Continuar>
                </>
              ) : (
                ''
              )}
              {mensagemError && (
                <Mensagem result={'error'}>{mensagemError}</Mensagem>
              )}
              {mensagemSucess && (
                <Mensagem result={'sucess'}>{mensagemSucess}</Mensagem>
              )}
            </ModalContent3>
          </ModalOverlay2>
        )}
      </MainContainer>
    </>
  )
}
