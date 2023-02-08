import React, { useState, useEffect } from 'react';
import styles from '@/styles/Burger.module.css'
import Nav from './Nav';



const Burger = () => {

  const [open, setOpen ] = useState(false);
  const [burgerclass, setBurgerClass] = useState("burger-bar unclicked");


  useEffect(() => {
    if (!open) {
      setBurgerClass("burger-bar unclicked")
    }
      },[open]);

   const updateMenu = () =>{
    if(!open){
     setBurgerClass("burger-bar clicked")
   }else{
   setBurgerClass("burger-bar unclicked")
   }
   setOpen(!open)
  }

  return (
    <nav className={styles.nav}>
       <div className={styles.burger_menu} open={open} onClick={updateMenu}>
          <div className={styles.burgerClass}></div>
          <div className={styles.burgerClass}></div>
          <div className={styles.burgerClass}></div>
      </div>
      <Nav open={open} closing={updateMenu}/>
    </nav>
  )
}

export default Burger