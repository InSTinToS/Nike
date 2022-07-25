/* eslint-disable @next/next/no-img-element */
import { ReactElement } from 'react'

const Navbar = () => (
  <nav className='bg-white text-black'>
    <div className='flex items-center justify-between border-b-2 border-b-gray-200'>
      <ul className='flex items-center h-9'>
        <li className='px-7 py-2 border-r-2 border-b-gray-200'>
          <a className='text-gray-500 text-sm opacity-70'>Junte-se a Nós</a>
        </li>

        <li className='px-7 py-2 border-r-2 border-b-gray-200'>
          <img
            alt=''
            className='h-5 opacity-50'
            src='https://images.lojanike.com.br/topbar/ni/8_20190522191105.png'
          />
        </li>

        <li className='px-7 py-2 border-r-2 border-b-gray-200'>
          <a className='text-gray-500 text-sm font-extrabold tracking-tighter'>
            <img
              alt=''
              className='opacity-50'
              src='https://images.lojanike.com.br/topbar/ni/12_20200512184709.png'
            />
          </a>
        </li>
      </ul>

      <ul className='flex items-center'>
        <li className='px-4 tracking-wide'>
          <a className='text-gray-400 text-xs'>Acompanhar Pedidos</a>
        </li>

        <li className='px-4 tracking-wide'>
          <a className='text-gray-400 text-xs'>Login / Inscreva-se</a>
        </li>

        <li className='px-4 tracking-wide'>
          <a className='text-gray-400 text-xs'>Ajuda</a>
        </li>

        <li className='px-4 tracking-wide'>
          <a>
            <img
              alt=''
              src='https://images.lojanike.com.br/site/ni/icones/cart.png'
            />
          </a>
        </li>
      </ul>
    </div>

    <div>
      <img src='' alt='' />

      <ul>
        <li>
          <a>VOLTA ÀS AULAS</a>
        </li>

        <li>
          <a>NOVAS OFERTAS</a>
        </li>

        <li>
          <a>LANÇAMENTOS</a>
        </li>

        <li>
          <a>FEMININO</a>
        </li>

        <li>
          <a>MASCULINO</a>
        </li>

        <li>
          <a>INFANTIL</a>
        </li>

        <li>
          <a>SNKRS</a>
        </li>

        <input type='text' placeholder='O que você procura?' />
      </ul>
    </div>
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
