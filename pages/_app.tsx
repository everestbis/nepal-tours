import '../styles/custom.scss'

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ParallaxProvider } from 'react-scroll-parallax';


function MyApp({ Component, pageProps }: AppProps) {
  return <ParallaxProvider>
    <Component {...pageProps} />
  </ParallaxProvider>
}

export default MyApp
