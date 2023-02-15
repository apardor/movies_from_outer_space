import Link from 'next/link';
import styles from '@/styles/Nav.module.css';



const Nav = ({open, closing} : {open:any, closing:any}) => {


  return (
        <ul className={ open ? `${styles.nav__display}` : `${styles.nav__hide}`}>
         <li className={styles.nav__li} onClick={closing}><Link href="/">Home</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/00s">00s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/10s">10s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/20s">20s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/30s">30s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/40s">40s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/50s">50s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/60s">60s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/70s">70s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/80s">80s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/90s">90s</Link></li>
         <li className={styles.nav__li} onClick={closing}><Link href="/about">About</Link></li>
        </ul>
  )
};


export default Nav

