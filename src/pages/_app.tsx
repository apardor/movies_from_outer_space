import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from 'theme'
import Nav from '../components/nav'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Component {...pageProps} />
  </ThemeProvider>
  )
}
