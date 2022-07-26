import styled from 'styled-components'
import tw from 'twin.macro'

const OtherLinks = styled.section`
  ${tw`hidden`}

  @media screen and (min-width: 768px) {
    ${tw`flex pt-14 justify-evenly`}

    li {
      ${tw`mt-4`}

      a {
        ${tw`opacity-50`}
      }
    }
  }
`

const HelpLinks = styled.section`
  ${tw`flex px-8 py-14 mt-14 text-xs bg-black flex-col space-y-6 text-white`}

  a {
    ${tw`text-gray-500`}
  }

  b {
    ${tw`mb-2 block text-sm text-white tracking-tighter`}
  }

  > ul {
    ${tw`space-y-1`}

    li a {
      ${tw`text-xs`}
    }
  }

  aside ul {
    ${tw`flex space-x-2`}

    img {
      ${tw`min-w-8`}
    }
  }

  @media screen and (min-width: 768px) {
    ${tw`flex-row space-y-0 justify-between`}

    > * {
      ${tw`h-full`}
    }
  }

  @media screen and (min-width: 1024px) {
    ${tw`space-x-4`}

    > * {
      ${tw`flex-1`}
    }

    aside {
      ${tw`flex-grow-0`}
    }
  }
`

const FooterStyle = styled.footer`
  ${tw`w-full mr-auto ml-0 min-w-80`}
`

export { FooterStyle, HelpLinks, OtherLinks }
