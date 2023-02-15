import type { AppProps } from 'next/app'
import '../styles/styles.css';
import Burger from '@/components/Burger';
import Footer from '@/components/Footer';
import styles from '@/styles/App.module.css'




export default function App({ Component, pageProps }: AppProps) {
  return (
      <div className={styles.app__container}>
      <Burger />
      <Component {...pageProps} />
      <Footer />
      </div>
  )
}
