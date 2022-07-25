import styled from 'styled-components'
import tw from 'twin.macro'

const About = styled.ul`
  ${tw`
    flex     
  `}

  li {
    ${tw`
      px-7
      py-2
      border-r
      border-r-gray-200
    `}

    a {
      display: block;

      ${tw`
        flex
        items-center
        h-5
        text-sm
        text-gray-500 
        cursor-pointer
      `}

      span {
        ${tw`
          opacity-70
        `}
      }

      &:hover {
        img,
        span {
          ${tw`
            opacity-100
          `}
        }
      }

      img {
        ${tw`
          opacity-50
        `}

        &#basket {
          ${tw`
            h-full
          `}
        }
      }
    }
  }
`

const Account = styled.ul`
  ${tw`
    flex
    items-center
    space-x-8
    px-8
  `}

  li {
    ${tw`
      tracking-wide
    `}

    a {
      ${tw`
        text-xs
        text-gray-400 
      `}
    }
  }
`

const Header = tw.header`
  flex 
  items-center
  justify-between 
  border-b 
  border-b-gray-200
`

export const Footer = styled.footer`
  ${tw`
    flex 
    justify-between
    items-center
    px-8
    border-b
    border-b-gray-200
  `}

  > img {
    ${tw`
      w-16
    `}
  }
`

export const MainLinks = styled.ul`
  ${tw`
    flex
    items-center
  `}

  li {
    ${tw`
      px-6 
      py-7
      border-b-2
      border-b-transparent
    `}

    &:hover {
      ${tw`
        cursor-pointer
        border-b-2
        border-b-black
      `}
    }

    a {
      ${tw`
        text-sm 
        tracking-tighter 
        font-semibold
      `}
    }
  }
`

export const Search = styled.div`
  ${tw`
    flex 
    items-center 
    border 
    py-2
    px-4 
    space-x-4
  `}

  svg {
    ${tw`
      h-5 
      w-5
    `}
  }

  input {
    ${tw`
      text-sm
    `}
  }
`

export { About, Account, Header }
