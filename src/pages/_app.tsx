import type { AppProps } from 'next/app'
import '../styles/styles.css';
import Burger from '@/components/Burger';
import Footer from '@/components/Footer';
import styles from '@/styles/App.module.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false




export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={styles.app__container}>
      <Burger />
      <Component {...pageProps} />
      <Footer />
      </div>
  )
}
