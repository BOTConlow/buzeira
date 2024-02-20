import Image from 'next/image'
import Logo from '../../../public/logo.jpg'
import { Header1, Header2, Header3 } from './styles'

export default function Header() {
  return (
    <Header1>
      <Header2>
        <Header3>
          <Image src={Logo} quality={100} alt="logo" />
        </Header3>
      </Header2>
    </Header1>
  )
}
