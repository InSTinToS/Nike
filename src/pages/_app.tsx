import GlobalProvider from 'components/wrappers/GlobalProvider'

import 'styles/tailwind.css'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <GlobalProvider>
    <Component {...pageProps} />
  </GlobalProvider>
)

export default MyApp
