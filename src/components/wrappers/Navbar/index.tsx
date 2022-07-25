/* eslint-disable @next/next/no-img-element */
import { About, Account, Footer, Header, MainLinks, Search } from './styles'

import { ReactElement } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const navbarItems = [
  {
    path: 'VOLTA ÀS AULAS',
    label: 'VOLTA ÀS AULAS'
  },
  {
    path: 'NOVAS OFERTAS',
    label: 'NOVAS OFERTAS'
  },
  {
    path: 'LANÇAMENTOS',
    label: 'LANÇAMENTOS'
  },
  {
    path: 'FEMININO',
    label: 'FEMININO'
  },
  {
    path: 'MASCULINO',
    label: 'MASCULINO'
  },
  {
    path: 'INFANTIL',
    label: 'INFANTIL'
  },
  {
    path: 'SNKRS',
    label: 'SNKRS'
  }
]

const Navbar = () => (
  <nav>
    <Header>
      <About>
        <li>
          <a>
            <span>Junte-se a Nós</span>
          </a>
        </li>

        <li>
          <a>
            <img
              alt=''
              id='basket'
              src='https://images.lojanike.com.br/topbar/ni/8_20190522191105.png'
            />
          </a>
        </li>

        <li>
          <a>
            <img
              alt=''
              src='https://images.lojanike.com.br/topbar/ni/12_20200512184709.png'
            />
          </a>
        </li>
      </About>

      <Account>
        <li>
          <a>Acompanhar Pedidos</a>
        </li>

        <li>
          <a>Login / Inscreva-se</a>
        </li>

        <li>
          <a>Ajuda</a>
        </li>

        <li>
          <a>
            <img
              alt=''
              src='https://images.lojanike.com.br/site/ni/icones/cart.png'
            />
          </a>
        </li>
      </Account>
    </Header>

    <Footer>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
        alt=''
      />

      <MainLinks>
        {navbarItems.map(({ path, label }) => (
          <li key={path}>
            <a href={path}>{label}</a>
          </li>
        ))}
      </MainLinks>

      <Search>
        <AiOutlineSearch />

        <input type='text' placeholder='O que você procura?' />
      </Search>
    </Footer>
  </nav>
)

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
