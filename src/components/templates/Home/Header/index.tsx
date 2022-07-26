/* eslint-disable @next/next/no-img-element */
import { HeaderStyle } from './styles'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Header = () => (
  <HeaderStyle>
    <button>
      <IoIosArrowBack />
    </button>

    <img
      alt=''
      src='https://images.lojanike.com.br/pitchbar/ni/18_20200130171103.png'
    />

    <span>
      Fique por dentro dos lançamentos <a>SNKRS</a>
    </span>

    <button>
      <IoIosArrowForward />
    </button>
  </HeaderStyle>
)

export default Header
