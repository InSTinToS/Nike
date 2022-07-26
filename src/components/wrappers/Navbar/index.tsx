/* eslint-disable @next/next/no-img-element */
import { Footer, Header, NavbarStyle } from './styles'

import Field from 'components/molecules/Field'

import { ReactElement } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'

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
  <>
    <NavbarStyle>
      <Header>
        <a id='basket-snkrs'>
          <img
            id='basket'
            alt='basket'
            src='https://images.lojanike.com.br/topbar/ni/8_20190522191105.png'
          />

          <span id='snkrs'>SNKRS</span>
        </a>

        <a id='logo'>
          <img
            alt='logo'
            src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
          />
        </a>

        <button type='button' id='bag'>
          <BsBag />
        </button>

        <button type='button' id='burger'>
          <GiHamburgerMenu />
        </button>

        <ul>
          <li>
            <a>Ajuda</a>
          </li>

          <li>
            <a>Junte-se a nós</a>
          </li>

          <li>
            <a>Entrar</a>
          </li>
        </ul>
      </Header>

      <Footer>
        <img
          alt=''
          src='https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
        />

        <ul>
          {navbarItems.map(({ path, label }) => (
            <li key={path}>
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>

        <Field
          icon={<AiOutlineSearch />}
          inputProps={{ type: 'text', placeholder: 'Buscar' }}
        />

        <button type='button' id='bag'>
          <BsBag />
        </button>
      </Footer>
    </NavbarStyle>
  </>
)

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
