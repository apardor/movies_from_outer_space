import type { AppProps } from 'next/app'
import '../styles/styles.css';
import Burger from '@/components/Burger';



export default function App({ Component, pageProps }: AppProps) {
  return (<>
      <Burger />
      <Component {...pageProps} />
      </>
  )
}
