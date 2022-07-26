import { NavbarContent } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const OtherLinks = styled.section`
  ${tw`
    flex
    py-14
    justify-evenly 
  `}

  li {
    ${tw`
      mt-4
    `}

    a {
      ${tw`
        opacity-50
      `}
    }
  }
`

const HelpLinks = styled.section`
  ${tw`
    flex
    px-8
    py-14
    text-xs
    relative
    bg-black
    text-white
    space-x-16
  `}

  a {
    ${tw`
      text-gray-500
    `}
  }

  b {
    ${tw`
      mb-2
      block
      text-sm
      text-white
      tracking-tighter
    `}
  }

  > ul {
    ${tw`
      flex-col
      space-y-1
    `}

    li {
      a {
        ${tw`
          text-xs
        `}
      }
    }
  }

  aside {
    ${tw`
      top-14
      right-8
      absolute
    `}

    ul {
      ${tw`
        flex
        space-x-2
      `}
    }
  }
`

const Style = styled.main`
  ${NavbarContent}

  @media screen and (min-width: 768px) {
    header {
      ${tw`space-x-8`}
    }
  }
`

export { Style, HelpLinks, OtherLinks }
