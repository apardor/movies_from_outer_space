import type { AppProps } from 'next/app'
import Nav from '../components/Nav'
import '../styles/styles.css';



export default function App({ Component, pageProps }: AppProps) {
  return (<>
      <Nav />
      <Component {...pageProps} />
      </>
  )
}
