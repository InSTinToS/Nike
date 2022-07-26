import styled from 'styled-components'
import tw from 'twin.macro'

const Section = styled.section`
  ${tw`
    px-8
    py-5
    pt-0
  `}

  & + section {
    ${tw`
      pt-5
    `}
  }

  h3 {
    ${tw`
      pt-6
      mb-2
      text-2xl
      font-bold
      tracking-tighter
    `}
  }

  article {
    ${tw`
      flex
      flex-col
      space-y-5
      items-center
    `}

    h2 {
      ${tw`
      pt-6
      text-6xl
      font-black
      tracking-tighter
    `}
    }
  }
`

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
  header {
    ${tw`
      py-2 
      flex 
      space-x-48
      justify-center 
      items-center 
    `}

    button svg {
      ${tw`
        h-6 
        w-6
      `}
    }

    > div {
      ${tw`
        flex
        items-center
      `}

      img {
        ${tw`
          h-10
          mr-3
        `}
      }

      span {
        ${tw`
          text-sm
        `}

        a {
          ${tw`
            underline
            font-bold
            tracking-tighter
          `}
        }
      }
    }
  }
`

export { Style, HelpLinks, OtherLinks, Section }
