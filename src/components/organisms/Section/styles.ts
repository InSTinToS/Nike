import styled from 'styled-components'
import tw from 'twin.macro'

const Content = styled.p.attrs({
  className: 'text-responsive-lg'
})`
  ${tw`text-center`}
`

const Title = styled.h2.attrs({
  className: 'text-responsive-xl'
})`
  ${tw`
    pt-6
    text-center
    font-black
    tracking-tighter
  `}
`

const SectionStyle = styled.section`
  ${tw`px-4`}

  & + section {
    ${tw`mt-8`}
  }

  img {
    ${tw`w-full max-w-screen-xl mx-auto`}
  }

  .image {
    ${tw`hidden`}
  }

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
  }

  @media screen and (min-width: 768px) {
    .mobile-image {
      ${tw`hidden`}
    }

    .image {
      ${tw`flex`}
    }
  }
`

export { SectionStyle, Title, Content }
