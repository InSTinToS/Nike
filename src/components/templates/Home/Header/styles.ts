import {
  NavbarContent,
  NavbarPaddingTop
} from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const HeaderStyle = styled.header`
  ${tw`w-full flex space-x-4 items-center justify-center py-4 px-4`}

  ${NavbarPaddingTop}
  ${NavbarContent}
  
  img {
    ${tw`w-10 h-auto`}
  }

  span {
    ${tw`flex-1 text-sm text-center max-w-72`}

    a {
      ${tw`underline`}
    }
  }

  button svg {
    ${tw`w-6 h-6`}
  }
`

export { HeaderStyle }
