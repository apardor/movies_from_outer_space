import React from 'react';
import styles from '@/styles/Footer.module.css';
import Image from 'next/image';
import tmdbLogo from '../../public/tmdb_logo.svg';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {faUserAstronaut } from "@fortawesome/free-solid-svg-icons";




const Footer = () => {
  return (
    <div className={styles.footer__bar}>
    <Link href="https://www.themoviedb.org/">
        <Image src={tmdbLogo} alt={'The Movie DB'}  width={250}/>
    </Link>    
    <Link href="https://www.linkedin.com/in/apardor/">
    <FontAwesomeIcon icon={faLinkedin} className={styles.footer__icon}/>
    </Link>
    <Link href="https://andrespardo.digital">
    <FontAwesomeIcon icon={faUserAstronaut} className={styles.footer__icon}/>
    </Link>
    </div>
  )
}

export default Footer