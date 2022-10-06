/* eslint-disable @next/next/no-img-element */
import { HeaderStyle } from './styles'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Header = () => (
  <HeaderStyle>
    <button>
      <IoIosArrowBack />
    </button>

    <img alt='' src='/jordan.png' />

    <span>
      Fique por dentro dos lançamentos <a>SNKRS</a>
    </span>

    <button>
      <IoIosArrowForward />
    </button>
  </HeaderStyle>
)

export default Header
