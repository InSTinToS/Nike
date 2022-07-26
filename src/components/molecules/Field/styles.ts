import styled from 'styled-components'
import tw from 'twin.macro'

const FieldStyle = styled.div`
  ${tw`flex flex-1 items-center py-2 space-x-4`}

  svg {
    ${tw`w-auto h-6`}
  }

  input {
    ${tw`text-sm w-full`}
  }
`

export { FieldStyle }
