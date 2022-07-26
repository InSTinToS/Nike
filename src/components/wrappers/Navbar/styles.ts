import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarPaddingTop = css`
  ${tw`pt-24`}

  @media screen and (min-width: 768px) {
    ${tw`pt-48`}
  }

  @media screen and (min-width: 1024px) {
    ${tw`pt-32`}
  }
`

const NavbarContent = css`
  ${tw`max-w-screen-3xl w-full min-w-80 mx-auto`}
`

const Header = styled.header`
  ${tw`flex w-full px-4 py-4 items-center max-w-screen-3xl`}

  img {
    ${tw`h-3.5`}
  }

  svg {
    ${tw`h-6 w-6`}
  }

  ul {
    ${tw`hidden`}
  }

  #bag {
    ${tw`ml-auto mr-4`}
  }

  #basket-snkrs {
    ${tw`hidden`}
  }

  @media screen and (min-width: 425px) {
    #logo {
      ${tw`hidden`}
    }

    #basket-snkrs {
      ${tw`flex`}

      #basket {
        ${tw`h-6 mr-2`}
      }

      #snkrs {
        ${tw`text-black font-extrabold tracking-tighter`}
      }
    }
  }

  @media screen and (min-width: 768px) {
    #bag,
    #burger {
      ${tw`hidden`}
    }

    ul {
      ${tw`flex ml-auto text-xs space-x-2`}

      li + li {
        ${tw`pl-2 border-l border-l-black`}
      }
    }
  }
`

const Footer = styled.footer`
  ${tw`flex w-full px-4 items-center justify-between max-w-screen-3xl`}

  ul, img {
    ${tw`hidden`}
  }

  > img {
    ${tw`w-16 h-16`}
  }

  #bag {
    ${tw`hidden`}
  }

  @media screen and (min-width: 768px) {
    ${tw`grid gap-y-2 gap-x-4 grid-cols-navbar`}

    ul,
    img {
      ${tw`flex`}
    }

    ul {
      ${tw`justify-between items-center row-start-2 col-span-3`}

      li {
        ${tw`h-full`}

        a {
          ${tw` py-5 px-2 block text-sm border-b-2 tracking-tighter 
            border-b-transparent`}

          &:hover {
            ${tw`border-b-2 border-b-black`}
          }
        }
      }
    }

    #bag {
      ${tw`block`}

      svg {
        ${tw`w-6 h-6`}
      }
    }
  }

  @media screen and (min-width: 1024px) {
    ${tw`flex px-4 items-center justify-between`}

    .Field {
      ${tw`flex-none`}
    }
  }
`

const NavbarStyle = styled.nav`
  ${tw`flex flex-col items-center fixed z-10 top-0 w-full min-w-80 bg-white`}
`

export { Header, NavbarStyle, Footer, NavbarContent, NavbarPaddingTop }
