import type { AppProps } from 'next/app'
import '../styles/styles.css';
import Burger from '@/components/Burger';
import Footer from '@/components/Footer';



export default function App({ Component, pageProps }: AppProps) {
  return (<>
      <Burger />
      <Component {...pageProps} />
      <Footer />
      </>
  )
}
