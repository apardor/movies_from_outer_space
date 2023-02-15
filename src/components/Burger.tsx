import React, { useState, useEffect } from 'react';
import styles from '@/styles/Burger.module.css'
import Nav from '@/components/MainNavigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSpaghettiMonsterFlying} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';



const Burger = () => {

  const [open, setOpen ] = useState(false);
  const [burgerBars, setBurgerBars] = useState([styles.burgerBar, styles.unclicked].join(' '));


  useEffect(() => {
    if (!open) {
      setBurgerBars([styles.burgerBar, styles.unclicked].join(' '))   
     }
      },[open]);

const updateMenu = () =>{
    if(!open){
      setBurgerBars([styles.burgerBar, styles.clicked].join(' '))
   }else{
    setBurgerBars([styles.burgerBar, styles.unclicked].join(' '))
   }
   setOpen(!open)
  }

  return (
    <nav className={styles.main__nav}>
      <div className={styles.nav__logo}>
      <Link href="/">
      <FontAwesomeIcon icon={faSpaghettiMonsterFlying} className={styles.nav__icon}/>
      </Link>
      </div>
       <div className={styles.burger_menu} onClick={updateMenu}>
          <div className={burgerBars}></div>
          <div className={burgerBars}></div>
          <div className={burgerBars}></div>
      </div>
      <Nav open={open} closing={updateMenu}/>
    </nav>
  )
}

export default Burger