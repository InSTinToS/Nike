import { IButtonProps } from './types'

const Button = ({ children, ...props }: IButtonProps) => (
  <button className='bg-black text-white py-3 px-6 rounded-full' {...props}>
    {children}
  </button>
)

export default Button
