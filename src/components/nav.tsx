import Link from 'next/link';
import styles from '@/styles/Nav.module.css';



const Nav = ({open, closing}) => {


  return (
        <ul className={ open ? `${styles.nav__display}` : `${styles.nav__hide}`}>
         <li className={styles.nav__li} onClick={closing}><Link href="/"> Movies from outer space</Link></li>
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

