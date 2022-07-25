import { ReactElement } from 'react'

const Navbar = () => <div className='bg-purple-900'>Hello navbar</div>

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
