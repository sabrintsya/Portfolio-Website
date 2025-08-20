import React,  { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">
    Meet bina
    </a>
    <div className={styles.menu} >
      <img className={styles.menuBtn} 
      src={
         menuOpen
          ? getImageUrl("navIcon/closeIcon.svg") 
          : getImageUrl("navIcon/menuIcon.svg")
          } 
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={() => setMenuOpen(false)}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#journey">Journey</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  );
};


