import { FieldStyle } from './styles'
import type { IFieldProps } from './types'

const Field = ({ icon: Icon, inputProps }: IFieldProps) => (
  <FieldStyle className='Field'>
    {Icon}

    <input {...inputProps} />
  </FieldStyle>
)

export default Field
